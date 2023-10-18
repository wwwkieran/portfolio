import * as React from 'react'
import { Link } from 'gatsby'
import { container } from './post.module.scss'
import ClassicWindow from './classicWindow'
import {MDXProvider} from "@mdx-js/react";

// eslint-disable-next-line react/prop-types
const Post = ({ frontmatter, children }) => {

    return (
        <div className={container}>
            <h6>{frontmatter.date}</h6>
            {frontmatter.info && <h6>{frontmatter.info}</h6>}
            {frontmatter.link && <Link to={frontmatter.link}> <h6>↗︎{frontmatter.link} </h6> </Link>}
            <h3>{frontmatter.long_description}</h3>
            <MDXProvider
                components={{
                    ClassicWindow
                }}
            >
                {children}
            </MDXProvider>
        </div>
    )
}

export default Post
