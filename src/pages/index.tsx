import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import { Image, Box } from 'rebass'

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
  <Box px={[0, 5]}>
    <Helmet title={title} />

    {/* TODO: site hero */}
    {projects.concat(soft).map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug

      return (
        <Link
          style={{ boxShadow: 'none' }}
          to={node.fields.slug}
          key={node.fields.slug}
        >
          <Image src={node.frontmatter.hero.publicURL} alt={title} />
        </Link>
      )
    })}
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
