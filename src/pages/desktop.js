import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'
import { motion } from 'framer-motion'
import IconLink from '../components/desktop/iconLink'
import { useSiteMetadata } from '../components/hooks/siteMetadata'
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image'
import { AnimatedGallery } from '../components/desktop/aniGallery'

const DesktopPage = () => {
  return (
      <div style={{ backgroundColor: '#9899CC', position: 'absolute', top: '27px', left: '0px', right: '0px', bottom: '0px', zIndex: '-1' }} >
          <GalleryWindow x={'450px'} y={'130px'}/>
         <ClassicWindow windowTitle={'Introduction'} width={'320px'} y={'100px'} x={'100px'}>
             <div style={{ margin: '10px' }}>

             <h2 style={{ marginTop: '0px', marginBottom: '0px', fontFamily: 'Charcoal, Geneva, sans-serif', color: 'black' }}>
                 wwwkieran
             </h2>
             <p style={{ fontSize: '1.0em', fontFamily: 'Geneva, sans-serif', color: 'black', fontSmooth: 'never', webkitFontSmoothing: 'none', marginTop: '0px', marginLeft: '5px', marginRight: '5px', marginBottom: '10px' }}>
                 Visual Artist + Computer Engineer.
                 Exploring algorithms, robotics, and patterns.</p>
             </div>
         </ClassicWindow>
          <LinksWindow x={'200px'} y={'250px'}/>
          <motion.div style={{ backgroundColor: '#000000', position: 'absolute', top: '0px', left: '0px', right: '0px', bottom: '0px', zIndex: '1' }} animate={{ top: '100vh' }} exit={{ top: '0px' }} transition={{ ease: 'easeInOut', duration: 0.7 }}>
          </motion.div>
      </div>
  )
}

const LinksWindow = ({ x, y }) => {
  const metadata = useSiteMetadata()
  return (
        <ClassicWindow windowTitle={'Links'} width={'fit-content'} y={y} x={x}>
            <div style={{ margin: '10px' }}>
                {/* <p style={{ */}
                {/*  fontFamily: 'Geneva, sans-serif', */}
                {/*  fontSize: '0.9em', */}
                {/*  fontSmooth: 'never', */}
                {/*  webkitFontSmoothing: 'none', */}
                {/*  color: 'black' */}
                {/* }}>Links:</p> */}
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  gap: '10px',
                  gridAutoRows: '65px',
                  marginLeft: 'auto',
                  marginRight: 'auto'
                }}>
                    <IconLink link='/work' description={'Work'} imagePath={'/images/book.png'}/>
                    <IconLink link='/blog' description={'Blog'} imagePath={'/images/book.png'}/>
                    <IconLink link={metadata.instagramUrl} description={'Instagram'} imagePath={'/images/insta.png'}/>
                    <IconLink link={metadata.githubUrl} description={'Github'} imagePath={'/images/github.png'}/>
                    <IconLink link={metadata.tiktokUrl} description={'TikTok'} imagePath={'/images/tiktok.png'}/>
                    <IconLink link={metadata.linkedinUrl} description={'Linkedin'}
                              imagePath={'/images/linkedin.png'}/>
                </div>
                <br/>
            </div>
        </ClassicWindow>
  )
}

const GalleryWindow = ({ x, y }) => {
  return (<ClassicWindow windowTitle={'Gallery'} width={'400px'} y={y} x={x}>
      <AnimatedGallery images={['../images/IMG_8766.jpeg']}/>
    </ClassicWindow>)
}

export const Head = () => <><Seo title="Home" /></>

export default DesktopPage
