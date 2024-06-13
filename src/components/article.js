import * as React from 'react'
import { container, bodyText, sticky, contents } from './article.module.scss'
import { MDXProvider } from '@mdx-js/react'
import ClassicWindow from './classicWindow'
import { FlexContainer, HalfWidth, ThirdWidth, TwoThirdsWidth } from './post'

// eslint-disable-next-line react/prop-types
export const Article = ({ frontmatter, prev, next, children }) => {
  if (!frontmatter) return null

  return (
        <div className={container}>
            <Left frontmatter={frontmatter}/>
            <div className={bodyText}>
                <hr/>
                <br/>
                <br/>
                <h6>
                    {frontmatter.date}
                </h6>
                <h1>
                    {frontmatter.title}
                </h1>
                <MDXProvider
                    components={{
                      ClassicWindow,
                      HalfWidth,
                      ThirdWidth,
                      TwoThirdsWidth,
                      FlexContainer
                    }}
                >
                    {children}
                </MDXProvider>
                <div style={{ height: '200px' }}></div>
            </div>
            <div className={sticky}>
                <hr/>
                <h6>related articles</h6>
                <hr/>
                <h5>Sharty Artcile</h5>
                <hr/>
                <h5>How to Hack the Mainframe</h5>
                <hr/>
                <h5>Roll Your Own Readwise</h5>
                <hr/>
            </div>
        </div>
  )
}

const Left = ({ frontmatter }) => {
  return (<div className={sticky}>
        <hr/>

        <p>
            {frontmatter.long_description}
        </p>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className={contents}>
            <hr/>
            <h6>Contents</h6>
            <hr/>
            <h5>Sharty Artcile</h5>
            <hr/>
            <h5>How to Hack the Mainframe</h5>
            <hr/>
            <h5>Roll Your Own Readwise</h5>
            <hr/>
        </div>

    </div>)
}
