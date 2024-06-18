import * as React from 'react'
import { PropTypes } from 'prop-types'
import {
  menuBar,
  menuBarClassic,
  menuBarElementClassic,
  menuBarSpacer,
  menuBarInnerContainer,
  menuBarElementMinimal,
  line
} from './menuBar.module.scss'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import { determineMaxWidth } from './hooks/determineMaxWidth'

const MenuBar = ({ darkmode, buttons }) => {
  const maxWidth = determineMaxWidth()
  let cl = menuBarClassic
  let ElementClass = menuBarElementClassic
  if (darkmode) {
    cl = menuBar
    ElementClass = menuBarElementMinimal
  }
  return (
      <motion.div className={cl} animate={darkmode
        ? {
            height: 45,
            zIndex: 2,
            paddingTop: 0,
            position: 'sticky',
            top: -12
          }
        : { position: 'relative', top: 2, height: 21, paddingTop: 0 }} transition={{ duration: 0.5 }}>
        <motion.div animate={darkmode
          ? {
              maxWidth,
              marginLeft: 'auto',
              marginRight: 'auto',
              width: '90%',
              position: 'sticky',
              top: 0
            }
          : { width: '100%', maxWidth: '', marginLeft: '0', marginRight: '0', position: 'relative', top: '' }} transition={{ delay: 0.1 }}>
             { darkmode && <motion.hr initial={{ height: 0, marginTop: 0, marginBottom: 0 }} animate={{ height: 1, marginTop: 5, marginBottom: 5 }} exit={{ height: 0, marginTop: 0, marginBottom: 0 }} className={line} /> }
          <motion.div className={menuBarInnerContainer} initial={{ fontFamily: 'Charcoal, Geneva, sans-serif', fontSize: '1em' }} animate={darkmode ? { fontFamily: 'Victor Mono, PT Mono, monospace', fontSize: '1.0em', textTransform: 'uppercase', fontWeight: 800 } : { fontFamily: 'Charcoal, Geneva, sans-serif', fontSize: '1em', textTransform: 'capitalize' }} transition={{ duration: 0.5 }}>
            {!darkmode && <div className={ElementClass} style={{ fontSize: '1.1em', paddingLeft: '10px', color: 'black' }} >&#63743;</div> }
              {
                  buttons !== undefined && buttons.map((v) => {
                    return (<Link key={v[1]} className={ElementClass} to={v[1]} >{v[0]}</Link>)
                  })
              }
            <div className={menuBarSpacer}></div>
            {!darkmode && <div className={ElementClass} id="time" style={{ color: 'black' }}><Time/></div>}
            {darkmode && <div className={ElementClass} id="time" >wwwkieran</div>}
          </motion.div>
            { darkmode && <motion.hr initial={{ height: 0, marginTop: 0, marginBottom: 0 }} animate={{ height: 1, marginTop: 5, marginBottom: 0 }} exit={{ height: 0, marginTop: 0, marginBottom: 0 }} className={line} /> }
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
