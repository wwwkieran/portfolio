import * as React from 'react'
import Seo from '../components/seo'
import { motion } from 'framer-motion'
import BlogList from '../components/blogList'

const BlogPage = () => {
  return (<motion.div initial={{ opacity: 0, translateX: -3 }} style={{ display: 'flex' }} animate={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
          <div style={{ display: 'inline' }}>
              <h1 style={{ color: 'white' }}>Blog</h1>
              <h1 style={{ color: 'white' }}>Blog</h1>
              <h1 style={{ color: 'white' }}>Blog</h1>
              <h1 style={{ color: 'white' }}>Blog</h1>
              <h1 style={{ color: 'white' }}>Blog</h1>
          </div>
          <div style={{ marginLeft: '10%', marginRight: 'auto', marginTop: 'auto', marginBottom: '0' }}>
              <BlogList/>
          </div>
        </motion.div>
  )
}

export const Head = () => <Seo title="Blog" />

export default BlogPage
