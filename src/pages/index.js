import React from 'react'
import Link from 'gatsby-link'
import get from 'lodash/get'
import Helmet from 'react-helmet'

const Index = ({
  data: {
    projects: { edges: projects },
    soft: { edges: soft },
    site: {
      siteMetadata: { title },
    },
  },
}) => (
  <div>
    <Helmet title={title} />
    {projects.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3>
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
    {soft.map(({ node }) => {
      const title = get(node, 'frontmatter.title') || node.fields.slug
      return (
        <div key={node.fields.slug}>
          <h3>
            <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
              {title}
            </Link>
          </h3>
          <small>{node.frontmatter.date}</small>
          <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
        </div>
      )
    })}
  </div>
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
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
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
