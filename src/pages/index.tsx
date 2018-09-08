import get from 'lodash/get'
import React from 'react'
import Helmet from 'react-helmet'
import { Box } from 'rebass'
import Card from '../components/Card'

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
  <Box mx={[0, 0, 4, 5]}>
    <Helmet title={title} />

    {/* TODO: site hero */}

    {projects
      .concat(soft)
      .map(({ node }) => (
        <Card
          to={node.fields.slug}
          key={node.fields.slug}
          title={get(node, 'frontmatter.title') || node.fields.slug}
          image={get(node, 'frontmatter.hero.publicURL') || ''}
        />
      ))}
  </Box>
)

export default Index

export const pageQuery = graphql`
  query IndexQuery {
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
            date(formatString: "DD MMMM, YYYY")
            title
            hero {
              publicURL
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
            date(formatString: "DD MMMM, YYYY")
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
