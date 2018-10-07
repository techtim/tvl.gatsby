import React from 'react'
import styled from 'styled-components'
import { StaticQuery, graphql } from 'gatsby'
import { Flex, Box, Image } from 'rebass'

import vimeo from './vimeo.svg'
import fb from './facebook.svg'
import youtube from './youtube.svg'

const Inline = styled(Box)<any>`
  display: inline-block;
`

const Social: React.SFC = () => (
  <StaticQuery
    query={graphql`
      query {
        site {
          siteMetadata {
            fb
            vimeo
            youtube
          }
        }
      }
    `}
    render={({ site }) => (
      <Flex flex="1 0 auto" mt="auto">
        <Inline mr={1}>
          <a href={site.siteMetadata.fb} target="_blank">
            <Image src={fb} width={24} />
          </a>
        </Inline>

        <Inline mr={2}>
          <a href={site.siteMetadata.vimeo} target="_blank">
            <Image src={vimeo} width={24} />
          </a>
        </Inline>

        <Inline>
          <a href={site.siteMetadata.youtube} target="_blank">
            <Image src={youtube} width={24} />
          </a>
        </Inline>
      </Flex>
    )}
  />
)

export default Social
