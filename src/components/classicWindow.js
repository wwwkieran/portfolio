import * as React from 'react'
import { Link } from 'gatsby'
import {
  window,
  windowHeader,
  windowHeaderButton,
  windowHeaderSpacer,
  windowHeaderText,
  windowContent,
  minimizeButtonInternalOne,
  minimizeButtonInternalTwo,
  resizeButtonInternal
} from './classicWindow.module.scss'
import { PropTypes } from 'prop-types'
import Draggable from 'react-draggable'

const ClassicWindow = ({ windowTitle, children, style, draggable, width, x, y }) => {
  if (draggable === undefined) {
    draggable = true
  }

  if (style === undefined) {
    style = {}
  }

  if (width !== undefined) {
    style.width = width
  }

  if (y !== undefined) {
    style.position = 'absolute'
    style.top = y
  }
  if (x !== undefined) {
    style.position = 'absolute'
    style.left = x
  }

  const inner = (
      <div className={window} style={style} id="window">
          <div className={windowHeader} id="windowHeader">
              <button className={windowHeaderButton} id="closeButton" ></button>
              <div className={windowHeaderSpacer}></div>
              <p className={windowHeaderText}>{windowTitle}</p>
              <div className={windowHeaderSpacer}></div>
              <button className={windowHeaderButton} id="resizeButton" >
                  <div className={resizeButtonInternal}>
                  </div>
              </button>
              <button className={windowHeaderButton} id="minimizeButton" >
                  <div className={minimizeButtonInternalOne}></div>
                  <div className={minimizeButtonInternalTwo}></div>
              </button>
          </div>
          <div className={windowContent} id="windowContent">
              {children}
          </div>
      </div>
  )

  if (draggable) {
    return (<Draggable handle={'#windowHeader'} bounds={'parent'}>
        {inner}
      </Draggable>)
  }

  return inner
}

ClassicWindow.propTypes = {
  windowTitle: PropTypes.node.isOptional,
  children: PropTypes.node.isRequired,
  style: PropTypes.node.isOptional,
  draggable: PropTypes.node.isOptional,
  width: PropTypes.node.isOptional,
  x: PropTypes.node.isOptional,
  y: PropTypes.node.isOptional
}

export default ClassicWindow
