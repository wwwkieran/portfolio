import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { project, projectSelected, container, list, photoContainer } from './projectList.module.scss'
import { StaticImage } from 'gatsby-plugin-image'

const ProjectList = () => {
  const data = useStaticQuery(graphql`
      query {
        allMdx(sort: { frontmatter: { date: DESC }}) {
          nodes {
            frontmatter {
              date(formatString: "MMMM D, YYYY")
              title
              slug
            }
            id
          }
        }
      }
    `)
  const [selectedProject, setSelectedProject] = React.useState(data.allMdx.nodes[0].id)

  return (
      <div className={container}>
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    <article key={node.id} className={node.id === selectedProject ? projectSelected : project}>
                        <h2>
                            <Link to={`/${node.frontmatter.slug}`} onMouseEnter={() => { setSelectedProject(node.id) }}>
                                {node.frontmatter.title}
                            </Link>
                        </h2>
                        {node.id === selectedProject ? (<p>Posted: {node.frontmatter.date}</p>) : null}
                    </article>
                ))
            }
        </div>
        <div className={photoContainer}>
            <StaticImage src="../images/600.jpeg" alt="it's a cat" height="544px" width="488px"/>
        </div>

      </div>
  )
}

export default ProjectList
