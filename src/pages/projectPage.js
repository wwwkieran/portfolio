import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { Article } from '../components/article'
import NewLayout from '../components/newLayout'
import { Project } from '../components/project'

const BlogPost = ({ data, pageContext, children }) => {
  return (
        <NewLayout title={data.mdx.frontmatter.title}>
            <Project frontmatter={data.mdx.frontmatter} prev={ pageContext.prev} next ={ pageContext.next }>
                {children}
            </Project>

        </NewLayout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        tech
        info
        long_description
        link
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
