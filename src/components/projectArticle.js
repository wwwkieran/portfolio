import * as React from 'react'
import { Link } from 'gatsby'
import autoAnimate from "@formkit/auto-animate";
import { project, projectSelected, projectDescInner, projectDescInnerRight, projectDescInnerLeft } from './projectArticle.module.scss'
import {useAutoAnimate} from "@formkit/auto-animate/react";
import {GatsbyImage, getImage} from "gatsby-plugin-image";

const ProjectArticle = ({ node, selectedProject, onMouseEnter, onMouseLeave, children }) => {
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)


    return (
        <Link to={`/${node.frontmatter.slug}`} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} >
            <article key={node.id} ref={parent} className={node.id === selectedProject ? projectSelected : project}>
                <h2>
                    {node.frontmatter.title}
                </h2>
                {node.id === selectedProject
                  ? (
                      <div className={projectDescInner}>
                      <div className={projectDescInnerLeft}>
                          <p>{node.frontmatter.date}</p>
                          <p style={{ color: 'black' }}>{node.frontmatter.short_description}</p>
                      </div>
                    <div className={projectDescInnerRight}>
                       <GatsbyImage alt={node.frontmatter.hero_image_alt} image={getImage(node.frontmatter.hero_image)} />
                    </div>
                      </div>
                    )
                  : null}
            </article>
        </Link>
    )
}

export default ProjectArticle
