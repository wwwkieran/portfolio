import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {
  gridContainer,
  leftCol,
  listCol,
  headerContainer,
  categoryHeader
} from './workList.module.scss'
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
      <>

    <div className={gridContainer}>
        <div></div>
        <div className={headerContainer}>
             {/* <hr/> */}
            <h1>Work</h1>
             {/* <hr/> */}
        </div>
        <LeftColumn/>
      <div className={listCol}>
          <div className={categoryHeader}><h2>Artwork</h2></div>
        {data.allMdx.nodes.map(node => (
            <ProjectThumb year={2024} description={node.frontmatter.long_description} key={node.frontmatter.slug} slug={node.frontmatter.slug} title={node.frontmatter.title} image={node.frontmatter.hero_image}/>
        ))}
      </div>
    </div>
      </>
  )
}

const LeftColumn = ({ title, image, year }) => {
  return (
      <div className={leftCol}>
          <h3>Jump to category</h3>
           <hr/>
          <h6>Artwork</h6>
          <h6>Tools & Applications</h6>
          <h6>Research</h6>
    </div>)
}

export default WorkList
