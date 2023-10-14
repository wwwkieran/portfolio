import * as React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../components/layout'
import ProjectList from "../components/projectList";
import Seo from '../components/seo'

const BlogPage = ({ data }) => {
    return (
        <Layout pageTitle="My Blog Posts">
            <ProjectList></ProjectList>
        </Layout>
    )
}

export const Head = () => <Seo title="Projects" />

export default BlogPage