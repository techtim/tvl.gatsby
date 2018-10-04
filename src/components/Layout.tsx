import React from 'react'
import { Box, Container, Provider, Text } from 'rebass'
import { injectGlobal } from 'styled-components'
import 'typeface-maven-pro'
import Header from '../components/Header'
import theme, { colors } from '../theme'

injectGlobal`
  body, p {
    margin: 0;
    font-size: 16px;
  }

  * {
    box-sizing: border-box;
  }
`

const Layout: React.SFC = ({ children }) => (
  <Provider theme={theme}>
    <Box width="100%">
      <Header />
      <Container pt={112} px={0}>
        {children}
      </Container>

      {/* <Box is="footer" width="100%" pt={1} pb={2} px={5}>
        <Text fontSize={0} color="gray">
          ⓒ TVL {new Date().getFullYear()}
        </Text>
      </Box> */}
    </Box>
  </Provider>
)
export default Layout
