import React from 'react'
import { Flex, Box, Image, Heading, Fixed } from 'rebass'
import Link from 'gatsby-link'
import styled from 'styled-components'

import logo from './tvl-top-logo.svg'
import burger from './burger.svg'
import cross from './cross.svg'

const Menu = Flex.extend`
  min-height: 100vh;
  background-color: transparent;
  text-transform: uppercase;
`

const NavLink = styled(Link)`
  text-decoration: none;
  color: black;
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
      <Fixed left={0} top={0} right={0} style={{ background: 'white' }}>
        <Box
          style={{
            background: isOpened
              ? 'linear-gradient(180deg, rgba(133, 202, 213, 0.4788) 15.47%, rgba(241, 123, 171, 0.2964) 58.01%, rgba(251, 225, 49, 0.2565) 97.79%)'
              : 'white',
          }}
        >
          <Flex
            justify="space-between"
            align="center"
            style={{
              height: 112,
            }}
            px={4}
          >
            <Link to="/">
              <Image src={logo} />
            </Link>
            <Box onClick={this.onToggle}>
              <Image src={isOpened ? cross : burger} />
            </Box>
          </Flex>
          {isOpened ? (
            <Menu px={4} py={0} flexDirection="column">
              <Box py={4}>
                <NavLink to="/projects" onClick={this.onToggle}>
                  <Heading fontSize={4}>Projects</Heading>
                </NavLink>
              </Box>
              <Box py={4}>
                <NavLink to="/soft" onClick={this.onToggle}>
                  <Heading fontSize={4}>Soft</Heading>
                </NavLink>
              </Box>
              <Box py={4}>
                <NavLink to="/about" onClick={this.onToggle}>
                  <Heading fontSize={4}>About</Heading>
                </NavLink>
              </Box>
              <Box py={4}>
                <NavLink to="/contact" onClick={this.onToggle}>
                  <Heading fontSize={4}>Contact</Heading>
                </NavLink>
              </Box>
              {/* TODO: search */}
              {/* TODO: social */}
            </Menu>
          ) : null}
        </Box>
      </Fixed>
    )
  }
}
