import { graphql } from 'gatsby'
import get from 'lodash.get'
import React from 'react'
import Helmet from 'react-helmet'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

interface Props {
  data: {
    projects: { edges: any[] }
    soft: { edges: any[] }
    site: { siteMetadata: { title: string } }
  }
}

const Index: React.SFC<Props> = ({
  data: {
    projects: { edges: projects },
    soft: { edges: soft },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <Layout>
    <Helmet title={title} />

    {/* TODO: site hero */}

    <Gallery>
      {projects.concat(soft).map(({ node }) => (
        <Card
          to={node.fields.slug}
          key={node.fields.slug}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          image={get(node, 'frontmatter.hero.childImageSharp.resize.src') || ''}
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
            hero {
              publicURL
              ...galleryImage
            }
          }
        }
      }
    }
    soft: allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/soft/" } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date
            title
            hero {
              publicURL
              ...galleryImage
            }
          }
        }
      }
    }
  }
`
