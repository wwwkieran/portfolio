import * as React from 'react'
import { Link } from 'gatsby'
import { container, yearContainer } from './blogList.module.scss'

const BlogList = () => {
  return (
        <div className={container}>
            <div className={yearContainer}>
                <p> 2024 </p>  <p>  / <Link to={'/'}>How I built this site</Link> / <Link to={'/'}>Another post</Link></p>
            </div>
        </div>
  )
}

export default BlogList
