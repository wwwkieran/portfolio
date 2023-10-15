import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { container, list, photoContainer, hidden, visible, projectDescInner } from './projectList.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import ProjectArticle from './projectArticle'

const ProjectList = () => {
  const data = useStaticQuery(graphql`
      query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
              short_description
              hero_image_alt
              hero_image {
                childImageSharp {
                  gatsbyImageData(height:500 
                  width: 500)
                }
              }
            }
            id
          }
        }
      }
    `)
  const [selectedProject, setSelectedProject] = React.useState('')

  return (
      <div className={container}>
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    <ProjectArticle
                        node={node}
                        selectedProject={selectedProject}
                        onMouseEnter={ () => { setSelectedProject(node.id) }}
                        onMouseLeave={ () => { setSelectedProject('') }}
                    />
                ))
            }
        </div>
      </div>
  )
}

export default ProjectList
