import * as React from 'react'
import { Link } from 'gatsby'
import {
  container,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle,
    backButton,
    name
} from './layout.module.scss'

const Layout = ({ pageTitle, children }) => {
  return (
        <div className={container}>
            <header className={siteTitle}>

                <h1 style={{ marginTop: 'auto' }}>{pageTitle !== 'Projects' && <Link className={backButton} to={"/"}>&#8592;</Link>} {pageTitle} </h1>
               <h1 className={name}> <Link to="/">Kieran <br></br> Sagar <br></br> Parikh </Link></h1>
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
