import React, { useRef, useState } from 'react'
import useOnScreen from './useOnScreen'
import './assets/show-up.css'

export default function ShowUp({ children }) {

    const aboutRef = useRef()
    useOnScreen(aboutRef, () => { setGetUp(true) })
    const [getUp, setGetUp] = useState(false)

    return (
        <div className={getUp ? "as-big-as-parent showup-container get-slowly-up" : "as-big-as-parent showup-container transparent"}>
            {children}
            <div
                ref={aboutRef}
                className="show-up-trigger">
            </div>
        </div>
    )
}
