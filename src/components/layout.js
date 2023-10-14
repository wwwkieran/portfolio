import * as React from 'react'
import { Link} from 'gatsby'
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
                <h1>Kieran <br></br> Sagar <br></br> Parikh </h1>
                {/*<h2> {pageTitle} </h2>*/}
                <br></br>
                <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}><Link to="/" className={navLinkText}>Projects</Link></li>
                    <li className={navLinkItem}><Link to="/about" className={navLinkText}>About</Link></li>
                    <li className={navLinkItem}><Link to="https://kieran.lol" className={navLinkText}>Links</Link></li>
                </ul>
            </nav>
            </header>
            <main>
                {children}
            </main>
        </div>
    )
}

export default Layout