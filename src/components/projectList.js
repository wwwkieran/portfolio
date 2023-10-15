import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { project, projectSelected, container, list, photoContainer, hidden, visible, projectDescInner } from './projectList.module.scss'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import autoAnimate from '@formkit/auto-animate'

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
  const parent = React.useRef(null)

  React.useEffect(() => {
    parent.current && autoAnimate(parent.current)
  }, [parent])

  return (
      <div className={container}>
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    <Link to={`/${node.frontmatter.slug}`} onMouseEnter={() => { setSelectedProject(node.id) }} onMouseLeave={ () => { setSelectedProject('') }}>
                    <article key={node.id} className={node.id === selectedProject ? projectSelected : project}>
                        <h2>
                                {node.frontmatter.title}
                        </h2>
                        {node.id === selectedProject
                          ? (
                              <div className={projectDescInner}>
                                  <p>{node.frontmatter.date}</p>
                                  <p style={{ color: 'black' }}>{node.frontmatter.short_description}</p>
                              </div>
                            )
                          : null}
                    </article>
                    </Link>
                ))
            }
        </div>
        <div className={photoContainer}>{
            data.allMdx.nodes.map(node => (
                <GatsbyImage image={getImage(node.frontmatter.hero_image)} alt="it's a cat" className={node.id === selectedProject ? visible : hidden} />
            ))
        }
        </div>

      </div>
  )
}

export default ProjectList
