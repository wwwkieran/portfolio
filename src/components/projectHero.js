import * as React from 'react'
import { Link } from 'gatsby'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, metadataContainer, description, image, imageContainer, seemoreText, textContainer, spacer} from './projectHero.module.scss'
import ClassicWindow from './classicWindow'

// eslint-disable-next-line react/prop-types
const ProjectHero = ({ node }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
        <div className={container}>
            <div className={textContainer}>
                <ClassicWindow windowTitle={"  " + node.frontmatter.title + " "}>
                    <div className={metadataContainer}>
                        <h6 style={{ marginRight: 'auto' }}>{node.frontmatter.date}</h6>
                        {/*<h6 style={{ marginLeft: 'auto' }}>{node.frontmatter.date}</h6>*/}
                    </div>
                <h3 className={description}>{node.frontmatter.short_description}</h3>
            {/*<div style={{ display: 'flex' }}>*/}
            {/*    <div style={{ width: "100%" }}></div>*/}
            {/* <Link to={`/${node.frontmatter.slug}`} className={seemoreText}>See More --> </Link>*/}
            {/*</div>*/}
                </ClassicWindow>
            </div>
            {/* <hr/> */}
            <div className={ spacer }></div>
            <div className={imageContainer}>

                <GatsbyImage className={image} alt={node.frontmatter.hero_image_alt} image={getImage(node.frontmatter.hero_image)} />
            </div>
        </div>
  )
}

export default ProjectHero
