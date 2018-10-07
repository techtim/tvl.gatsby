import { graphql } from 'gatsby'
import get from 'lodash.get'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'
import Gallery from '../components/Gallery'

interface Props {
  data: {
    allMarkdownRemark: { edges: any[] }
  }
}

const Projects: React.SFC<Props> = ({
  data: {
    allMarkdownRemark: { edges: projects },
  },
}) => (
  <Layout>
    <Gallery>
      {projects.map(({ node }) => (
        <Card
          to={node.fields.slug}
          key={node.fields.slug}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          image={
            node.frontmatter.icon
              ? node.frontmatter.icon.childImageSharp.resize.src
              : node.frontmatter.hero
                ? node.frontmatter.hero.childImageSharp.resize.src
                : null
          }
        />
      ))}
    </Gallery>
  </Layout>
)

export default Projects

export const pageQuery = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/projects/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date
            title
            hero {
              ...galleryImage
            }
            icon {
              ...galleryImage
            }
          }
        }
      }
    }
  }
`
