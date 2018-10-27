import styled from 'styled-components'
import { themeGet } from 'styled-system'
import { Box } from 'rebass'

const Post = styled(Box)`
  font-weight: 300;

  /* Add padding for text on small screens */
  & > p,
  & > h1,
  & > h2,
  & > h3 {
    @media only screen and (max-width: 32em) {
      padding: 0 16px;
    }
  }

  & p {
    margin: 0.7rem 0 0.7rem 0;
    line-height: 1.25;

    /* Pull images aside to be full width on small screens */
    & a.gatsby-resp-image-link {
      @media only screen and (max-width: 32em) {
        margin: 0 -16px;
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
    color: #51b5e4;
    font-style: normal;
  }

  & h3 {
    font-style: normal;
    font-weight: 400;
    color: #000000;
  }

  & table {
    width: fit-content;
    overflow: auto;
    display: block;
    border-spacing: 0;
    border-collapse: collapse;
    margin: 0 auto;

    & th {
      font-weight: bold;
    }

    & th,
    & td {
      border: 1px solid #ddd;
      padding: 6px 13px;
    }

    & tr {
      border-top: 1px solid #ccc;
      background-color: ${themeGet('colors.white')};
    }

    & tr:nth-child(2n) {
      background-color: ${themeGet('colors.lightGray')};
    }
  }
`

Post.defaultProps = {
  color: 'midGrey',
}

export default Post
