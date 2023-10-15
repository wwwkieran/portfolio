import * as React from 'react'
import Layout from '../components/layout'
import ProjectList from '../components/projectList'
import Seo from '../components/seo'

const BlogPage = () => {
  return (
        <Layout pageTitle="Projects">
            <ProjectList></ProjectList>
        </Layout>
  )
}

export const Head = () => <Seo title="Projects" />

export default BlogPage
