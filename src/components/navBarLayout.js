import * as React from 'react'
import MenuBar from './menuBar'
import { globalContainer, pageContainer } from './navBarLayout.module.scss'
import { AnimatePresence } from 'framer-motion'

const NavBarLayout = ({ children }) => {
  return (<div className={globalContainer}>
        <MenuBar buttons={[['Home', '/desktop'], ['Work', '/work'], ['Blog', '/blog'], ['About', '/about'], ['Shop', '/shop']]}/>
      <div className={pageContainer}><AnimatePresence mode={'wait'}>{children}</AnimatePresence></div>
        </div>)
}

export default NavBarLayout
