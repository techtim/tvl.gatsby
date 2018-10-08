import { graphql } from 'gatsby'
import React from 'react'
import Helmet from 'react-helmet'
import { Box, Heading, Image, Text } from 'rebass'
import Layout from '../components/Layout'
import Post from '../components/Post'
import Video from '../components/Video'

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
      frontmatter: { title, hero, videoHero, place, date, team },
    },
    site: {
      siteMetadata: { title: siteTitle },
    },
  },
}) => (
  <Layout
    hero={
      videoHero ? (
        <Video src={videoHero} />
      ) : hero ? (
        <Image src={hero.publicURL} width="100%" />
      ) : null
    }
  >
    <Helmet title={`${title} | ${siteTitle}`} />

    <article>
      <header>
        <Heading
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
    </article>
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
        videoHero
      }
    }
  }
`
