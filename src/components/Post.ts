import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Box } from 'rebass'
import theme from '../theme'

const [small, medium] = theme.breakpoints

const Post = styled(Box)`
  font-weight: ${themeGet('fontWeights.regular')};
  color: ${themeGet('colors.midGrey')};

  /* Add padding for text on small screens */
  & > p,
  & > h1,
  & > h2,
  & > h3 {
    @media only screen and (max-width: ${medium}) {
      padding: 0 16px;
    }
  }

  & > h2,
  & > h3 {
    margin: 32px 0 16px;
  }

  & p {
    margin: 0.8rem 0;
    line-height: ${themeGet('lineHeights.0')};

    /* Pull images aside to be full width on small screens */
    & a.gatsby-resp-image-link {
      &:first-child {
        margin-top: 32px;
      }

      &:last-child {
        margin-bottom: 32px;
      }

      @media only screen and (max-width: ${small}) {
        margin-left: -16px;
        margin-right: -16px;
      }
    }
  }

  & strong {
    color: ${themeGet('colors.midGrey')};
  }

  & li {
    margin: 0.3rem 0;
  }

  & a {
    color: ${themeGet('colors.lightBlue')};
    font-style: normal;
  }

  & h3 {
    font-style: normal;
    font-weight: ${themeGet('fontWeights.medium')};
    color: ${themeGet('colors.black')};
  }

  & table {
    width: fit-content;
    overflow: auto;
    display: block;
    border-spacing: 0;
    border-collapse: collapse;
    margin: 0 auto;

    & th {
      font-weight: ${themeGet('fontWeights.semibold')};
    }

    & th,
    & td {
      border: 1px solid ${themeGet('colors.silver')};
      padding: 6px 13px;
    }

    & tr:nth-child(2n) {
      background-color: ${themeGet('colors.lightGray')};
    }
  }
`

export default Post
