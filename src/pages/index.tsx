import { graphql } from 'gatsby'
import styled from 'styled-components'
import get from 'lodash.get'
import React from 'react'
import Helmet from 'react-helmet'
import { Box } from 'rebass'
import Card from '../components/Card'
import Layout from './../components/Layout'

interface Props {
  data: {
    projects: { edges: any[] }
    soft: { edges: any[] }
    site: { siteMetadata: { title: string } }
  }
}

const Grid = styled(Box)`
  display: grid;
  grid-column-gap: 46px;
  grid-row-gap: 54px;
  grid-template-columns: repeat(2, 1fr);
`

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
    <Box mx={[0, 0, 3, 4]}>
      <Helmet title={title} />

      {/* TODO: site hero */}

      <Grid>
        {projects.concat(soft).map(({ node }) => (
          <Card
            to={node.fields.slug}
            key={node.fields.slug}
            title={get(node, 'frontmatter.title') || node.fields.slug}
            image={
              get(node, 'frontmatter.hero.childImageSharp.resize.src') || ''
            }
          />
        ))}
      </Grid>
    </Box>
  </Layout>
)

export default Index

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
              childImageSharp {
                resize(width: 592, height: 352) {
                  src
                }
              }
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
              childImageSharp {
                resize(width: 592, height: 352) {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`
