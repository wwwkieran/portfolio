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

const MenuBar = ({ loading, darkmode, buttons }) => {
  let cl = menuBarClassic
  if (loading) {
    cl = menuBarLoading
  }
  if (darkmode) {
    cl = menuBar
    if (loading) {
      cl = menuBarLoading
    }
  }
  return (
      <div className={cl}>
          <div className={menuBarElement} style={{ fontSize: '1.1em', paddingLeft: '10px', color: 'black' }} >&#63743;</div>
          {
              buttons !== undefined && buttons.map((v) => {
                return (<Link key={v[1]} className={menuBarElement} to={v[1]} >{v[0]}</Link>)
              })
          }
          <div className={menuBarSpacer}></div>
        {!darkmode && <div className={menuBarElement} id="time" style={{ color: 'black' }}><Time/></div>}
      </div>
  )
}

MenuBar.propTypes = {
  buttons: PropTypes.node.isRequired
}

const Time = () =>{
  let time  = new Date().toLocaleTimeString()

  const [ctime,setTime] = React.useState(time)
  const UpdateTime=()=>{
    time =  new Date().toLocaleTimeString('en-US', {hour: "numeric", minute: "2-digit", hour12: true})
    setTime(time)
  }
  setInterval(UpdateTime)
  return <>{ctime}</>
}

export default MenuBar
