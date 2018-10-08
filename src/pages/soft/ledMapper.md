---
title: ledMapper
icon: './ledmapper/LedMapper_preview.png'
videoHero: https://player.vimeo.com/video/293953229
order: 1
---

Open-source software+hardware platform to control distributed light systems by network.
Current version support digital LED strips and fixtures based on popular ICs like WS281X, SK6822, LPD8806, APA102, SK9822.
It was tested for more than 30 controllers driving more than 60 000 LEDs 24/7 for a year.

Platform consists of:

- app for mapping/grabbing LEDS from using Syphon (OSX) or Spout(WIN) inputs or built-in video player
- ready to use image for Raspberry Pi 3, that runs listener for udp packets and sends data to LEDs via GPIO

### Made with ledMapper

Insight club and restaurant located in skyscraper on 354 meters height, where ledMapper controls 1300 meters of digital LED strips:

![Insight 354 ledMapper](./ledmapper/insight-collage.jpeg)

### Application

Developed based on many years of experience of mapping and control digital LEDs

![ledMapper Interface](./ledmapper/ledMapper_screenshot.png)

Detailed interface description can be found at [ledMapper Wiki](https://github.com/techtim/ledMapper/wiki/ledMapper-Interface).

### Controller

Raspberry Pi (RPI) was chosen as the most accessible, cheap and multifunctional hardware around the world.
It wasn't design to control LEDs ICs having 3.3V output signal when 5V recomended, but for 5V ICs it almost always work.

To overcome this restriction and to protect RPI from wrong connection and short circuit, RPI shield was developed with following params:

- input voltage from 5 to 16V, to safely use with 12V LED ICs
- multiplexer for making two DATA+CLOCK outputs from one source
- 2 channels, each can drive 1000 LEDs DATA only (WS281x, sk6812) or 3000 DATA+CLOCK
- simple electric scheme for easy reproduction anywhere

![ledMapper Raspberry Pi shield](./ledmapper/raspberry_pi_shield.jpg)

![ledMapper Raspberry Pi durable case](./ledmapper/rpi_box.png)

### Features in progress

Project is in active development, now we developing:

- Autonomous Raspberry Pi version that loads saved to usb-flash project and plays it as you configured on computer
- Raspberry Pi shield to raise controll signal voltage, add second DATA+CLOCK output and
- Nice durable case for comfort installation
- Art-Net protocol support

### Downloads

Here you can download executables for Mac and PC and get image for Raspberry Pi to write it flash/sd card using Etcher for example:

|                           OSX                            |                           WIN                            |                            RPI image                             |
| :------------------------------------------------------: | :------------------------------------------------------: | :--------------------------------------------------------------: |
| [.app V0.1](http://tvl.io/download/ledMapperOSX_0.1.zip) | [.exe V0.1](http://tvl.io/download/ledMapperWIN_0.1.zip) | [image V0.1](http://tvl.io/download/ledMapperTvl_Alpha_image.7z) |

### Sources

ledMapper is open-source licensed under the GNU General Public License v2.0.
All source files can be found on [ledMapper github page](https://github.com/techtim/ledMapper)

![led Mapper icon](./ledmapper/ledMapper_icon_200.png)
