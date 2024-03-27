import * as React from 'react'
import { PropTypes } from 'prop-types'
import { menuBar, menuBarElement, menuBarSpacer } from './menuBar.module.scss'
import { Link } from 'gatsby'

const MenuBar = ({ buttons }) => {
  return (
      <div className={menuBar}>
          <div className={menuBarElement} style={{ fontSize: '1.1em', paddingLeft: '10px' }} onTouchStart>&#63743;</div>
          {
              buttons !== undefined && buttons.map((v) => {
                return (<Link className={menuBarElement} to={v[1]} onTouchStart>{v[0]}</Link>)
              })
          }
          <div className={menuBarSpacer}></div>
          <div className={menuBarElement} id="time">5:33 PM</div>
      </div>
  )
}

MenuBar.propTypes = {
  buttons: PropTypes.node.isRequired
}

export const NavBar = () => { return (<MenuBar buttons={[['Home', '/desktop'], ['Work', '/work'], ['Blog', '/blog'], ['About', '/about'], ['Shop', '/shop']]}/>) }

export default MenuBar
