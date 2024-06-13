import { motion } from 'framer-motion'
import * as React from 'react'
import {
  container,
  line,
  titleClass,
  headerContainer,
  contentContainer
} from './newLayout.module.scss'
import { determineMaxWidth } from './hooks/determineMaxWidth'

const NewLayout = ({ title, children }) => {
  const maxWidth = determineMaxWidth()
  return (<motion.div className={container} initial={{ opacity: 0, translateX: -3, maxWidth }} animate={{ opacity: 1, translateX: 0 }} exit={{ opacity: 0, translateX: 3 }} transition={{ duration: 0.3 }}>
                {children}
        </motion.div>
  )
}

export default NewLayout
