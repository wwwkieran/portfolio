import * as React from 'react'
import { PropTypes } from 'prop-types'
import {
  menuBar,
  menuBarClassic,
  menuBarElement,
  menuBarSpacer,
  menuBarInnerContainer,
  line
} from './menuBar.module.scss'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

const MenuBar = ({ darkmode, buttons }) => {
  let cl = menuBarClassic
  if (darkmode) {
    cl = menuBar
  }
  return (
      <motion.div className={cl} animate={darkmode ? { height: '50px' } : {}} transition={{ duration: 0.5 }}>
        <motion.div className={menuBarInnerContainer} animate={darkmode ? { width: '500px', marginLeft: 'auto', marginRight: 'auto', fontFamily: 'Arial', fontSize: '2em' } : { fontFamily: 'Charcoal, Geneva, sans-serif', fontSize: '1em' }} transition={{ duration: 0.3 }}>
          {/* { darkmode && <hr className={line}/> } */}
          {!darkmode && <div className={menuBarElement} style={{ fontSize: '1.1em', paddingLeft: '10px', color: 'black' }} >&#63743;</div> }
            {
                buttons !== undefined && buttons.map((v) => {
                  return (<Link key={v[1]} className={menuBarElement} to={v[1]} >{v[0]}</Link>)
                })
            }
          {!darkmode && <div className={menuBarSpacer}></div> }
          {!darkmode && <div className={menuBarElement} id="time" style={{ color: 'black' }}><Time/></div>}
          {/* { darkmode && <hr className={line}/> } */}
        </motion.div>
      </motion.div>
  )
}

MenuBar.propTypes = {
  buttons: PropTypes.node.isRequired,
  darkmode: PropTypes.node.isRequired
}

const Time = () => {
  let time = new Date().toLocaleTimeString()

  const [ctime, setTime] = React.useState(time)
  const UpdateTime = () => {
    time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })
    setTime(time)
  }
  setInterval(UpdateTime)
  return <>{ctime}</>
}

export default MenuBar
