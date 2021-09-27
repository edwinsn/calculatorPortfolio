import { useState } from "react"
import './assets/calc-btn.css'


let handleMove, mouseOut, mouseDown, mouseUp

export let CalcBtn = (props) => {

    const [transform, setTransform] = useState()


    return (
        <a className="project centered"
            draggable={false}
            href={props.href}
            rel="noreferrer"
            target="_blank"
            download={props.download}
        >
            <div style={{ transform }}
                className="calc-btn"
                onMouseMove={(ev) => { handleMove(ev, setTransform) }}
                onMouseOut={() => { mouseOut(setTransform) }}
                onMouseDown={() => { mouseDown(setTransform) }}
                onMouseUp={() => { mouseUp(setTransform) }}>
                <img src={props.img} alt={props.alt} />
            </div>
        </a>
    )
}

handleMove = (e, setTransform) => {

    let height = e.target.clientHeight
    let width = e.target.clientWidth

    const xVal = e.nativeEvent.layerX
    const yVal = e.nativeEvent.layerY


    if (xVal <= width - 12 && 12 <= xVal && yVal <= height - 12 && yVal >= 12) {

        const yRotation = 5 * ((xVal - width / 2) / width)
        const xRotation = -5 * ((yVal - height / 2) / height)

        const transform = 'perspective(500px) scale(1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'
        setTransform(transform)
    }
}


mouseOut = (setTransform) => {
    setTransform('perspective(500px) scale(1) rotateX(0) rotateY(0)')
}

mouseDown = (setTransform) => {
    setTransform('perspective(500px) scale(0.9) rotateX(0) rotateY(0)')
}

mouseUp = (setTransform) => {
    setTransform('perspective(500px) scale(1.1) rotateX(0) rotateY(0)')
}
