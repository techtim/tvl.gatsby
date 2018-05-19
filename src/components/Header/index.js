import React from 'react'
import { Flex, Box, Image, Fixed, Text } from 'rebass'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Media from 'react-media'

import logo from './tvl-top-logo.png'
import burger from './burger.svg'
import cross from './cross.svg'

const Menu = Flex.extend`
  min-height: 100vh;
  background-color: transparent;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
  text-transform: uppercase;
`

const links = [
  <NavLink to="/projects" key="projects">
    <Text fontSize={3}>Projects</Text>
  </NavLink>,
  <NavLink to="/soft" key="soft">
    <Text fontSize={3}>Soft</Text>
  </NavLink>,
  <NavLink to="/about" key="about">
    <Text fontSize={3}>About</Text>
  </NavLink>,
  <NavLink to="/contact" key="contact">
    <Text fontSize={3}>Contact</Text>
  </NavLink>,
  /* TODO: search */
  /* TODO: social */
]

const Background = styled(({ isOpened, ...props }) => <div {...props} />)`
  background: ${({ theme, isOpened }) =>
    isOpened ? theme.gradients.main : theme.colors.white};
`

export default class Header extends React.Component {
  constructor(props) {
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
        {mobile =>
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
                    {links.map((link, i) => (
                      <Box py={4} key={i}>
                        {React.cloneElement(link, { onClick: this.onToggle })}
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
              {links.map((link, i) => (
                <Box mx={4} key={i}>
                  {link}
                </Box>
              ))}
            </Flex>
          )
        }
      </Media>
    )
  }
}
