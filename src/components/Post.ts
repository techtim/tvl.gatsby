import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Post = styled.div`
  color: ${themeGet('colors.suvaGray')};
  font-weight: 500;

  & > p {
    margin: 1.7rem 0;
    line-height: 1.25;
  }

  & strong {
    color: ${themeGet('colors.midGrey')};
  }

  & li {
    margin: 0.3rem 0;
  }
`

export default Post
