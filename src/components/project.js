import * as React from 'react'
import {
  container,
  titleCol,
  backTitle,
  fullSpan,
  twoCol,
  fullPageImage,
  scrollDownIndicator
} from './project.module.scss'
import { MDXProvider } from '@mdx-js/react'
import ClassicWindow from './classicWindow'
import { FlexContainer, HalfWidth, ThirdWidth, TwoThirdsWidth } from './post'
import { Link } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { useEffect, useState } from 'react'

// eslint-disable-next-line react/prop-types
export const Project = ({ frontmatter, prev, next, children }) => {
  if (!frontmatter) return null

  const [scrollOpacity, setScrollOpacity] = useState(1)

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 200
      const scrollY = window.scrollY
      const newOpacity = Math.max(0, 1 - scrollY / maxScroll)
      setScrollOpacity(newOpacity)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
      <div id="fuckyou">
          <div>
              <GatsbyImage alt={frontmatter.title} imgClassName={fullPageImage} className={fullPageImage}
                           image={getImage(frontmatter.hero_image)}/>
              <div className={scrollDownIndicator} style={{ opacity: scrollOpacity }}></div>
          </div>
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
      </div>
  )
}

const TwoCol = ({ children }) => {
  return (<div className={twoCol}> {children}</div>)
}
