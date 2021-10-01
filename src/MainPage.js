
import edIcon from './assets/images/edIcon.svg'
import faceIcon from './assets/images/faceIcon.svg'
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import up from './assets/images/up.svg'
import contactIcon from './assets/images/contactIcon.svg'
import userIcon from './assets/images/userIcon.svg'
import portfolioIcon from './assets/images/portfolioIcon.svg'
import { useEffect, useState } from 'react'
import Skills from './Skills'
import MoreProjects from './MoreProjects'
import Footer from './Footer'


export let MainPage = function () {

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
        <section id="main">
            <header >
                <img id="edIcon" src={edIcon} alt="" />
                <div id="solarPanel" className="flex">
                    <a href="#about" title="About" className="centered">
                        <img src={userIcon} alt="about link" />
                    </a>
                    <a href="#projects" title="Projects" className="centered">
                        <img id="project-img" src={portfolioIcon} alt="projects link" />
                    </a>
                    <a href="#contact" title="Contact" className="centered">
                        <img src={contactIcon} alt="contact link" />
                    </a>
                </div>
            </header>
            <div id="calcScreen" className="centered">
                <div className="calcText centered">
                    <div>Hi, I'm Edwin</div>
                    <div>You need a fast website that tells your story accurately.</div>
                    <a href="#contact" className="contactref">Contact</a>
                </div>
                <a href="#about" id="pixelated-face" className="top-z-index rotate-hover">
                    <img src={faceIcon} alt="About" />
                </a>
            </div >
            <div className="buttons-place">
                <About />
                <Skills />
                <Projects />
                <MoreProjects />
                <Contact />
                <Footer />
            </div>
            <a href="#main"
                className="up"
                style={{
                    bottom: showUp ? "5vh" : "-10vh",
                    right: "7%"
                }}
            >
                <img
                    alt="beginning" src={up}
                />
            </a>
        </section >
    )
}