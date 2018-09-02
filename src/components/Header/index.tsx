import Link from 'gatsby-link'
import React from 'react'
import Media from 'react-media'
import { Box, Fixed, Flex, Image, Text } from 'rebass'
import styled from 'styled-components'
import { themeGet } from 'styled-system'
import burger from './burger.svg'
import cross from './cross.svg'
import logo from './tvl-top-logo.png'

const Menu = Flex.extend`
  min-height: 100vh;
  background-color: transparent;
`

const activeClassName = 'active-gatsby-nav-link'

const NavLink = styled(Link)`
  text-decoration: none;
  text-underline-position: under;
  color: ${themeGet('colors.black', 'black')};
  text-transform: uppercase;

  &.${activeClassName} {
    text-decoration: underline;
  }
`

const links: { [index: string]: string } = {
  Projects: '/projects',
  Soft: '/soft',
  About: '/about',
  Contact: '/contact',
}

interface BackgroundProps {
  isOpened: boolean
}

const Background = styled(({ isOpened: _, ...props }: BackgroundProps) => (
  <div {...props} />
))`
  background: ${({ theme, isOpened }) =>
    isOpened ? theme.gradients.main : theme.colors.white};
`

const Section: React.SFC<{ section: string }> = ({ section }) => (
  <Text fontSize={3}>
    <NavLink to={links[section]} activeClassName={activeClassName}>
      {section}
    </NavLink>
  </Text>
)

interface State {
  isOpened: boolean
}

export default class Header extends React.Component<{}, State> {
  // TODO: destroy with `this.state` in TypeScript 😠
  constructor(props: {}) {
    super(props)

    this.state = { isOpened: false }
  }

  onToggle = () => {
    this.setState(state => ({ isOpened: !state.isOpened }))
  }

  render() {
    const { isOpened } = this.state

    return (
      <Media query={{ maxWidth: 768 }}>
        {(mobile: boolean) =>
          mobile ? (
            <Fixed left={0} top={0} right={0} style={{ background: 'white' }}>
              <Background isOpened={isOpened}>
                <Flex
                  justify="space-between"
                  align="center"
                  style={{
                    height: 112,
                  }}
                  px={4}
                >
                  <Link
                    to="/"
                    onClick={() => this.setState({ isOpened: false })}
                  >
                    <Image src={logo} width={108} />
                  </Link>
                  <Box onClick={this.onToggle}>
                    <Image src={isOpened ? cross : burger} />
                  </Box>
                </Flex>
                {isOpened ? (
                  <Menu px={4} py={0} flexDirection="column">
                    {Object.keys(links).map(section => (
                      <Box py={4} key={section}>
                        <Section section={section} />
                      </Box>
                    ))}
                  </Menu>
                ) : null}
              </Background>
            </Fixed>
          ) : (
            <Flex align="baseline" px={5} py={4}>
              <Box mr={6}>
                <Link to="/">
                  <Image src={logo} width={160} height={67} />
                </Link>
              </Box>
              {Object.keys(links).map(section => (
                <Box mx={4} key={section}>
                  <Section section={section} />
                </Box>
              ))}
            </Flex>
          )
        }
      </Media>
    )
  }
}