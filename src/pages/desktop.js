import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'
import { motion } from 'framer-motion'
import IconLink from '../components/desktop/iconLink'
import { useSiteMetadata } from '../components/hooks/siteMetadata'

const DesktopPage = () => {
  const metadata = useSiteMetadata()
  return (
      <div style={{ backgroundColor: '#9899CC', position: 'absolute', top: '27px', left: '0px', right: '0px', bottom: '0px', zIndex: '-1' }} >
         <ClassicWindow windowTitle={'Introduction'} width={'400px'} y={'100px'} x={'100px'}>
             <div style={{ margin: '20px' }}>

             <h2 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Charcoal, Geneva, sans-serif', color: 'black' }}>
                 wwwkieran
             </h2>
             <p style={{ fontSize: '1.0em', fontFamily: 'Geneva, sans-serif', color: 'black', fontSmooth: 'never', webkitFontSmoothing: 'none', marginTop: '0px', marginLeft: '5px', marginRight: '5px', marginBottom: '50px' }}>
                 Visual Artist + Computer Engineer.
                 Exploring algorithms, robotics, and patterns.</p>

             <p style={{ fontFamily: 'Geneva, sans-serif', fontSize: '0.9em', fontSmooth: 'never', webkitFontSmoothing: 'none', color: 'black' }}>Links:</p>
             <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', gridAutoRows: '70px' }}>
                 <IconLink link='/work' description={'Work'} imagePath={'/images/book.png'}/>
                 <IconLink link={metadata.instagramUrl} description={'Instagram'} imagePath={'/images/insta.png'}/>
                 <IconLink link={metadata.githubUrl} description={'Github'} imagePath={'/images/github.png'}/>
                 <IconLink link={metadata.tiktokUrl} description={'TikTok'} imagePath={'/images/tiktok.png'}/>
                 <IconLink link={metadata.linkedinUrl} description={'Linkedin'} imagePath={'/images/linkedin.png'}/>
             </div>
             <br/>
             </div>
         </ClassicWindow>
          <ClassicWindow windowTitle={'Gallery'} width={'300px'} y={'450px'} x={'250px'}>
          </ClassicWindow>
          <motion.div style={{ backgroundColor: '#000000', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', zIndex: '1' }} animate={{ top: '100vh' }} exit={{ top: '0px' }} transition={{ ease: 'easeInOut', duration: 0.7 }}>
          </motion.div>
      </div>
  )
}

export const Head = () => <><Seo title="Home" /></>

export default DesktopPage
