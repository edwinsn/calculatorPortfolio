import React, { useState } from 'react'
import deployIcon from './assets/images/deployIcon.svg'
import './assets/dropdownlist.css'

export default function DropDownList(props) {

    const [deployed, setDeployed] = useState()
    let items = props.items.map((e, i) => {
        return <li key={i}>{e}</li>
    })


    return (
        <div className="drop-down-list">
            <div
                className="header"
                onClick={() => { setDeployed(!deployed) }}>

                <img src={props.icon} alt="" className="list-icon" />
                <p>{props.title}</p>
                <img src={deployIcon} alt="" className={deployed ? "drop-icon turn" : "drop-icon return"} />
            </div>

            <ul
                className={"items"}
                style={deployed ? { height: 4.4 + "em" } : { height: 0 }}>
                {items}
            </ul>
        </div>
    )
}
