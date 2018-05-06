import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Heading, Box } from 'rebass'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Box px={4} pt={3}>
        <Helmet title={`${post.frontmatter.title} | ${siteTitle}`} />
        <Heading fontSize={4} style={{ textTransform: 'lowercase' }}>
          {post.frontmatter.title}
        </Heading>
        <p>{post.frontmatter.date}</p>
        {post.frontmatter.place ? <p>{post.frontmatter.place}</p> : null}
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </Box>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        place
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`
