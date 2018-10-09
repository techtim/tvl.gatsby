import { graphql } from 'gatsby'
import get from 'lodash.get'
import React from 'react'
import Helmet from 'react-helmet'

import Card from '../components/Card'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'
import Video from '../components/Video'

interface Props {
  data: {
    soft: { edges: any[] }
    projects: { edges: any[] }
    site: { siteMetadata: { title: string; mainHeroSrc: string } }
  }
}

const Index: React.SFC<Props> = ({
  data: {
    soft: { edges: soft },
    projects: { edges: projects },
    site: {
      siteMetadata: { title, mainHeroSrc },
    },
  },
}) => (
  <Layout hero={<Video src={mainHeroSrc} />}>
    <Helmet title={title} />

    <Gallery>
      {soft.concat(projects).map(({ node }) => (
        <Card
          to={node.fields.slug}
          key={node.fields.slug}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          image={get(node, 'frontmatter.icon.childImageSharp.resize.src') || ''}
        />
      ))}
    </Gallery>
  </Layout>
)

export default Index

export const galleryImage = graphql`
  fragment galleryImage on File {
    childImageSharp {
      resize(width: 592, height: 352) {
        src
      }
    }
  }
`

export const pageQuery = graphql`
  {
    site {
      siteMetadata {
        title
        mainHeroSrc
      }
    }
    projects: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            icon {
              publicURL
              ...galleryImage
            }
          }
        }
      }
    }
    soft: allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "/soft/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            order
            title
            icon {
              publicURL
              ...galleryImage
            }
          }
        }
      }
    }
  }
`
