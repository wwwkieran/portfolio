import * as React from 'react'
import { PropTypes } from 'prop-types'
import {
  menuBar,
  menuBarClassic,
  menuBarElementClassic,
  menuBarSpacer,
  menuBarInnerContainer,
  menuBarElementMinimal
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
      <motion.div className={cl} animate={darkmode ? { height: '80px' } : {}} transition={{ duration: 0.5 }}>
        <motion.div animate={darkmode ? { maxWidth, marginLeft: 'auto', marginRight: 'auto', width: '90%', borderTop: '1px solid white', borderBottom: '1px solid white', borderLeft: '0', borderRight: '0', borderColor: 'white' } : { width: '100%', maxWidth: '', marginLeft: '', marginRight: '' }}>
           {/* { darkmode && <hr className={line}/> } */}
          <motion.div className={menuBarInnerContainer} initial={{ fontFamily: 'Charcoal, Geneva, sans-serif', fontSize: '1em' }} animate={darkmode ? { fontFamily: 'Arial', fontSize: '1.7em', textTransform: 'uppercase', fontWeight: 600 } : { fontFamily: 'Charcoal, Geneva, sans-serif', fontSize: '1em', textTransform: 'capitalize' }} transition={{ duration: 0.3 }}>
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
