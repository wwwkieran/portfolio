import * as React from 'react'
import { Link } from 'gatsby'
import { window, windowHeader, windowHeaderButton, windowHeaderSpacer, windowHeaderText, windowContent, minimizeButtonInternalOne, minimizeButtonInternalTwo, resizeButtonInternal } from './classicWindow.module.scss'

const ClassicWindow = ({ windowTitle, children }) => {
  return (
        <div className={window} id="window">
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
}

export default ClassicWindow
