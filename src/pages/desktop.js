import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'
import { motion } from 'framer-motion'

const DesktopPage = () => {
  return (
      <div style={{ backgroundColor: '#9899CC', position: 'absolute', top: '27px', left: '0px', right: '0px', bottom: '0px', zIndex: '-1' }} >
         <ClassicWindow windowTitle={'Introduction'} width={'400px'} y={'100px'} x={'100px'}>
             <h1>Hi, I’m Kieran!</h1>
             <br/>
             <br/>
             I’m a software engineer and digital artist interested in the future of digital creativity tools.

         </ClassicWindow>
          <motion.div style={{ backgroundColor: '#000000', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', zIndex: '1' }} animate={{ top: '100vh' }} exit={{ top: '0px' }} transition={{ ease: 'easeInOut', duration: 0.7 }}>

          </motion.div>

      </div>
  )
}

export const Head = () => <><Seo title="Home" /></>

export default DesktopPage
