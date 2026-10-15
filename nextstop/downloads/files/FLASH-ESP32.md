# Flash the ESP32-C6 once

Target: DFRobot **FireBeetle 2 ESP32-C6 (DFR1075, 4 MB)**. This image is not for ESP32-S3, classic ESP32, or a Raspberry Pi.

## Browser method — Mac and Windows

The guided NextStop installer is at `https://rubenfraga.com/nextstop/build/` after website publication. It selects the matching factory file, checks its SHA-256, checks for an ESP32-C6 with at least 4 MB flash and writes the combined image at `0x0`. Confirm the settings reset before starting. The official manual alternative below remains available.

1. Connect the FireBeetle to your computer with a USB-C **data** cable.
2. Open Chrome or Edge and visit the [official Espressif browser flashing tool](https://espressif.github.io/esptool-js/). The browser needs permission to access the board's USB serial port.
3. Connect at 115200 baud initially and choose the FireBeetle USB serial/JTAG device.
4. Select the **single combined file** `NextStop-ESP32-C6-3.1.0-Factory.bin`, with flash address **0x0**. The bootloader, partition table and application are already combined. Do not add the `.nextstop` OTA file here.
5. Write the file and wait for completion. If the serial connection is not detected, hold BOOT, tap RESET, release BOOT, and connect again.
6. Press RESET or disconnect and reconnect USB-C. Allow the display to finish its initial full refresh.

**The combined factory image also overwrites the settings area. Use signed OTA for ordinary updates.**

Erase flash only for a new device, factory reset, or deliberate recovery: erasing removes Wi-Fi, pairing and provider credentials. A normal signed OTA update keeps those settings.

## Developer method

Build with PlatformIO in `Development/ESP32`, using the pinned environment `firebeetle2-c6`. Upload with the same environment, or use esptool with the combined factory image at address `0x0`. The PlatformIO upload of the application preserves the existing partition table only when the correct build/partition configuration is used.

The factory image is compiled and checked for the ESP32-C6 architecture. Physical USB flashing, Wi-Fi setup and display operation still require testing on the actual assembled hardware.
