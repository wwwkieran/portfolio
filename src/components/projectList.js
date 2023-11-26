import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { project, projectSelected, container, list, heroContainer } from './projectList.module.scss'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import ProjectHero from './projectHero'


const ProjectList = () => {
  const data = useStaticQuery(graphql`
      query {
      allMdx (sort: { frontmatter: { index: ASC }}) {
          nodes {
            frontmatter {
              date
              title
              slug
              index
              short_description
              hidden
              hero_video 
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
  // const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  return (
      <div className={container} onMouseLeave={() => {
        setSelectedProject('')
      }}>
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    node.frontmatter.hidden ? null :
                        <Link to={`/${node.frontmatter.slug}`} style={{textDecoration: "none"}} onMouseEnter={() => { setSelectedProject(node.id) } } >
                        <article className={node.id === selectedProject ? projectSelected : project}>
                            <h6>
                                {node.frontmatter.index}
                            </h6>
                            <h1 key={node.id}>
                                    {node.frontmatter.title}
                            </h1>
                        </article>
                        </Link>
                ))
            }
        </div>
        <div className={heroContainer}>{
            data.allMdx.nodes.map(node => (
              node.id === selectedProject && (<ProjectHero key={node.id} node={node}/>)
            ))
        }
        </div>
      </div>
  )
}

export default ProjectList
