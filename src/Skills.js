import React from 'react'
import DropDownList from './DropDownList'
import backendIcon from './assets/images/backendIcon.svg'
import frontendIcon from './assets/images/frontendIcon.svg'
import designIcon from './assets/images/designIcon.svg'
import othersIcon from './assets/images/othersIcon.svg'
import './assets/skills.css'

export default function Skills() {
    return (
        <div>
            <p className="title">My Skills</p>
            <div id="skills">
                <div>
                    <DropDownList title="Frontend" icon={frontendIcon} items={["React", "Html", "css", "redux"]} />
                    <DropDownList title="Backend" icon={backendIcon} items={["Node", "express", "MongoDb"]} />
                </div>
                <div>
                    <DropDownList title="Design" icon={designIcon} items={["Figma"]} />
                    <DropDownList title="Others" icon={othersIcon} items={["Jest", "Git"]} />
                </div>
            </div>
        </div>
    )
}