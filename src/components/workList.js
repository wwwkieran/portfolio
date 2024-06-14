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
              long_description
              hidden
              hero_video
              hero_image {
                childImageSharp {
                  gatsbyImageData(height:500 
                  width: 500)
                }
              } 
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
        <ProjectThumb year={2024} description={node.frontmatter.long_description} slug={node.frontmatter.slug} title={node.frontmatter.title} image={node.frontmatter.hero_image}/>
      ))}
    </div>
  )
}

export default WorkList
