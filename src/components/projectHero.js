import * as React from 'react'
import { Link } from 'gatsby'
// import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  container,
  metadataContainer,
  description,
  imageWindow,
  imageContainer,
  seemoreText,
  textContainer,
  spacer,
  heroVideo
} from './projectHero.module.scss'
import ClassicWindow from './classicWindow'
import PixelPainter from '../pages/projects/pixel-painter/hero_min.mp4'
import QuickSettings from '../pages/projects/quicksettings-iterator/hero-video.mp4'
import GenLino from '../pages/projects/generative-prints/hero-vid.mp4'

const videoMap = {
  PixelPainter,
  QuickSettings,
  GenLino
}

// eslint-disable-next-line react/prop-types
const ProjectHero = ({ node }) => {
  // const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
        <div className={container}>
            <div className={textContainer}>
                <ClassicWindow windowTitle={'  ' + node.frontmatter.title + ' '}>
                    <div className={metadataContainer}>
                        <h6 style={{ marginRight: 'auto' }}>{node.frontmatter.date}</h6>
                        {/* <h6 style={{ marginLeft: 'auto' }}>{node.frontmatter.date}</h6> */}
                    </div>
                <h3 className={description}>{node.frontmatter.short_description}</h3>
                        <ClassicWindow windowTitle="Preview" style={{
                          width: '80%',
                          margin: '10px',
                          marginLeft: 'auto'
                        }}>
                            {node.frontmatter.hero_video && <video className={heroVideo} autoPlay={'true'} loop={'true'} preload={'auto'} muted={'true'}><source src={videoMap[node.frontmatter.hero_video]} type="video/mp4" /></video>}
                            {node.frontmatter.hero_image && <GatsbyImage alt={node.frontmatter.hero_image_alt} image={getImage(node.frontmatter.hero_image)} />}
                        </ClassicWindow>
            {/* <div style={{ display: 'flex' }}> */}
            {/*    <div style={{ width: "100%" }}></div> */}
            {/* <Link to={`/${node.frontmatter.slug}`} className={seemoreText}>See More --> </Link> */}
            {/* </div> */}
                </ClassicWindow>
            </div>
            {/* <hr/> */}
            <div className={ spacer }></div>

        </div>
  )
}

export default ProjectHero
