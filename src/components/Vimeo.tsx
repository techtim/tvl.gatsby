import React from 'react'
import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Vimeo = ({ id }) => (
  <iframe
    src={`https://player.vimeo.com/video/${id}?autoplay=1&loop=1&title=0&byline=0&portrait=0`}
    style={{
      position: 'relative',
      width: '100%',
      height: 800,
    }}
    frameBorder="0"
    webkitAllowFullScreen
    mozAllowFullScreen
    allowFullScreen
  />
)

export default Vimeo
