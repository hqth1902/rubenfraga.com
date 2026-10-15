# Read first

NextStop 3.1.0 is the ESP32-C6 edition. Start with `GETTING-STARTED.md`.

The ready Mac app is in `01 Applications/Mac`. The ready ESP32 factory image is in `02 ESP32`. Future signed firmware updates use `.nextstop` files in `03 Updates`.

The exact target is FireBeetle 2 ESP32-C6 with the selected Waveshare 7.5-inch 800 × 480 black/white V2 display. The physical panel revision must still be checked before enabling partial refresh. Software compilation and simulated checks have been completed separately from real hardware testing; see the verification report for the exact results.

Press the GPIO6 setup button before configuring an already sleeping device. The Mac is only needed for setup and changes; the board fetches data independently.

The connection count applies to each configured stop entry. Five means up to five trains and five buses for the default entries. When a larger configuration does not fit on the physical display, numbered pages advance with the next permitted screen update.

The Mac app is locally signed, without Apple notarization. Its default update address and the new board's signed firmware channel are configured for `rubenfraga.com/nextstop/`. These addresses require the accompanying website package to be published and GitHub Pages to be enabled. Automatic firmware installation is off by default. USB recovery is available if a firmware update does not boot correctly.

Share the website link or the finished bundle from `05 Distribution`; the ready website overlay is in `06 Website`. Do not share `Internal/SigningKeys` or saved device credentials. For a gift, use a device without your Wi-Fi/API credentials or pairings. The factory image deliberately overwrites settings and is intended for this initial installation or recovery, not routine updates.
