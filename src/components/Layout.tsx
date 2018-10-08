import React from 'react'
import { Flex, Box, Provider, Text } from 'rebass'
import styled, { injectGlobal } from 'styled-components'
import 'typeface-maven-pro'
import Header from '../components/Header'
import theme from '../theme'

const Container = styled(Box)`
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

interface Props {
  hero?: React.ReactNode
}

const Layout: React.SFC<Props> = ({ children, hero }) => (
  <Provider theme={theme}>
    <Flex flexDirection="column" width="100%" style={{ minHeight: '100vh' }}>
      <Header />
      {hero && <Box width="100%">{hero}</Box>}
      <Container width="100%" pt={4} px={[0, 3, 4]} mx="auto">
        {children}
      </Container>

      <Box is="footer" width="100%" pt={5} mb={3} px={[3, 4]} mt="auto">
        <Text fontSize={0} color="gray">
          ⓒ TVL {new Date().getFullYear()}
        </Text>
      </Box>
    </Flex>
  </Provider>
)
export default Layout
