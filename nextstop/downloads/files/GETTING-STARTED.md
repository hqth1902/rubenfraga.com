# NextStop 3.1.0 — Getting started

## Deutsch

1. **Hardware anschliessen:** FireBeetle 2 ESP32-C6 und Waveshare 7,5 Zoll (800 × 480, schwarz/weiss). Die Kabelbelegung steht in `HARDWARE.md`. Der Taster an GPIO6 ist wichtig, damit du eine schlafende Tafel für die Konfiguration aufwecken kannst.
2. **Firmware einmal aufspielen:** Bei einer fertig geschenkten Tafel überspringst du diesen Schritt. Sonst verbinde das FireBeetle per USB-C-Datenkabel mit deinem Computer und öffne `https://rubenfraga.com/nextstop/build/` in Chrome oder Edge. Alternativ folge `02 ESP32/FLASH-ESP32.md` mit `NextStop-ESP32-C6-3.1.0-Factory.bin`.
3. **WLAN einrichten:** Nach dem Start zeigt das Display ein NextStop-Einrichtungs-WLAN mit Passwort. Verbinde deinen Computer oder dein Handy damit. Öffne den QR-Code beziehungsweise die angezeigte lokale Adresse und gib dein Heim-WLAN ein. Das Heim-WLAN muss 2,4 GHz unterstützen.
4. **Mac-App installieren:** Öffne das DMG in `01 Applications/Mac` und ziehe NextStop nach Programme. Bei Windows oder Handy verwendest du den Browser.
5. **Tafel verbinden:** Verbinde deinen Computer wieder mit dem Heim-WLAN. Drücke den Setup-Taster der Tafel. Öffne in NextStop «Meine Tafel», suche die Tafel oder trage die angezeigte Adresse ein; Port ist 80. Gib den angezeigten Kopplungscode ein. Falls das letzte Display-Update erst kurz zurückliegt, kann die neue Anzeige wegen des Mindestabstands bis zu drei Minuten brauchen. Im Browser öffnest du dieselbe Adresse.
6. **Haltestellen speichern:** Wähle Haltestellen, Linien, Richtung, Sprache und die Anzahl Verbindungen pro Haltestelle (1 bis 12) und übertrage die Einstellungen auf die Tafel. Die Anzahl gilt für jeden angelegten Eintrag: «5» zeigt bis zu fünf passende Züge und fünf passende Busse bei den zwei voreingestellten Einträgen. Im Akkumodus ist die Tafel danach zwischen den Abfragen nicht erreichbar. Zum Ändern wieder den Taster drücken.
7. **Aktualisieren:** Die Mac-App zeigt verfügbare App-Updates an. Halte die Tafel für ihre eigenen Updates im Konfigurationsmodus wach und versorge sie über USB-C. Unter «Meine Tafel» kannst du nach einem Firmware-Update suchen und es installieren, sobald der Website-Updatekanal veröffentlicht ist. Alternativ wählst du eine signierte `.nextstop`-Datei aus `03 Updates`. Die Factory-Datei wird nur für die erste Installation oder USB-Wiederherstellung verwendet.

Der Mac muss danach nicht eingeschaltet bleiben. Strom und dein Heim-WLAN reichen. Akkubetrieb spart Strom, aktualisiert aber seltener. Bei diesem Display ist ein Bildschirmaufbau frühestens alle drei Minuten vorgesehen.

Passen die gewählten Verbindungen und Haltestellenüberschriften nicht zusammen auf das Display, erscheinen nummerierte Seiten. Die nächste Seite wird beim nächsten erlaubten Bildschirmaufbau angezeigt: im Dauerbetrieb frühestens nach drei Minuten, im Akkubetrieb beim nächsten Aufwachen (voreingestellt alle fünf Minuten). Die Mac-App und die Browseransicht zeigen alle Einträge gleichzeitig. Es werden nur so viele Verbindungen angezeigt, wie die Datenquelle für deine Filter bereitstellt.

## English

1. Wire the **FireBeetle 2 ESP32-C6** to the Waveshare 7.5-inch **800 × 480 black/white V2** module using `HARDWARE.md`. Add the GPIO6 setup button so you can wake the sleeping board for configuration.
2. Skip flashing if your gift is already prepared. Otherwise connect a USB-C data cable and open `https://rubenfraga.com/nextstop/build/` in Chrome or Edge. Alternatively flash `02 ESP32/NextStop-ESP32-C6-3.1.0-Factory.bin` following `FLASH-ESP32.md`.
3. Join the password-protected setup Wi-Fi shown on the display. Scan its setup QR code or open the printed local address. Enter your home Wi-Fi details; the network must support 2.4 GHz.
4. Install the Mac app from the DMG. Windows and phones use the board's browser interface.
5. Reconnect to your home Wi-Fi, press the physical setup button and pair using the displayed address and six-digit code. The port is **80**.
6. Select stops, routes, language, power settings and connections per stop (1–12), then send them to the board. The count applies to each configured entry: choosing five shows up to five matching trains and five matching buses for the two default entries. In battery mode, press the button again whenever you want to change settings.
7. The Mac app offers its own updates. For board updates, keep the device awake and connected to USB-C power; check and install a new version through the app/browser once the website update channel is published. Signed `.nextstop` files also work offline. A factory image is for first installation or USB recovery.

The board fetches data independently. Your Mac does not need to remain on. Battery mode trades update frequency for battery life. This display is configured to refresh no more often than every three minutes.

If the selected connections and stop headings do not all fit on the physical display, the board shows numbered pages. It moves to the next page at the next permitted screen update: at least three minutes in continuous mode, or the next wake in battery mode (every five minutes by default). The Mac and browser show all entries together. The actual number of connections also depends on the data available for your filters.
