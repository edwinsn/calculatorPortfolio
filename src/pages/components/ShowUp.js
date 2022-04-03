import React, { useRef, useState } from 'react'
import useOnScreen from './useOnScreen'
import './show-up.css'

export default function ShowUp({ children, className }) {

    const aboutRef = useRef()
    useOnScreen(aboutRef, () => { setGetUp(true) })
    const [getUp, setGetUp] = useState(false)

    return (
        <div className={getUp ? `${className} as-big-as-parent showup-container get-slowly-up` : `${className} as-big-as-parent showup-container transparent`}>
            {children}
            <div
                ref={aboutRef}
                className="show-up-trigger">
            </div>
        </div>
    )
}
