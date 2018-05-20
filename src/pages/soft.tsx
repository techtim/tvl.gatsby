import get from 'lodash/get'
import React from 'react'
import Card from '../components/Card'

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
  <div>
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
  </div>
)

export default Soft

export const query = graphql`
  query SoftQuery {
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
