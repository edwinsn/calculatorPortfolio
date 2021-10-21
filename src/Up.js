import React from 'react'
import { useEffect, useState } from 'react'
import upIcon from './assets/images/up.svg'

export default function Up() {

    const [showUp, setShowUp] = useState(false)

    useEffect(() => {
        window.onscroll = () => {
            if ((window.pageYOffset || document.documentElement.scrollTop) > 600) {
                setShowUp(true)
            }
            else {
                setShowUp(false)
            }
        }
    }, [])

    return (
        <a href="#main"
            className="up"
            style={{
                bottom: showUp ? "5vh" : "-10vh",
                right: "7%"
            }}
        >
            <img
                alt="beginning" src={upIcon}
            />
        </a>
    )
}
