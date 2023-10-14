import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { project, projectSelected, container, list, photoContainer, hidden, visible } from './projectList.module.scss'
import {GatsbyImage, StaticImage} from 'gatsby-plugin-image'
import { getImage } from "gatsby-plugin-image"

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
  const [selectedProject, setSelectedProject] = React.useState(data.allMdx.nodes[0].id)
  const ref = React.useRef();
  const [width, setWidth] = React.useState(0);
  const [height, setHeight] = React.useState(0);

  React.useEffect(() => {
      if (ref.current) {
          setWidth(ref.current.offsetWidth);
          setHeight(ref.current.offsetHeight);
      }
  }, []);

  return (
      <div className={container}>
        <div className={list}>{
                data.allMdx.nodes.map(node => (
                    <Link to={`/${node.frontmatter.slug}`} onMouseEnter={() => { setSelectedProject(node.id) }}>
                    <article key={node.id} className={node.id === selectedProject ? projectSelected : project}>
                        <h2>
                                {node.frontmatter.title}
                        </h2>
                        {node.id === selectedProject ? (<p>Posted: {node.frontmatter.date}</p>) : null}
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
