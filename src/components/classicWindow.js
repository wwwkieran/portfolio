import * as React from 'react'
import { Link } from 'gatsby'
import { window, windowHeader, windowHeaderButton, windowHeaderSpacer, windowHeaderText, windowContent} from './classicWindow.module.scss'

const ClassicWindow = ({ windowTitle, children }) => {
    return (
        <div className={window} id="window">
            <div className={windowHeader} id="windowHeader">
                <button className={windowHeaderButton} id="closeButton" ></button>
                <div className={windowHeaderSpacer}></div>
                    <p className={windowHeaderText}>{windowTitle}</p>
                    <div className={windowHeaderSpacer}></div>
                    <button className={windowHeaderButton} id="resizeButton" >
                        {/*<div*/}
                        {/*    style="border:none; border-right: 1px solid black; border-bottom: 1px solid black; margin-top: -5px; box-shadow: none; width:6px; height: 6px;">*/}
                        {/*</div>*/}
                    </button>
                    <button className={windowHeaderButton} id="minimizeButton" >
                        {/*<div style="border:none; border-top: 1px solid black; margin-top: 0px; box-shadow: none;"></div>*/}
                        {/*<div style="border:none; border-top: 1px solid black; margin-top: 1px; box-shadow: none;"></div>*/}
                    </button>
            </div>
            <div className={windowContent} id="windowContent">
                {children}
            </div>
        </div>
    )
}

export default ClassicWindow
