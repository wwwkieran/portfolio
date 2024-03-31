import * as React from 'react'
import Seo from '../components/seo'
import ClassicWindow from '../components/classicWindow'

const DesktopPage = () => {
  return (
      <div style={{ backgroundColor: '#9899CC', position: 'absolute', top: '27px', left: '0px', bottom: '0px', right: '0px', zIndex: '-1' }}>
     <ClassicWindow windowTitle={'Introduction'} width={'400px'} y={'100px'} x={'100px'}>
         <h1>Hi, I’m Kieran!</h1>
         <br/>
         <br/>
         I’m a software engineer and digital artist interested in the future of digital creativity tools.

     </ClassicWindow>
      </div>
  )
}

export const Head = () => <><Seo title="Home" /></>

export default DesktopPage
