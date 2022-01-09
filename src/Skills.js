import React from 'react'
import DropDownList from './DropDownList'
import backendIcon from './assets/images/backendIcon.svg'
import frontendIcon from './assets/images/frontendIcon.svg'
import designIcon from './assets/images/designIcon.svg'
import othersIcon from './assets/images/othersIcon.svg'
import './assets/skills.css'
import ShowUp from './ShowUp'

export default function Skills() {
    return (
        <ShowUp>
            <p className="title">My Skills</p>
            <div id="skills" className="centered wrap">
                <div>
                    <DropDownList title="Frontend" icon={frontendIcon} items={["React", "Html", "Css", "Redux", "Styled-componets"]} />
                    <DropDownList title="Backend" icon={backendIcon} items={["Nodejs", "Express", "MongoDb"]} />
                </div>
                <div>
                    <DropDownList title="Design" icon={designIcon} items={["UI design", "Figma"]} />
                    <DropDownList title="Others" icon={othersIcon} items={["Git", "Jest", "Firebase"]} />
                </div>
            </div>
        </ShowUp>
    )
}