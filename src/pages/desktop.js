import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'
import { NavBar } from '../components/menuBar'

const DesktopPage = () => {
  return (
      <>
      <NavBar/>
         <ClassicWindow windowTitle={'Introduction'} width={'40%'} x={'100px'}>
             <h1>Hi, I’m Kieran!</h1>
             <br/>
             <br/>
             I’m a software engineer and digital artist interested in the future of digital creativity tools.

         </ClassicWindow>
     </>
  )
}

export const Head = () => <><Seo title="Projects" /><style>{'body { background-color: #9899CC; }'}</style></>

export default DesktopPage
