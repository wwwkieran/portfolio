import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
        <div className={container}>
            <header className={siteTitle}>
                <h1 style={{ marginTop: 'auto' }}> {pageTitle} </h1>
               <h1 style={{ color: 'lightgray', marginTop: 'auto', marginLeft: 'auto', textAlign: 'right' }}>Kieran <br></br> Sagar <br></br> Parikh </h1>
                {/* <br></br> */}
            {/*    <nav> */}
            {/*    <ul className={navLinks}> */}
            {/*        <li className={navLinkItem}><Link to="/" className={navLinkText}>Projects</Link></li> */}
            {/*        <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li> */}
            {/*        <li className={navLinkItem}><Link to="https://kieran.lol" className={navLinkText}>Links</Link></li> */}
            {/*    </ul> */}
            {/* </nav> */}
            </header>
            <main>
                {children}
            </main>
        </div>
  )
}

export default Layout
