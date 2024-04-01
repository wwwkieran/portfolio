import * as React from 'react'
import { Link } from 'gatsby'
import { container, yearContainer, year, posts, link } from './blogList.module.scss'

const BlogList = () => {
  return (
        <div className={container}>
            <div className={yearContainer}>
                <p className={year}> 2024 </p>  <p className={posts}> / <Link className={link} to={'/'}>How I built this site</Link> / <Link className={link} to={'/'}>Another post</Link></p>
            </div>
        </div>
  )
}

export default BlogList
