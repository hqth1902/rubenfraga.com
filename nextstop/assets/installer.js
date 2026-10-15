// Local, pinned Espressif tooling. No Wi-Fi credentials leave the board.
export const RELEASE_URL = '/nextstop/assets/release.json';
const messages = {
  de: {
    install: 'NextStop installieren', unsupported: 'Die USB-Installation benötigt Chrome oder Edge am Computer. Du kannst die fertige Datei auch herunterladen und mit dem Espressif-Werkzeug installieren.',
    confirm: 'Bitte bestätige zuerst, dass die Erstinstallation vorhandene Einstellungen überschreibt.',
    choose: 'Wähle den USB-Anschluss deines FireBeetle aus.', downloading: 'Die geprüfte Installationsdatei wird geladen …', connecting: 'Verbindung zum ESP32-C6 wird hergestellt …',
    writing: 'NextStop wird installiert. USB-C bitte angeschlossen lassen …', done: 'Installation abgeschlossen. Drücke RESET am FireBeetle und folge den QR-Codes auf dem Display.',
    failed: 'Die Installation wurde nicht abgeschlossen. Prüfe das USB-Datenkabel. Falls nötig: BOOT halten, RESET kurz drücken, BOOT loslassen und erneut versuchen.',
    cancelled: 'Geräteauswahl abgebrochen. Es wurde nichts installiert.', wrongChip: 'Dieses Paket ist ausschliesslich für den ESP32-C6. Auf dem gewählten Gerät wurde nichts installiert.',
    invalid: 'Die Installationsdatei passt nicht zu dieser NextStop-Version. Bitte lade die Seite erneut.', unavailable: 'Die Installationsdatei ist momentan nicht erreichbar. Bitte versuche es später erneut.'
  },
  en: {
    install: 'Install NextStop', unsupported: 'USB installation requires Chrome or Edge on a computer. You can also download the finished image and use the Espressif flashing tool.',
    confirm: 'Please first confirm that initial installation overwrites existing settings.',
    choose: 'Choose your FireBeetle USB port.', downloading: 'Downloading the verified installation image …', connecting: 'Connecting to the ESP32-C6 …',
    writing: 'Installing NextStop. Keep USB-C connected …', done: 'Installation complete. Press RESET on the FireBeetle and follow the QR codes on its display.',
    failed: 'Installation did not finish. Check the USB data cable. If needed: hold BOOT, briefly press RESET, release BOOT and try again.',
    cancelled: 'Device selection cancelled. Nothing was installed.', wrongChip: 'This package is only for the ESP32-C6. Nothing was installed on the selected device.',
    invalid: 'The installation image does not match this NextStop version. Please reload the page.', unavailable: 'The installation image is currently unavailable. Please try again later.'
  }
};
export function validateFactoryMetadata(release) {
  const file = release?.factory;
  if (release?.product !== 'NextStop' || typeof release.version !== 'string' || !/^\d+\.\d+\.\d+$/.test(release.version) ||
      file?.board !== 'firebeetle2-c6' || file.chip !== 'ESP32-C6' || file.address !== 0 ||
      !Number.isSafeInteger(file.size) || file.size < 65536 || file.size > 4 * 1024 * 1024 ||
      typeof file.sha256 !== 'string' || !/^[a-f0-9]{64}$/.test(file.sha256) ||
      file.url !== `/nextstop/downloads/files/NextStop-ESP32-C6-${release.version}-Factory.bin`) throw Error('invalid');
  return file;
}
export async function verifiedFactoryImage(file, request = globalThis.fetch, cryptoAPI = globalThis.crypto) {
  const response = await request(file.url, {cache: 'no-store', credentials: 'omit'});
  if (!response.ok) throw Error('unavailable');
  const bytes = new Uint8Array(await response.arrayBuffer());
  const hash = new Uint8Array(await cryptoAPI.subtle.digest('SHA-256', bytes));
  const digest = [...hash].map(n => n.toString(16).padStart(2, '0')).join('');
  if (bytes.byteLength !== file.size || bytes[0] !== 0xe9 || digest !== file.sha256) throw Error('invalid');
  return bytes;
}
export async function installFactory({confirmed, serial, request = globalThis.fetch, cryptoAPI = globalThis.crypto,
  loadLibrary = () => import('./vendor/esptool-0.7.0.js'), status = () => {}, progress = () => {}}) {
  if (!confirmed) throw Error('confirm');
  if (!serial?.requestPort) throw Error('unsupported');
  let transport;
  status('choose');
  // Request the port before any network await so this stays in the click gesture.
  const port = await serial.requestPort();
  try {
    status('downloading');
    const response = await request(RELEASE_URL, {cache: 'no-store', credentials: 'omit'});
    if (!response.ok) throw Error('unavailable');
    const release = await response.json();
    const file = validateFactoryMetadata(release);
    const bytes = await verifiedFactoryImage(file, request, cryptoAPI);
    const {ESPLoader, Transport} = await loadLibrary();
    transport = new Transport(port, true);
    const terminal = {clean() {}, writeLine() {}, write() {}};
    const loader = new ESPLoader({transport, baudrate: 115200, romBaudrate: 115200, terminal, debugLogging: false});
    status('connecting');
    await loader.main();
    if (loader.chip?.CHIP_NAME !== 'ESP32-C6') throw Error('wrongChip');
    const flashSize = await loader.detectFlashSize();
    if (typeof flashSize !== 'string' || !/^\d+MB$/.test(flashSize) || Number(flashSize.slice(0, -2)) < 4) throw Error('wrongChip');
    status('writing');
    await loader.writeFlash({fileArray: [{data: bytes, address: 0}], flashMode: 'dio', flashFreq: '80m', flashSize: '4MB',
      eraseAll: false, compress: true, reportProgress: (_file, written, total) => progress(total ? Math.round(written * 100 / total) : 0)});
    progress(100);
    // The explicit RESET instruction works with both ROM and USB-JTAG transports.
    status('done');
    return {version: release.version, chip: loader.chip.CHIP_NAME, bytes: bytes.byteLength};
  } finally {
    if (transport) await transport.disconnect().catch(() => {});
    else if (port.close) await port.close().catch(() => {});
  }
}
export function mountInstaller(doc = globalThis.document, nav = globalThis.navigator) {
  const button = doc?.getElementById('install-button');
  if (!button) return;
  const status = doc.getElementById('install-status');
  const progress = doc.getElementById('install-progress');
  const confirm = doc.getElementById('factory-reset-confirm');
  let busy = false;
  let state = '';
  const language = () => doc.documentElement.lang === 'en' ? 'en' : 'de';
  const supported = !!nav?.serial?.requestPort && globalThis.isSecureContext;
  function render() {
    button.disabled = busy || !supported || !confirm?.checked;
    button.textContent = messages[language()].install;
    if (status) status.textContent = messages[language()][state || (supported ? '' : 'unsupported')] || '';
  }
  confirm?.addEventListener('change', render);
  globalThis.addEventListener?.('nextstop:languagechange', render);
  button.addEventListener('click', async () => {
    if (busy) return;
    busy = true; state = ''; if (progress) {progress.value = 0; progress.hidden = false;} render();
    try {
      await installFactory({confirmed: !!confirm?.checked, serial: nav.serial,
        status: value => {state = value; render();}, progress: value => {if (progress) progress.value = value;}});
    } catch (error) {
      state = error?.name === 'NotFoundError' ? 'cancelled' : (messages[language()][error.message] ? error.message : 'failed');
    } finally {busy = false; render();}
  });
  render();
}
if (typeof document !== 'undefined') mountInstaller();
