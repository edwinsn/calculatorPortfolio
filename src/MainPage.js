
import edIcon from './assets/images/edIcon.svg'
import faceIcon from './assets/images/faceIcon.svg'
import { About } from './About'
import { Projects } from './Projects'
import { Contact } from './Contact'
import contactIcon from './assets/images/contactIcon.svg'
import userIcon from './assets/images/userIcon.svg'
import portfolioIcon from './assets/images/portfolioIcon.svg'
import Skills from './Skills'
import MoreProjects from './MoreProjects'
import Footer from './Footer'
import Up from './Up'


export let MainPage = function () {

    return (
        <section id="main">
            <header >
                <img id="edIcon" className="apear" src={edIcon} alt="" />
                <div id="solarPanel" className="flex get-down">
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
            <div id="calcScreen" className="get-up">
                <div className="calcText">
                    <div>Hi, I'm Edwin</div>
                    <div>You need a fast website that tells your story accurately.</div>
                    <a href="#contact" className="contactref">Contact</a>
                </div>
                <a href="#about" id="pixelated-face" className="top-z-index rotate-hover centered ">
                    <img src={faceIcon} alt="About" />
                </a>
            </div >
            <div className="buttons-place get-fastly-up">
                <About />
                <Skills />
                <Projects />
                <MoreProjects />
                <Contact />
                <Footer />
            </div>
            <Up />
        </section >
    )
}