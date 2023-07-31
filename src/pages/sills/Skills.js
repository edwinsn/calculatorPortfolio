import React from 'react';
import backendIcon from '../../assets/images/skills/backendIcon.svg'
import frontendIcon from '../../assets/images/skills/frontendIcon.svg'
import designIcon from '../../assets/images/skills/designIcon.svg'
import othersIcon from '../../assets/images/skills/othersIcon.svg'

import { faReact, faHtml5, faCss3Alt, faNodeJs, faAws, faGitAlt } from '@fortawesome/free-brands-svg-icons'

import figmaIcon from '../../assets/images/skills/figma.svg'
import firebaseIcon from '../../assets/images/skills/firebase.svg'
import jestIcon from '../../assets/images/skills/jest.svg'
import reactQueryIcon from '../../assets/images/skills/react-query.svg'
import mongoIcon from '../../assets/images/skills/mongo.svg'
import reduxIcon from '../../assets/images/skills/redux.svg'
import sqlIcon from '../../assets/images/skills/sql.svg'
import gimpIcon from '../../assets/images/skills/gimp.svg'

import './skills.css'
import "./colorSkills.css"
import Skill from './Skill';

let skillsData = [
    {
        name: "Frontend",
        tabIcon: frontendIcon,
        position: '_1',
        icons: [
            { src: faReact, title: "react", className: "iconSkill colorReact" },
            { src: faHtml5, title: "html", className: "iconSkill orange" },
            { src: faCss3Alt, title: "css", className: "iconSkill colorCss" },
            { src: reduxIcon, title: "redux", isImage: true },
            { src: reactQueryIcon, title: "react-query", isImage: true },
        ],
        description: `React, the perfect ingredient for building amazing applications.
        I have a deep love for the reactive philosophy and
        its focus on state-driven components and dynamic
        code updates. This allows for an intuitive and
        user-friendly experience. My technical skills include
        React, HTML, CSS, Redux, and React Query. With
        these tools in my belt, I'm ready to take on any project
        and make it a React-tastic success!`,
    },
    {
        name: "Backend",
        tabIcon: backendIcon,
        position: '_2',
        icons: [
            { src: faNodeJs, title: "nodejs", className: "iconSkill colorReact" },
            { src: sqlIcon, title: "sql", className: "iconSkill orange", isImage: true },
            { src: faAws, title: "aws", className: "iconSkill colorCss" },
            { src: mongoIcon, title: "mondodb", isImage: true },
            { src: firebaseIcon, title: "firebase", isImage: true },
        ],
        description: `Say hello to seamless backend systems! I'm proficient in using
        Node.js, MongoDB, SQL, and AWS to create efficient and
        reliable solutions. My in-depth knowledge of these
        technologies enables me to design and implement secure,
        scalable backend systems that can handle the demands of
        modern applications. So whether you need a system that's
        simple and straightforward or one that's complex and
        powerful, I've got you covered.`
    },
    {
        name: "Design",
        tabIcon: designIcon,
        position: '_3',
        icons: [
            { src: figmaIcon, title: "figma", className: "iconSkill colorReact", isImage: true },
            { src: gimpIcon, title: "GIMP", className: "iconSkill orange", isImage: true },
        ],
        description: `With Figma and GIMP in my toolbox, I bring a playful
        yet professional touch to visual design. Whether it's
        a logo, website, or any other design project, I have
        the skills to turn your ideas into eye-catching,
        user-friendly designs that stand out and make a lasting
        impression.`
    },
    {
        name: "Others",
        tabIcon: othersIcon,
        position: '_4',
        icons: [
            { src: faGitAlt, title: "git", className: "iconSkill colorReact" },
            { src: jestIcon, title: "jest", className: "iconSkill orange", isImage: true },
        ],
        description: `Git and Jest? More like hit and the best! These tools
        are my trusty sidekicks in the wild world of web
        development. With Git, I can easily track my code
        and collaborate with my team. And with Jest, I can
        be confident that my code is not only shiny, but
        also functions like a well-oiled machine.
        Let's just say, I'm ready for any coding adventure
        that comes my way!`
    },
]

export default function Skills() {

    let skillsFormatted = skillsData.map((skill, index) => <Skill key={`skill-${index}`} {...skill} />)

    //reverse the order of the skills
    skillsFormatted = skillsFormatted.reverse()

    return (

        <div id="skills" className='flex-column centered w-90 full-screen' >
            <h2 id='skills-title' className='text-white'>
                Skills
            </h2>

            <div id="skills-list" className='flex centered'>

                {skillsFormatted}

            </div>

        </div>

    )
}   