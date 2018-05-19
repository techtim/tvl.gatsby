import React from 'react'
import { Box } from 'rebass'
import { injectGlobal } from 'styled-components'
import { Provider } from 'rebass'
import theme from '../utils/theme'
import Header from '../components/Header'

injectGlobal`
  @import url('https://fonts.googleapis.com/css?family=Fira+Mono|Maven+Pro:400,500');

  body {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Template = ({ children }) => (
  <Provider theme={theme}>
    <Box width="100%">
      <Header />
      <Box pt={112} px={[4, 5]}>
        {children()}
      </Box>
    </Box>
  </Provider>
)
export default Template
