import React from 'react'
import get from 'lodash/get'
import Link from 'gatsby-link'
import { Image } from 'rebass'

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
  <div>
    {projects.map(({ node }) => {
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
            hero {
              publicURL
            }
          }
        }
      }
    }
  }
`
