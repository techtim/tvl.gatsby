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

const Soft: React.SFC<Props> = ({
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

export default Soft

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___order], order: ASC }
      filter: { fileAbsolutePath: { regex: "/soft/" } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            order
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
