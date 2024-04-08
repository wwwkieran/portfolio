import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { container, link } from './workList.module.scss'
import ProjectThumb from './projectThumb'

const WorkList = ({ title, image, year }) => {
  const data = useStaticQuery(graphql`
        query {
  allMdx(filter: {internal: {contentFilePath: {regex: "/projects/"}}}) {
    nodes {
      frontmatter {
              date
              title
              slug
              index
              short_description
              hidden
              hero_video
              hero_image 
              hero_image_alt
      }
      internal {
        contentFilePath
      }
      id
    }
  }
}
    `)
  return (
    <div className={container}>
      {data.allMdx.nodes.map(node => (
        <Link className={link} to={'/work/' + node.frontmatter.slug}><ProjectThumb year={2024} title={node.frontmatter.title} image={node.frontmatter.hero_image}/></Link>
      ))}
    </div>
  )
}

export default WorkList
