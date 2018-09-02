---
title: ledMapper
hero: './ledmapper-hero.png'
---

App for receiving Syphon input and mapping it to LPD8806/WS2812 LED strips using network connected RaspberryPi clients.

Compiled Apps for Windows and OSX and image for RaspberryPi 3 can be found here: <a href="https://yadi.sk/d/wtCvC4sx3Ndqwv" target="_blank">*Binaries and images*</a>

Consists of:
- app for mapping/grabbing LEDS from Syphon (OSX) or Spout(WIN) input
- executables on RPI side, listens for udp packets and send via GPIO data to LEDs