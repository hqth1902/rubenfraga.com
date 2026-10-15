# NextStop hardware

## Prepared combination

- DFRobot FireBeetle 2 **ESP32-C6**, DFR1075, 4 MB flash.
- Waveshare **7.5-inch black/white V2**, 800 × 480, SKU13504, including the driver HAT and eight-pin SPI cable. [Chosen listing](https://www.digitec.ch/de/s1/product/waveshare-debo-epa-75-entwicklerboards-display-epaper-75-schwarzweiss-13504-entwicklungsboard-kit-24963486).
- Optional protected **single-cell 3.7 V LiPo**, 4.2 V when fully charged, JST-PH2.0. Verify connector polarity against the board before plugging it in. Choose an allowed charging current of at least 500 mA. Charge through the FireBeetle's USB-C connection.
- A normally-open push button between **GPIO6 and GND**, with an external **10 kOhm pull-up from GPIO6 to 3.3 V** for reliable deep-sleep wake-up.

Use the SPI cable supplied with the display HAT. The HAT's Raspberry Pi header does not plug directly into the FireBeetle. FireBeetle's GDI connector is not the same as Waveshare's connector. Some board versions arrive with loose pin headers that must be soldered.

## SPI wiring

Disconnect power while wiring. Use the GPIO numbers marked in the DFRobot pin map; the numeric values below are ESP32 GPIO numbers, not physical header positions.

| Waveshare cable signal | FireBeetle connection |
| --- | --- |
| VCC | 3V3 |
| GND | GND |
| DIN / MOSI | GPIO22 |
| CLK / SCK | GPIO23 |
| CS | GPIO1 |
| DC | GPIO8 |
| RST | GPIO14 |
| BUSY | GPIO7 |
| Setup button | GPIO6 to GND; 10 kOhm pull-up to 3V3 |

This follows the manufacturer's ESP32-C6 display SPI pin mapping. Do not use a generic ESP32 diagram: other ESP32 families have different pin assignments.

## Panel revision and refresh

The product listing confirms 800 × 480, but the actual controller/label must be checked when delivered. The older 640 × 384 panel is unsupported. Newer V2 revisions support partial refresh; older revisions may require full refresh. Use full refresh until the panel's matching partial-refresh capability is verified.

The refresh interval is at least **180 seconds**. Battery mode powers down the controller between cycles and therefore performs a full refresh when a new image must be drawn. An unchanged image is left alone. Continuous mode retains display state for partial updates if enabled on verified hardware, with periodic full refreshes. A three-minute screen interval is separate from the 30-second online data query interval.

The image remains visible with no power, but no new departure information can arrive while the controller is asleep. Always read the displayed data timestamp. Battery runtime is not measured yet.

## Manufacturer references

- [FireBeetle 2 ESP32-C6 pin map and charging](https://wiki.dfrobot.com/dfr1075/)
- [Waveshare 7.5-inch module documentation](https://www.waveshare.com/wiki/7.5inch_e-Paper_HAT)
- [Waveshare V2 specification, refresh recommendations](https://files.waveshare.com/upload/6/60/7.5inch_e-Paper_V2_Specification.pdf)
- [ESP32-C6 deep-sleep wake-up GPIOs](https://docs.espressif.com/projects/esp-idf/en/latest/esp32c6/api-reference/system/sleep_modes.html)
