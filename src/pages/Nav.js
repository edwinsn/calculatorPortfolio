import React from 'react'
import contactIcon from './../assets/images/contactIcon.svg'
import userIcon from './../assets/images/userIcon.svg'
import portfolioIcon from './../assets/images/portfolioIcon.svg'
import edIcon from './../assets/images/edIcon.svg'

export default function Nav() {
    return (
        <header>
            <a target='_blank' rel="noopener noreferrer" href='https://www.linkedin.com/in/edwinsn/'>
                <img id="edIcon" className="apear" src={edIcon} alt="" />
            </a>
            <div id="solarPanel" className="flex get-down">
                <a href="#about" title="About" className="centered">
                    <img src={userIcon} alt="about link" />
                </a>
                <a href="#projects" title="Projects" className="centered">
                    <img id="project-img" src={portfolioIcon} alt="projects link" />
                </a>
                <a href="#contact" title="Contact" className="centered grow-">
                    <img src={contactIcon} alt="contact link" />
                </a>
            </div>
        </header>
    )
}
