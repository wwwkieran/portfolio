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
            <div className={headerContainer} style={{ display: 'inline' }}>
                <hr className={line}/>
                <h1 style={{ color: 'white' }} className={titleClass}>{title}</h1>
                <hr className={line}/>
            </div>
            <div className={contentContainer} style={{ }}>
                {children}
            </div>
        </motion.div>
  )
}

export default NewLayout
