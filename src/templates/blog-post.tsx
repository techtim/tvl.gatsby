import React from 'react'
import Helmet from 'react-helmet'
import { Box, Heading, Image, Text } from 'rebass'

interface Props {
  data: {
    markdownRemark: {
      html: string
      frontmatter: any
    }
    site: {
      siteMetadata: { title: string }
    }
  }
}

const BlogPostTemplate: React.SFC<Props> = ({
  data: {
    markdownRemark: {
      html,
      frontmatter: { title, hero, place, date },
    },
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => (
  <Box>
    <Helmet title={`${title} | ${siteTitle}`} />

    {hero ? <Image src={hero.publicURL} width="100%" /> : null}

    <Box pt={3} px={[4, 5]}>
      <Heading
        fontSize={4}
        fontWeight="regular"
        style={{ textTransform: 'lowercase' }}
      >
        {title}
      </Heading>

      <Text is="div" color="suvaGray" mt={1}>
        {date}
        {place ? `, ${place}` : null}
      </Text>

      <Text
        color="suvaGray"
        is="div"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </Box>
  </Box>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
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
