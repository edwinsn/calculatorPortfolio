import React from 'react'
import mailIcon from '../../assets/images/mailIconBlue.svg'
import tIcon from '../../assets/images/tIcon.svg'
import linkedinIcon from '../../assets/images/linkedinIcon.svg'
import githubIcon from '../../assets/images/githubIcon.svg'
import './footer.css'

export default function Footer() {
    return (
        <div id="footer-container" className='w-70'>
            <hr />
            <p className="centered">You can reach me in:</p>
            <div id="links" className="centered mb-2">
                <a href="https://www.linkedin.com/in/edwinsn/"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="linkedin profile">
                    <img src={linkedinIcon} alt="" />
                </a>
                <a href="https://t.me/edwincoder"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="telegram link">
                    <img src={tIcon} alt="" />
                </a>
                <a href="mailto:edwinsanchez750@gmail.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="email">
                    <img src={mailIcon} alt="" />
                </a>
                <a href="https://github.com/edwinsn"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="github profile">
                    <img src={githubIcon} alt="" />
                </a>
            </div>
        </div>
    )
}
