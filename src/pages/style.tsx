import React from 'react'
import { navigate } from 'gatsby'
import { Box, Flex, Text, Heading } from 'rebass'
import theme, { Colors, FontWeights } from '../theme'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import { themeGet } from 'styled-system'

const GlobalStyle = createGlobalStyle`
  body, p {
    margin: 0;
    font-family: "Maven Pro", sans-serif;
  }

  * {
    box-sizing: border-box;
  }
`
export default class Style extends React.Component {
  componentDidMount() {
    if (process.env.NODE_ENV !== 'development') navigate('/')
  }

  render() {
    const { colors, fontWeights } = theme
    const colorNames = Object.keys(colors) as Colors[]
    const fontWeightNames = Object.keys(fontWeights) as FontWeights[]

    return (
      <ThemeProvider theme={theme}>
        <Box p={3}>
          <GlobalStyle />
          <Box>
            <Heading>Colors</Heading>
            {colorNames.map(colorName => (
              <Flex alignItems="center">
                <Box mr={3}>
                  <code>{colorName}</code>{' '}
                  <Text as="code" color="midGrey">
                    {colors[colorName]}
                  </Text>
                </Box>
                <Box flex={1} bg={colors[colorName]} css={{ height: '32px' }} />
              </Flex>
            ))}
            <Box>
              <Text>Gradient</Text>
              <Box
                flex={1}
                css={{
                  background: theme.gradient,
                  height: '128px',
                }}
              />
            </Box>
          </Box>

          <Box>
            <Heading>Breakpoints</Heading>
            {theme.breakpoints.map(breakpoint => (
              <Text as="pre">
                {breakpoint}
                px
              </Text>
            ))}
          </Box>

          <Box>
            <Heading>Text</Heading>
            {fontWeightNames.map(weight => (
              <Text as="div" fontWeight={fontWeights[weight]} my={3}>
                {weight} - {fontWeights[weight]}
              </Text>
            ))}
          </Box>
        </Box>
      </ThemeProvider>
    )
  }
}
