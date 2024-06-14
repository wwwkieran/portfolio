import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  text,
  imageClass,
  container,
  imgCol,
  mainDescCol,
  infoCol,
  link
} from './projectThumb.module.scss'

const ProjectThumb = ({ title, image, year, slug, description }) => {
  const path = '/work/' + slug
  return (
      <>
          <hr/>
          <div className={container}>
              <div className={imgCol}>
                  <Link to={path} className={link}><GatsbyImage alt={'Image for ' + title} image={getImage(image)} className={imageClass}/></Link>
              </div>
              <div className={mainDescCol}>
                  <h3><Link to={path} className={link}>{title}</Link></h3>
                  <p>{description}</p>
                  <p><Link to={path} className={link}>Read more</Link></p>
              </div>
              <div className={infoCol}>
                 <h6>{year}</h6>
              </div>
          </div>
      </>
  )
}

export default ProjectThumb
