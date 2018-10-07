import styled from 'styled-components'
import { Box } from 'rebass'
// @ts-ignore
import { createMediaQuery, defaultBreakpoints } from 'styled-system'

const [, medium] = defaultBreakpoints

const Gallery = styled(Box)`
  display: grid;

  ${createMediaQuery(medium)} {
    column-gap: 46px;
    row-gap: 54px;
    grid-template-columns: repeat(2, minmax(350px, 1fr));
  }

  & img {
    width: 100%;
  }
`
export default Gallery
