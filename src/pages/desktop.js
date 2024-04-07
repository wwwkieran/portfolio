import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'
import { motion } from 'framer-motion'
import IconLink from '../components/desktop/iconLink'

const DesktopPage = () => {
  return (
      <div style={{ backgroundColor: '#9899CC', position: 'absolute', top: '27px', left: '0px', right: '0px', bottom: '0px', zIndex: '-1' }} >
         <ClassicWindow windowTitle={'Introduction'} width={'400px'} y={'100px'} x={'100px'}>
             <div style={{ margin: '20px' }}>

             <h2 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Charcoal, Geneva, sans-serif', color: 'black' }}>Hi, I’m Kieran!</h2>
             <p style={{ fontFamily: 'Charcoal, Geneva, sans-serif', color: 'black' }}>I’m a software engineer and digital artist interested in the future of digital creativity tools.</p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', gridAutoRows: '100px' }}>

             </div >
             <p style={{ fontFamily: 'Geneva, sans-serif', fontSize: '0.9em', fontSmooth: 'never', webkitFontSmoothing: 'none', color: 'black' }}>Links:</p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', gridAutoRows: '70px' }}>
                 <IconLink link='/work' description={'Work'} imagePath={'/images/book.png'}/>
                 <IconLink link='https://www.instagram.com/wwwkieran' description={'Instagram'} imagePath={'/images/insta.png'}/>
                 <IconLink link='https://github.com/wwwkieran' description={'Github'} imagePath={'/images/github.png'}/>
                 <IconLink link='https://www.tiktok.com/@raptorcoder' description={'TikTok'} imagePath={'/images/tiktok.png'}/>
                 <IconLink link='https://www.linkedin.com/in/kieranparikh/' description={'Linkedin'} imagePath={'/images/linkedin.png'}/>
             </div>
             <br/>
             </div>
         </ClassicWindow>

          <motion.div style={{ backgroundColor: '#000000', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', zIndex: '1' }} animate={{ top: '100vh' }} exit={{ top: '0px' }} transition={{ ease: 'easeInOut', duration: 0.7 }}>
          </motion.div>
      </div>
  )
}

export const Head = () => <><Seo title="Home" /></>

export default DesktopPage
