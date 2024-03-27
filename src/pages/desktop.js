import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'

const DesktopPage = () => {
  return (
     <>
         <ClassicWindow windowTitle={'Introduction'} width={'40%'} y={'100px'}>
             <h1>Hi, I’m Kieran!</h1>
             <br/>
             <br/>
             I’m a software engineer and digital artist based in NYC, interested in the future of digital creativity tools.

         </ClassicWindow>
     </>
  )
}

export const Head = () => <><Seo title="Projects" /><style>{'body { background-color: #9899CC; }'}</style></>

export default DesktopPage
