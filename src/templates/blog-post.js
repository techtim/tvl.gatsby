import React from 'react'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import { Heading, Box, Image } from 'rebass'

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const {
      frontmatter: { title, hero, place, date },
    } = post
    const siteTitle = get(this.props, 'data.site.siteMetadata.title')

    return (
      <Box>
        {hero ? <Image src={hero.publicURL} /> : null}
        <Box pt={3} px={[4, 5]}>
          <Helmet title={`${title} | ${siteTitle}`} />
          <Heading fontSize={4} style={{ textTransform: 'lowercase' }}>
            {title}
          </Heading>
          <p>{date}</p>
          {place ? <p>{place}</p> : null}
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </Box>
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
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        place
        date(formatString: "MMMM DD, YYYY")
        hero {
          publicURL
        }
      }
    }
  }
`
