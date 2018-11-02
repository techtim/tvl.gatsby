import styled from 'styled-components'
import { Box } from 'rebass'
import theme from '../theme'

const [, medium] = theme.breakpoints

const Gallery = styled(Box)`
  display: grid;

  @media screen and (min-width: ${medium}) {
    column-gap: 46px;
    row-gap: 54px;
    grid-template-columns: repeat(2, minmax(350px, 1fr));
  }

  & img {
    width: 100%;
  }
`
export default Gallery
