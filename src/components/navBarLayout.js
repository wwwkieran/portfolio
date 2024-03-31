import * as React from 'react'
import MenuBar from './menuBar'
import { globalContainer, pageContainer } from './navBarLayout.module.scss'
const NavBarLayout = ({ children }) => {
  return (<div className={globalContainer}>
        <MenuBar buttons={[['Home', '/desktop'], ['Work', '/work'], ['Blog', '/blog'], ['About', '/about'], ['Shop', '/shop']]}/>
        <div className={pageContainer}>{children}</div>
        </div>)
}

export default NavBarLayout
