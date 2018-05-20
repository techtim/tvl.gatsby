import React from 'react'
import { Box, Container, Provider } from 'rebass'
import { injectGlobal } from 'styled-components'
import 'typeface-fira-mono'
import 'typeface-maven-pro'
import Header from '../components/Header'
import theme from '../theme'

injectGlobal`
  body, p {
    margin: 0;
  }

  * {
    box-sizing: border-box;
  }
`

const Template: React.SFC<{ children: () => React.ReactNode }> = ({
  children,
}) => (
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
