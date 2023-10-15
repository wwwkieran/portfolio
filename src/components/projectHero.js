import * as React from 'react'
import { Link } from 'gatsby'
import { project, projectSelected, projectDescInner, projectDescInnerRight, projectDescInnerLeft } from './projectArticle.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, metadataContainer, description, image, imageContainer, seemoreText, textContainer } from './projectHero.module.scss'

// eslint-disable-next-line react/prop-types
const ProjectHero = ({ node }) => {
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
        <div className={container}>
            <div className={metadataContainer}>
            <h6 style={{ marginRight: 'auto' }}>{node.frontmatter.date}</h6>
            <h6 style={{ marginLeft: 'auto' }}>{node.frontmatter.date}</h6>
            </div>
            <p className={description}>{node.frontmatter.short_description}</p>
            <div style={{ display: 'flex'}}>
            <Link to={`/${node.frontmatter.slug}`} className={seemoreText}>See More --> </Link>
            </div>
            {/*<hr/>*/}
            <div className={imageContainer}>
                <GatsbyImage className={image} alt={node.frontmatter.hero_image_alt} image={getImage(node.frontmatter.hero_image)} />
            </div>
        </div>
  )
}

export default ProjectHero
