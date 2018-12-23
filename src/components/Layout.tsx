import React from 'react'
import { Flex, Box, Text } from 'rebass'
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import 'typeface-maven-pro'
import Header from '../components/Header'
import theme from '../theme'

const Container = styled(Box)`
  max-width: 1240px;
`

const GlobalStyle = createGlobalStyle`
  body, p {
    margin: 0;
    font-family: "Maven Pro", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`

interface Props {
  hero?: React.ReactNode
}

const Layout: React.SFC<Props> = ({ children, hero }) => (
  <ThemeProvider theme={theme}>
    <Flex flexDirection="column" width="100%" style={{ minHeight: '100vh' }}>
      <GlobalStyle />
      <Header />
      {hero && <Box width="100%">{hero}</Box>}
      <Container width="100%" pt={4} px={[0, 3, 4]} mx="auto">
        {children}
      </Container>

      <Box as="footer" width="100%" pt={5} mb={3} px={[3, 4]} mt="auto">
        <Text fontSize={0} color="midGray">
          ⓒ TVL <time>{new Date().getFullYear()}</time>
        </Text>
      </Box>
    </Flex>
  </ThemeProvider>
)
export default Layout
