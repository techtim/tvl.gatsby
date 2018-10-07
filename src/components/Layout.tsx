import React from 'react'
import { Flex, Box, Provider, Text } from 'rebass'
import styled, { injectGlobal } from 'styled-components'
import 'typeface-maven-pro'
import Header from '../components/Header'
import theme from '../theme'

const Container = styled(Box)`
  width: 100%;
  max-width: 1240px;
`

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
    <Flex flexDirection="column" width="100%" style={{ minHeight: '100vh' }}>
      <Header />
      <Container pt={112} px={[0, 4]} mx="auto">
        {children}
      </Container>

      <Box is="footer" width="100%" pt={4} mb={2} px={[0, 4]} mt="auto">
        <Text fontSize={0} color="gray">
          ⓒ TVL {new Date().getFullYear()}
        </Text>
      </Box>
    </Flex>
  </Provider>
)
export default Layout
