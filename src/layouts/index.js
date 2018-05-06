import React from 'react'
import { Box } from 'rebass'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'
import Header from '../components/Header'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Maven+Pro');

  body {
    margin: 0;
  }
`

const Template = ({ children }) => (
  <Provider
    theme={{
      fonts: {
        sans: '"Maven Pro", Helvetica Neue, sans-serif',
      },
    }}
  >
    <Box width="100%">
      <Header />
      <Box pt={112}>{children()}</Box>
    </Box>
  </Provider>
)
export default Template
