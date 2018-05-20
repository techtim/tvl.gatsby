import React from 'react'
import { Box } from 'rebass'
import { injectGlobal } from 'styled-components'
import { Provider, Container } from 'rebass'
import theme from '../theme'
import Header from '../components/Header'
import 'typeface-maven-pro'
import 'typeface-fira-mono'

injectGlobal`
  body, p {
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
      <Container pt={112} px={0}>
        {children()}
      </Container>
    </Box>
  </Provider>
)
export default Template
