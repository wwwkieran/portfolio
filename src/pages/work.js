import * as React from 'react'
import Seo from '../components/seo'
import { motion } from 'framer-motion'

const WorkPage = () => {
  return (<motion.div initial={{ opacity: 0, translateX: -3 }} animate={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }}>
        <h1 style={{ color: 'white' }}>Work</h1>
        <h1 style={{ color: 'white' }}>Work</h1>
        <h1 style={{ color: 'white' }}>Work</h1>
        <h1 style={{ color: 'white' }}>Work</h1>
        <h1 style={{ color: 'white' }}>Work</h1>
  </motion.div>
  )
}

export const Head = () => <Seo title="Work" />

export default WorkPage
