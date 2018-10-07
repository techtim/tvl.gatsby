import styled from 'styled-components'
import { themeGet } from 'styled-system'

const Post = styled.div`
  color: ${themeGet('colors.midGrey')};
  font-weight: 300;

  & > p {
    margin: 0.7rem 0 .7rem 0;
    line-height: 1.25;
  }

  & strong {
    color: ${themeGet('colors.midGrey')};
  }

  & li {
    margin: 0.3rem 0;
  }

  & a, & em {
    color: #51b5e4;
    font-style: normal;
  }

  & table {
    width: 100%;
    overflow: auto;
    display: block;
    border-spacing: 0;
    border-collapse: collapse; }
  & table th {
      font-weight: bold; }
  & table th, & table td {
      border: 1px solid #ddd;
      padding: 6px 13px; }
  & table tr {
      border-top: 1px solid #ccc;
      background-color: #fff; }
  & table tr:nth-child(2n) {
        background-color: #f8f8f8;}
`

export default Post
