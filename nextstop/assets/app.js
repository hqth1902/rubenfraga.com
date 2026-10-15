(function () {
  'use strict';
  const STORAGE_KEY = 'nextstop-language';
  const en = {
    'skip': 'Skip to content',
    'nav.setup': 'Set up', 'nav.build': 'Build your own', 'nav.downloads': 'Downloads',
    'footer.licenses': 'Licences',
    'footer.disclaimer': 'A personal project by Ruben Fraga. Not an official SBB app. Real-time notices depend on the data available from transport operators.',
    'home.kicker': 'YOUR SWISS DEPARTURE BOARD',
    'home.title1': 'Your next stop.', 'home.title2': 'Right at home.',
    'home.intro': 'One glance at the board, and you know when to leave. Your trains and buses on e-ink — configured on your Mac or in a browser.',
    'home.ready': 'I have a board', 'home.build': 'Build my own',
    'home.note': 'ESP32-C6 · 7.5-inch e-ink · German & English',
    'home.demo': 'Illustration · example data, not live departures',
    'home.imageAlt': 'Illustration of a monochrome NextStop e-ink board showing train and bus departures in Winterthur',
    'home.pathTitle': 'Your way to your own board.',
    'home.pathIntro': 'Received one as a gift or building one yourself? Start here.',
    'home.pathReady': 'Your board is already here.',
    'home.pathReadyText': 'Connect it to your Wi-Fi, open it on your Mac or in a browser, and choose your stops.',
    'home.pathBuild': 'You would like to build one.',
    'home.pathBuildText': 'The selected parts, wiring and ready-made software for the FireBeetle ESP32-C6.',
    'home.configKicker': 'SET UP ONCE. CHANGE WHENEVER YOU LIKE.',
    'home.configTitle': 'Your connections. Your everyday life.',
    'home.configText': 'Choose stops, lines, directions and your walking time. Whether you want five trains and five buses or a single connection: the number applies to each stop entry. The board then works independently — your Mac can stay off.',
    'home.mac': 'Download the Mac app', 'home.appDemo': 'PREVIEW · DEMO',
    'home.stopsDemo': '2 stops · your selection', 'home.sendDemo': 'Send to board',
    'home.colorNote': 'Colour on your Mac and in the browser. The physical board displays a monochrome image. This view is an illustration.',
    'home.timingTitle': 'A calm display. An honest timestamp.',
    'home.timingIntro': 'Fetching data and refreshing the screen have their own timing. The timestamp on the board tells you how current the display is.',
    'home.timingData': 'Data in continuous mode',
    'home.timingDataText': 'With continuous power, the board can fetch new departures every 30 seconds.',
    'home.timingScreen': 'Between screen refreshes',
    'home.timingScreenText': 'The selected e-ink display is refreshed no sooner than every three minutes. Notices appear at the next permitted refresh.',
    'home.timingBattery': 'Waking in battery mode',
    'home.timingBatteryText': 'By default, the board sleeps for five minutes between fetches. The image stays visible. Battery runtime has not yet been measured.',
    'home.sourceNote': 'The free Transport API works without a key. You can optionally use the official OJP interface with your own key. Delays, platform changes and cancellations appear only when reported by the data source. This hardware combination is prepared; testing on the actual device is still required.',
    'setup.crumb': 'Set up', 'setup.kicker': 'YOU ALREADY HAVE A BOARD',
    'setup.title1': 'Unbox. Connect.', 'setup.title2': 'Choose your way.',
    'setup.intro': 'Your board connects to your home Wi-Fi. Configure it on your Mac, Windows computer or phone — it then works independently.',
    'setup.giftTitle': 'Received a board as a gift?',
    'setup.giftText': 'A freshly installed board contains none of the giver’s personal Wi-Fi details, pairing tokens or API keys. Set up your own network. Deliberately factory-reset a previously used board first.',
    'setup.step1Title': 'Start or wake the board.',
    'setup.step1Text': 'Connect the board via USB-C. If it is already sleeping in battery mode, press its physical setup button. Hold it for about three seconds to show setup. The configuration window stays open for ten minutes.',
    'setup.step2Title': 'Join the setup Wi-Fi.',
    'setup.step2Text': 'On first-time setup, the display shows a NextStop Wi-Fi network and its password. Connect your Mac, PC or phone to that network. It is normal for this network to have no internet access.',
    'setup.networkExample': 'The network name starts with',
    'setup.step3Title': 'Enter your home Wi-Fi.',
    'setup.step3Text': 'Open the local setup QR code on the display or its printed address. Enter your home Wi-Fi name and password on the local device page. Your network must support 2.4 GHz. These credentials belong on the board, not on this website.',
    'setup.openAP': 'Open local Wi-Fi setup',
    'setup.apHelp': 'Accessible only while you are connected to the NextStop setup Wi-Fi.',
    'setup.websiteQRTitle': 'Website QR',
    'setup.websiteQRText': 'The “App & help” QR on the display or a printed guide brings you here. This public page explains setup; it does not know your board.',
    'setup.localQRTitle': 'Device QR',
    'setup.localQRText': 'The “Configuration” QR on the display opens your board’s local interface. Its address is reachable only on the appropriate Wi-Fi network.',
    'setup.step4Title': 'Back to your home network. Then pair.',
    'setup.step4Text': 'After Wi-Fi setup, wait about 30 seconds and reconnect your computer or phone to your home Wi-Fi. Press the setup button if needed. The screen shows the local address and a six-digit pairing code.',
    'setup.pinExample': 'Example only — use the code shown on your board.',
    'setup.macPair': 'On your Mac: open NextStop → “My board”. The app finds an awake board through Bonjour on the same network. Select it and enter the code.',
    'setup.browserPair': 'On Windows or your phone: open the address shown on the display in your browser, then enter the code there. The browser does not search for devices automatically.',
    'setup.step5Title': 'Choose your stops and send to the board.',
    'setup.step5Text': 'Choose your stops, lines, direction, language and power mode. You can show 1–12 matching connections per stop entry. Send the settings to the board. Changes appear at the next permitted screen refresh. Press the setup button again for later changes to a sleeping board.',
    'setup.openKicker': 'ALREADY ON YOUR HOME WI-FI?', 'setup.openTitle': 'Open your board.',
    'setup.openIntro': 'Use the address shown on the display. Your browser goes directly to the local device page; this website does not query your board.',
    'setup.hostLabel': 'Board’s local address',
    'setup.hostHelp': 'For example, nextstop-12ab34cd.local or 192.168.1.42. Do not enter passwords or codes.',
    'setup.openButton': 'Open board in browser',
    'setup.macDownloadTitle': 'Prefer the Mac app?',
    'setup.macDownloadText': 'For Intel and Apple Silicon, macOS 13 or later. Find your device, change settings and send them to the board.',
    'setup.macDownload': 'Download NextStop for Mac',
    'setup.browserTitle': 'Windows & phones',
    'setup.browserText': 'The interface runs directly on the board. There is no separate Windows app or installable PWA. Open the local address in your browser.',
    'setup.helpKicker': 'IF SOMETHING IS NOT WORKING YET', 'setup.helpTitle': 'A few quick answers.',
    'setup.faq1Title': 'My board cannot be found.',
    'setup.faq1Text': 'In battery mode, press the setup button first. Check that your computer and board are on the same home network. Guest Wi-Fi can separate devices from each other. Use the local IP address shown on the display if .local does not resolve. The public website cannot discover hardware.',
    'setup.faq2Title': 'The screen does not respond immediately.',
    'setup.faq2Text': 'Screen refreshes are at least three minutes apart. The setup code may also take time to appear if the display has just refreshed. In battery mode, the board wakes every five minutes by default. More frequent data fetching does not mean more frequent screen refreshes.',
    'setup.faq3Title': 'Do I need an SBB key?',
    'setup.faq3Text': 'Not to get started: the free Transport API works without a key. The optional official OJP interface requires your personal API key. Enter it only in the Mac app or on the board’s local interface. Missing real-time notices do not mean confirmed punctuality.',
    'setup.faq4Title': 'Can the board work without my Mac?',
    'setup.faq4Text': 'Yes. The board fetches its own departures over your Wi-Fi. The Mac or browser is needed only for setup and changes. During deep sleep, Wi-Fi and configuration access are off; the last e-ink image stays visible.',
    'setup.buildTitle': 'No assembled board yet?', 'setup.buildText': 'Find the parts, wiring and first-time installation here.', 'setup.buildCTA': 'Build your own',
    'build.crumb': 'Build your own', 'build.kicker': 'YOUR BOARD. YOUR BUILD.',
    'build.title1': 'Small parts.', 'build.title2': 'Your own timetable.',
    'build.intro': 'A FireBeetle ESP32-C6, a monochrome e-ink display and ready-made NextStop software. Here is the prepared combination and the path to its first start.',
    'build.partsCTA': 'See the parts', 'build.installCTA': 'Install the software',
    'build.untestedTitle': 'Prepared — not yet tested on the actual hardware.',
    'build.untestedText': 'Software checks do not replace hardware testing. Check the display revision, wiring, USB installation, Wi-Fi and battery mode on the assembled device before permanent installation or gifting. Battery runtime has not yet been measured.',
    'build.partsTitle': 'The two main parts.',
    'build.partsIntro': 'The software is prepared for this combination. A different ESP32 model or display resolution is not an equivalent replacement.',
    'build.boardText': 'A DFRobot controller with 4 MB flash, USB-C and a connector for a compatible single-cell battery. Do not substitute an ESP32-S3, SuperMini or Raspberry Pi.',
    'build.screenText': 'Black and white, 800 × 480 pixels, with a driver HAT and eight-pin SPI cable. Check the actual panel and controller revision when it arrives. The older 640 × 384 model is unsupported.',
    'build.shop': 'View on Digitec', 'build.manufacturer': 'Manufacturer documentation',
    'build.extra1Title': 'Power & setup button',
    'build.extra1Text': 'A USB-C data cable, suitable power supply and a normally-open button between GPIO6 and GND. An external 10 kΩ pull-up from GPIO6 to 3.3 V supports reliable wake-up from deep sleep.',
    'build.buttonSearch': 'Find a push button', 'build.resistorSearch': 'Find a 10 kΩ resistor', 'build.usbSearch': 'Find a USB data cable',
    'build.extra2Title': 'Battery, optional',
    'build.extra2Text': 'A protected single 3.7 V LiPo cell, 4.2 V when fully charged, with a compatible JST-PH2.0 connector and an allowed charging current of at least 500 mA. Check the board’s polarity before plugging it in. Charge through the FireBeetle USB connection.',
    'build.batterySearch': 'Find a battery · check compatibility',
    'build.extra3Title': 'Case, optional',
    'build.extra3Text': 'MakerWorld model 2443888 can serve as a starting point. Fit for this FireBeetle, the actual panel, battery and setup button is not verified; check or adapt it before printing.',
    'build.casingLink': 'View the case model',
    'build.wiringKicker': 'WIRE WITH POWER DISCONNECTED', 'build.wiringTitle': 'Eight signals. One setup button.',
    'build.wiringText': 'Use the Waveshare HAT’s SPI cable. The HAT’s Raspberry Pi connector does not plug directly into the FireBeetle; its GDI connector is not a substitute either. Some boards need pin headers soldered on first.',
    'build.wiringNumbers': 'The table uses ESP32 GPIO numbers, not physical header positions. Follow the DFR1075 pin map.',
    'build.pinMap': 'Open the FireBeetle pin map',
    'build.wiringCaption': 'Disconnect USB and the battery before connecting wires. Use only the pin labels appropriate for the ESP32-C6.',
    'build.signal': 'Waveshare signal', 'build.connection': 'FireBeetle connection',
    'build.setupButton': 'Setup button', 'build.setupWiring': 'GPIO6 → GND; 10 kΩ → 3V3',
    'build.installKicker': 'NEXTSTOP 3.1.0 · FIRST-TIME INSTALLATION',
    'build.installTitle': 'The software for your board.',
    'build.installText': 'Connect the FireBeetle to your Mac or Windows PC with a USB data cable. Browser installation needs a desktop browser with Web Serial, such as Chrome or Edge. Safari and Firefox do not support this method.',
    'build.installFallback': 'If USB connection fails, download the full bundle and use its FLASH-ESP32 instructions. The combined factory image is written at address 0x0 for this board.',
    'build.manualDownload': 'Download the bundle with manual instructions',
    'build.installOTA': 'First-time installation overwrites existing settings. For later updates, use the signed .nextstop file in the local board interface or Mac app while the device is awake.',
    'build.installerTitle': 'Install through USB.',
    'build.installerText': 'Only for FireBeetle 2 ESP32-C6, DFR1075 with 4 MB flash. USB permission applies to the device you select.',
    'build.eraseConfirm': 'I am using the correct board and understand that existing Wi-Fi details, pairings and personal settings will be erased.',
    'build.installButton': 'Connect FireBeetle & install',
    'build.loadingInstaller': 'The installer is loading. If it is unavailable, use the manual instructions in the bundle.',
    'build.factoryDownload': 'Download the factory file separately',
    'build.compatibility': 'Desktop USB · supported browser required · hardware operation not verified',
    'build.afterTitle': 'After installation, connect to Wi-Fi.',
    'build.afterText': 'The board shows a setup Wi-Fi network and a local QR code. Then choose your stops.', 'build.afterCTA': 'Continue to setup',
    'downloads.crumb': 'Downloads', 'downloads.title1': 'Everything for', 'downloads.title2': 'your next stop.',
    'downloads.intro': 'The Mac app for everyday configuration. The complete bundle for building, first-time installation and sharing.',
    'downloads.macTitle': 'NextStop for Mac.',
    'downloads.macText': 'Find your board on the home network, pair with its code, and configure connections, language and power mode. The board then runs without your Mac.',
    'downloads.macCTA': 'Download the Mac app',
    'downloads.bundleKicker': 'BUILD · INSTALL · SHARE', 'downloads.bundleTitle': 'The complete bundle.',
    'downloads.bundleText': 'Mac app, factory firmware, signed board update, browser launcher, wiring and setup instructions. No personal credentials or private signing keys.',
    'downloads.bundleCTA': 'Download the full bundle',
    'downloads.signing': 'The Mac app is locally signed but not Apple-notarized. If macOS blocks its first launch, open System Settings → Privacy & Security and choose “Open Anyway” for NextStop if you want to open this downloaded app.',
    'downloads.factoryTitle': 'ESP32-C6 factory firmware',
    'downloads.factoryText': 'For first-time installation on DFR1075 / 4 MB, at address 0x0. Overwrites settings; not a regular board update.',
    'downloads.fileCTA': 'Download file', 'downloads.firmwareTitle': 'Signed board update',
    'downloads.firmwareText': 'For a board that is already set up. Install the .nextstop file locally through the Mac app or device browser.',
    'downloads.licensesTitle': 'Licences & Arduino relink kit',
    'downloads.licensesText': 'The complete bundle includes notices for third-party components. The separate relink kit contains materials for the Arduino component used.',
    'downloads.checksumTitle': 'SHA-256 download checksums',
    'downloads.windowsTitle': 'Where is the Windows or phone download?',
    'downloads.windowsText': 'No extra software is needed. The interface runs directly on the board: press the setup button and open the local address shown on its display. This website is not a device interface or installable PWA. It cannot find boards automatically.',
    'downloads.setupLink': 'Set up or open your board',
    'downloads.giftTitle': 'What should I include when gifting a board?',
    'downloads.giftText': 'The complete bundle and this setup page provide the software instructions. A new factory installation contains no personal Wi-Fi or API credentials. Deliberately factory-reset a used board before handing it over. Never share the private signing key.',
    'downloads.testTitle': 'Has the hardware been tested?',
    'downloads.testText': 'No. The firmware and software have been checked; USB installation, display revision, wiring, charging and battery runtime still need testing on the actual build. There is no promised runtime or guarantee of immediate disruption notices.',
    'downloads.nextTitle': 'Software downloaded. What next?',
    'downloads.nextText': 'Set up an assembled board or start your own build.', 'downloads.nextCTA': 'Set up your board'
  };

  function validateLocalHost(input) {
    if (typeof input !== 'string') return null;
    const host = input.trim().toLowerCase();
    if (/^nextstop-[a-f0-9]{4,16}\.local$/.test(host)) return host;
    const parts = host.split('.');
    if (parts.length !== 4 || !parts.every(part => /^(?:0|[1-9]\d{0,2})$/.test(part) && Number(part) <= 255)) return null;
    const [a, b] = parts.map(Number);
    return a === 10 || (a === 172 && b >= 16 && b <= 31) || (a === 192 && b === 168) ? host : null;
  }
  function validatedDownloadPath(candidate, origin) {
    if (typeof candidate !== 'string') return null;
    try {
      const url = new URL(candidate, origin);
      if (url.origin !== origin || !/^https?:$/.test(url.protocol) || url.search || url.hash) return null;
      return /^\/nextstop\/(?:downloads\/files|updates\/esp32)\/[a-zA-Z0-9_.-]+$/.test(url.pathname) ? url.pathname : null;
    } catch (_) { return null; }
  }
  const api = { validateLocalHost, validatedDownloadPath, translations: { en }, storageKey: STORAGE_KEY };
  if (typeof module === 'object' && module.exports) module.exports = api;
  if (typeof window === 'undefined' || typeof document === 'undefined') return;
  window.NextStopWebsite = api;
  let language = 'de', release = null, openerError = false;
  const de = new Map();
  document.querySelectorAll('[data-i18n]').forEach(node => { if (!de.has(node.dataset.i18n)) de.set(node.dataset.i18n, node.textContent); });
  document.querySelectorAll('[data-i18n-alt]').forEach(node => { if (!de.has(node.dataset.i18nAlt)) de.set(node.dataset.i18nAlt, node.getAttribute('alt')); });
  const words = {
    de: { hostError: 'Bitte eine private IPv4-Adresse oder einen NextStop-Gerätenamen eingeben, zum Beispiel nextstop-12ab34cd.local. Keine URLs, Ports, Passwörter oder Codes.', releaseError: 'Release-Details sind gerade nicht verfügbar. Die direkten Download-Links stehen unten; falls sie nicht erreichbar sind, versuche es später nochmals.', opening: 'Deine lokale Tafel wird geöffnet …' },
    en: { hostError: 'Enter a private IPv4 address or a NextStop device name, such as nextstop-12ab34cd.local. Do not enter URLs, ports, passwords or codes.', releaseError: 'Release details are currently unavailable. Direct download links are below; if they are unavailable, try again later.', opening: 'Opening your local board …' }
  };
  const titles = {
    home: { de: 'NextStop — Deine Abfahrtstafel zuhause', en: 'NextStop — Your departure board at home' },
    setup: { de: 'NextStop einrichten — WLAN, Mac & Browser', en: 'Set up NextStop — Wi-Fi, Mac & browser' },
    build: { de: 'NextStop selber bauen — Bauteile & Installation', en: 'Build NextStop — Parts & installation' },
    downloads: { de: 'NextStop Downloads — Mac-App & Firmware 3.1.0', en: 'NextStop downloads — Mac app & firmware 3.1.0' }
  };
  function renderRelease() {
    if (!release) return;
    if (typeof release.version === 'string' && /^\d+\.\d+\.\d+(?:-[a-z0-9.-]+)?$/i.test(release.version)) document.querySelectorAll('[data-release-version]').forEach(node => { node.textContent = release.version; });
    document.querySelectorAll('[data-release-link]').forEach(node => { const path = validatedDownloadPath(release[node.dataset.releaseLink]?.url, window.location.origin); if (path) node.setAttribute('href', path); });
    document.querySelectorAll('[data-release-size]').forEach(node => { const bytes = release[node.dataset.releaseSize]?.size; if (typeof bytes === 'number' && Number.isFinite(bytes) && bytes > 0) node.textContent = `${new Intl.NumberFormat(language === 'en' ? 'en-GB' : 'de-CH', { maximumFractionDigits: 1 }).format(bytes / 1048576)} MiB`; });
    document.querySelectorAll('[data-release-hash]').forEach(node => { const hash = release[node.dataset.releaseHash]?.sha256; if (typeof hash === 'string' && /^[a-f0-9]{64}$/i.test(hash)) node.textContent = `SHA-256: ${hash.toLowerCase()}`; });
  }
  function setLanguage(next, persist = true) {
    language = next === 'en' ? 'en' : 'de'; api.language = language;
    document.documentElement.lang = language;
    document.querySelectorAll('[data-i18n]').forEach(node => { const key = node.dataset.i18n; node.textContent = language === 'en' ? en[key] || de.get(key) || node.textContent : de.get(key) || node.textContent; });
    document.querySelectorAll('[data-i18n-alt]').forEach(node => { const key = node.dataset.i18nAlt; node.setAttribute('alt', language === 'en' ? en[key] || de.get(key) : de.get(key)); });
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    if (titles[document.body.dataset.page]) document.title = titles[document.body.dataset.page][language];
    if (openerError) document.getElementById('board-message').textContent = words[language].hostError;
    const releaseMessage = document.getElementById('release-message'); if (releaseMessage?.dataset.failed) releaseMessage.textContent = words[language].releaseError;
    if (persist) { try { window.localStorage.setItem(STORAGE_KEY, language); } catch (_) {} }
    renderRelease(); window.dispatchEvent(new CustomEvent('nextstop:languagechange', { detail: { language } }));
  }
  api.setLanguage = setLanguage;
  document.querySelectorAll('[data-language]').forEach(button => button.addEventListener('click', () => setLanguage(button.dataset.language)));
  try { const requested = new URL(window.location.href).searchParams.get('lang'); setLanguage(requested === 'en' || requested === 'de' ? requested : window.localStorage.getItem(STORAGE_KEY), false); } catch (_) { setLanguage('de', false); }
  const boardForm = document.getElementById('board-form');
  if (boardForm) {
    const hostInput = document.getElementById('board-host'), message = document.getElementById('board-message');
    try { const supplied = new URL(window.location.href).searchParams.get('device'), host = validateLocalHost(supplied); if (host) hostInput.value = host; } catch (_) {}
    hostInput.addEventListener('input', () => { openerError = false; message.textContent = ''; hostInput.removeAttribute('aria-invalid'); });
    boardForm.addEventListener('submit', event => {
      event.preventDefault(); const host = validateLocalHost(hostInput.value);
      if (!host) { openerError = true; message.textContent = words[language].hostError; hostInput.setAttribute('aria-invalid', 'true'); hostInput.focus(); return; }
      openerError = false; hostInput.removeAttribute('aria-invalid'); message.textContent = words[language].opening;
      // Navigate to the device itself. Never fetch a private device API from this public website.
      window.location.assign(`http://${host}/`);
    });
  }
  async function loadRelease() {
    const controller = new AbortController(), timer = setTimeout(() => controller.abort(), 8000);
    try {
      const response = await fetch('/nextstop/assets/release.json', { signal: controller.signal, cache: 'no-cache', credentials: 'omit' });
      if (!response.ok) throw new Error('Release metadata unavailable');
      const data = await response.json(); if (!data || typeof data !== 'object' || data.product !== 'NextStop') throw new Error('Invalid release metadata');
      release = data; api.release = data; renderRelease();
    } catch (_) {
      const message = document.getElementById('release-message'); if (message) { message.dataset.failed = 'true'; message.textContent = words[language].releaseError; }
    } finally { clearTimeout(timer); }
  }
  loadRelease();
})();
