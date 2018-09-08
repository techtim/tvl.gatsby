import { graphql } from 'gatsby'
import get from 'lodash/get'
import React from 'react'
import Card from '../components/Card'
import Layout from '../components/Layout'

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
    {projects.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug

      return (
        <Card
          to={node.fields.slug}
          key={node.fields.slug}
          title={title}
          image={node.frontmatter.hero.publicURL}
        />
      )
    })}
  </Layout>
)

export default Soft

export const query = graphql`
  {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/soft/" } }
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
              publicURL
            }
          }
        }
      }
    }
  }
`
