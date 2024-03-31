import * as React from 'react'
import { PropTypes } from 'prop-types'
import {
  menuBar,
  menuBarClassic,
  menuBarLoading,
  menuBarElement,
  menuBarSpacer
} from './menuBar.module.scss'
import { Link } from 'gatsby'

const MenuBar = ({ buttons }) => {
  return (
      <div className={menuBarClassic}>
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

export default MenuBar
