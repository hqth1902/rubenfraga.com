# Third-party components

NextStop is an independent application, not an official SBB or ZVV product. It uses no official SBB logo. Timetable access remains subject to the data provider's conditions.

## Mac app

**Sparkle 2.10.0**: https://sparkle-project.org/. The complete upstream licence and external notices are included as `Sparkle-LICENSE.txt` beside the app and inside the app bundle. The original download was checked against SHA-256 `c2bf58aa8387266ac179357b1415d6f2635f044da8be41042af32425dae6da0c`.

## ESP32 firmware

- **Arduino-ESP32 3.3.7 / ESP-IDF**: https://github.com/espressif/arduino-esp32/tree/3.3.7. Arduino core components use LGPL-2.1-or-later, with other files and Espressif components under their stated licences, including Apache-2.0. The unmodified framework's corresponding source and the relinking materials are supplied in `Licenses/Arduino-Relink-Kit.zip`; its README explains how to rebuild with a modified library. This does not change the licence of the separate Mac application.
- **Waveshare e-Paper V2 driver**, MIT permission notice. The adapted SPI implementation follows the manufacturer's source at commit `af4d8b49ccef5f8f5fb88e9a836b86bd3f0bbfe3`. Full notice: `Licenses/Waveshare-MIT.txt`. https://github.com/waveshareteam/e-Paper.
- **Adafruit GFX 1.11.11**, BSD, and **Adafruit BusIO 1.16.2**, MIT. Full notices are in `Licenses`. https://github.com/adafruit/Adafruit-GFX-Library and https://github.com/adafruit/Adafruit_BusIO.
- **ArduinoJson 7.4.2**, MIT. https://arduinojson.org/. Full notice: `Licenses/ArduinoJson-MIT.txt`.
- **Arduino Cryptography Library 0.4.0**, Southern Storm Software, MIT. https://github.com/rweather/arduinolibs. Full notice: `Licenses/Crypto-MIT.txt`.
- **QRCode 0.0.1**, Richard Moore, MIT. https://github.com/ricmoo/QRCode. Full notice: `Licenses/QRCode-MIT.txt`.
- **Noto Sans**, SIL Open Font License 1.1. The bitmap font headers were generated from the unmodified upstream font at Google Fonts commit `2984c575fdce412ee02b2baaba67672b9a9434d8`; SHA-256 of the source TTF is `bfb7bb691513f12e734dc346c03a03f784912432d7e3fa8e56efcf906fe86b3d`. Full notice: `Licenses/NotoSans-OFL.txt`. https://github.com/google/fonts.

No GxEPD2 or GNU FreeFont/FreeSans font is included in the firmware. The display renderer uses Waveshare's MIT driver and the OFL font assets.

The app's Winterthur line colours were sampled from the official ZVV Winterthur network map, valid from 14 December 2025: https://www.zvv.ch/content/dam/fahrgastinfo/netzpl%C3%A4ne/stadt-winterthur.pdf. Samples approximate rendered colour areas; no network-map artwork is redistributed.

No project-wide open-source licence has been selected for the original NextStop Mac application. Third-party components retain their own licences. The supplied firmware build and relinking files permit rebuilding and relinking the firmware for use with modified libraries; third-party licence rights are unaffected. Signing keys are excluded. Modified firmware can be installed by USB with a newly selected verification identity; a publisher's private OTA signing key is not needed for USB installation.

## Website installer

The website vendors Espressif esptool-js **0.7.0**, Apache-2.0, from the official npm package. Its published package integrity was checked before extracting the self-contained bundle. Included dependencies are pako **2.1.0** (MIT and Zlib) and atob-lite **2.0.0** (MIT). Corresponding licence files accompany the bundle under `nextstop/assets/vendor/`. Source: https://github.com/espressif/esptool-js. The public website includes only finished release assets and required licence/relinking materials.
