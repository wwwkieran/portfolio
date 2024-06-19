import * as React from 'react'
import {
  container,
  titleCol,
  backTitle,
  fullSpan,
  twoCol
} from './project.module.scss'
import { MDXProvider } from '@mdx-js/react'
import ClassicWindow from './classicWindow'
import { FlexContainer, HalfWidth, ThirdWidth, TwoThirdsWidth } from './post'
import { Link } from 'gatsby'

// eslint-disable-next-line react/prop-types
export const Project = ({ frontmatter, prev, next, children }) => {
  if (!frontmatter) return null

  return (
        <div className={container}>
            <div className={backTitle}><h1><Link to={'/work'}>&#8592; Work</Link></h1></div>
            <div className={titleCol}><h1>{frontmatter.title}</h1></div>
            <div className={fullSpan}>
                <br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/><br/>
                <br/>
                <br/>
                <br/>
                <hr/>
            </div>
            <TwoCol>
                <h6>{frontmatter.date}</h6>
                <h6>{frontmatter.tech}</h6>
            </TwoCol>
            <h6>{frontmatter.info}</h6>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
        </div>
  )
}

const TwoCol = ({ children }) => {
  return (<div className={twoCol}> { children }</div>)
}
