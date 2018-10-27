import { Link } from 'gatsby'
import React from 'react'
import Media from 'react-media'
import { Box, Flex, Image, Text } from 'rebass'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import theme from '../../theme'

const [, medium] = theme.breakpoints

import Social from './Social'
import burger from './burger.svg'
import cross from './cross.svg'
import logo from './tvl-top-logo.png'

const Menu = styled(Flex)`
  min-height: 100vh;
  background-color: transparent;
`

const Fixed = styled(Box)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`

const activeClassName = 'active-gatsby-nav-link'

const NavLink = styled(Link).attrs({
  activeClassName,
})`
  text-decoration: none;
  text-underline-position: under;
  color: ${themeGet('colors.black', 'black')};
  text-transform: uppercase;

  &.${activeClassName} {
    text-decoration: underline;
  }
`

const Links: { [index: string]: string } = {
  Projects: '/projects',
  Soft: '/soft',
  About: '/about',
  Contact: '/contact',
}

interface BackgroundProps {
  isOpened: boolean
}

// using background-image or background hence separate component and not Box
const Background = styled.div<BackgroundProps>`
  background: ${({ isOpened }) =>
    themeGet(isOpened ? 'gradients.main' : 'colors.white', 'white')};
`

interface State {
  isOpened: boolean
}

export default class Header extends React.Component<{}, State> {
  state: State = { isOpened: false }

  onToggle = () => {
    this.setState(state => ({ isOpened: !state.isOpened }))
  }

  render() {
    const { isOpened } = this.state

    return (
      <header>
        <Media query={{ maxWidth: medium }}>
          {(mobile: boolean) =>
            mobile ? (
              <>
                <div style={{ height: '88px' }} />
                <Fixed bg="white">
                  <Background isOpened={isOpened}>
                    <Flex
                      justifyContent="space-between"
                      alignItems="center"
                      style={{
                        height: 88,
                      }}
                      px={4}
                    >
                      <Link
                        to="/"
                        onClick={() => this.setState({ isOpened: false })}
                      >
                        <Image src={logo} width={108} alt="TVL" />
                      </Link>
                      <Box onClick={this.onToggle}>
                        <Image src={isOpened ? cross : burger} />
                      </Box>
                    </Flex>
                    {/* TODO: aria */}
                    {isOpened ? (
                      <Menu px={4} py={0} flexDirection="column" as="nav">
                        {Object.keys(Links).map(section => (
                          <Box py={4} key={section}>
                            <Text fontSize={3}>
                              <NavLink to={Links[section]}>{section}</NavLink>
                            </Text>
                          </Box>
                        ))}
                        <Box mt={4}>
                          <Social />
                        </Box>
                      </Menu>
                    ) : null}
                  </Background>
                </Fixed>
              </>
            ) : (
              <Flex
                px={[0, 0, 4, 5]}
                py={4}
                as="nav"
                justifyContent="space-between"
              >
                <Box mr={4} flex="0 0 auto">
                  <Link to="/">
                    <Image src={logo} width={160} />
                  </Link>
                </Box>
                <Flex>
                  {Object.keys(Links).map(section => (
                    <Box mx={[0, 0, 3, 4]} mt="auto" key={section}>
                      <Text fontSize={3}>
                        <NavLink to={Links[section]}>{section}</NavLink>
                      </Text>
                    </Box>
                  ))}
                </Flex>
                <Box mt="auto" ml="auto">
                  <Social />
                </Box>
              </Flex>
            )
          }
        </Media>
      </header>
    )
  }
}
