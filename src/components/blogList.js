import * as React from 'react'
import { graphql, Link, useStaticQuery } from 'gatsby'
import {
  container,
  yearContainer,
  year,
  posts,
  link
} from './blogList.module.scss'

const BlogList = () => {
  const data = useStaticQuery(graphql`
      query {
  allMdx(filter: {internal: {contentFilePath: {regex: "/blog/"}}}) {
    nodes {
      frontmatter {
        title
        slug
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
            <div className={yearContainer}>
                <p className={year}> 2024 </p>
                { data.allMdx.nodes.map(node => (
                    <p className={posts} key={node.frontmatter.slug}> / <Link className={link} to={'/blog/' + node.frontmatter.slug}>{node.frontmatter.title}</Link></p>
                ))}
            </div>
        </div>
  )
}

export default BlogList
