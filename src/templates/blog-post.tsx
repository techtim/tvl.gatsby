import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Box, Heading, Image, Text } from 'rebass'
import Layout from '../components/Layout'
import Post from '../components/Post'

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
      frontmatter: { title, hero, place, date, team },
    },
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => (
  <Layout>
    <Helmet title={`${title} | ${siteTitle}`} />

    {hero ? <Image src={hero.publicURL} width="100%" /> : null}

    <Box mb={6} mt={3} px={[0, 5]} is="article">
      <header>
        <Heading
          mt={5}
          fontSize={4}
          fontWeight="regular"
          // style={{ textTransform: 'lowercase' }}
        >
          {title}
        </Heading>
      </header>

      {team ? (
        <Text is="div" color="suvaGray" fontWeight={500} mt={1}>
          Team: {team}
        </Text>
      ) : null}

      <Text is="div" color="suvaGray" mt={1} fontWeight={500}>
        <time>{date}</time>
        {place ? `, ${place}` : null}
      </Text>

      <Post dangerouslySetInnerHTML={{ __html: html }} />
    </Box>
  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
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
        date
        team
        hero {
          publicURL
        }
      }
    }
  }
`
