import * as React from 'react'
import Seo from '../components/seo'
import { motion } from 'framer-motion'
import BlogList from '../components/blogList'
import NewLayout from "../components/newLayout";

const BlogPage = () => {
  return (
      <NewLayout title={"Words"}>
          <BlogList/>
      </NewLayout>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
