import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { text, imageClass, container } from './projectThumb.module.scss'

const ProjectThumb = ({ title, image, year }) => {
  return (
      <div className={container}>
        <GatsbyImage alt={'Image for ' + title} image={getImage(image)} className={imageClass}/>
        <div style={{ display: 'flex' }}>
          <p className={text} style={{ marginLeft: '0px', marginRight: 'auto' }}>{title}</p>
          <p className={text} style={{ marginLeft: 'auto', marginRight: '0px' }}>{year}</p>
        </div>
      </div>
  )
}

export default ProjectThumb
