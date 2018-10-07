---
title: ledMapper
icon: './ledmapper/LedMapper_preview.png'
hero: './ledmapper/ledMapper_screenshot.png'
order: 1
---

Open-source software+hardware platform to control distributed light systems by network.
Current version support digital LED strips and fixtures based on popular ICs like WS281X, SK6822, LPD8806, APA102, SK9822.
It was tested for more than 30 controllers driving more than 60 000 LEDs 24/7 for a year.

Platform consists of:
* app for mapping/grabbing LEDS from using Syphon (OSX) or Spout(WIN) or video player as input 
* ready to use image for Raspberry Pi 3, that runs listens for udp packets and sends data to LEDs via GPIO

### Made with ledMapper
![Insight 354 ledMapper](./ledmapper/insight-collage.jpeg)

Detailed interface description can be found on [github Wiki](https://github.com/techtim/ledMapper/wiki/ledMapper-Interface).

### Features in progress

### Downloads
Here you can download executables for Mac and PC and get image for Raspberry Pi to write it flash/sd card using Etcher for example:

OSX  |   WIN    |  RPI image
:---: | :---: | :---:
[.app V0.1](http://tvl.io/download/ledMapperOSX_0.1.zip) | [.exe V0.1](http://tvl.io/download/ledMapperWIN_0.1.zip) | [image V0.1](http://tvl.io/download/ledMapperTvl_Alpha_image.7z)

### Source
All source files are on [ledMapper github page](https://github.com/techtim/ledMapper)
ledMapper is licensed under the GNU General Public License v2.0

![led Mapper icon](./ledmapper/ledMapper_icon_200.png)
