import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'

const Projects = ({
  data: {
    allMarkdownRemark: { edges: projects },
  },
}) => (
  <div>
    {projects.map(({ node }) => (
      <div key={node.fields.slug}>
        <h3>
          <Link style={{ boxShadow: 'none' }} to={node.fields.slug}>
            {get(node, 'frontmatter.title') || node.fields.slug}
          </Link>
        </h3>
        <small>{node.frontmatter.date}</small>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
    ))}
  </div>
)

export default Projects

export const pageQuery = graphql`
  query ProjectsQuery {
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
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`
