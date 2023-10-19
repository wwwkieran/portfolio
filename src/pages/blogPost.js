import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import Post from '../components/post'

const BlogPost = ({ data, pageContext, children }) => {
  return (
        <Layout pageTitle={data.mdx.frontmatter.title}>
            <Post frontmatter={data.mdx.frontmatter} prev={ pageContext.prev} next ={ pageContext.next }>
                {children}
            </Post>

        </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date
        info
        long_description
        link
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost
