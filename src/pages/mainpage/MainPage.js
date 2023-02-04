
import edIcon from '../../assets/images/edIcon.svg'
import faceIcon from '../../assets/images/faceIcon.png'
import { About } from '../about/About'
import { Projects } from '../projects/Projects'
import { Contact } from '../contact/Contact'
import contactIcon from '../../assets/images/contactIcon.svg'
import userIcon from '../../assets/images/userIcon.svg'
import portfolioIcon from '../../assets/images/portfolioIcon.svg'
import Skills from '../sills/Skills'
import Footer from '../footer/Footer'
import Up from '../components/Up'
import './mainPage.css'


export let MainPage = function () {

    return (
        <section id="main">
            <header >
                <img id="edIcon" className="apear" src={edIcon} alt="" />
                <div id="solarPanel" className="flex get-down">
                    <a href="#about" title="About" className="centered grow-on-hover">
                        <img src={userIcon} alt="about link" />
                    </a>
                    <a href="#projects" title="Projects" className="centered grow-on-hover">
                        <img id="project-img" src={portfolioIcon} alt="projects link" />
                    </a>
                    <a href="#contact" title="Contact" className="centered grow-on-hover">
                        <img src={contactIcon} alt="contact link" />
                    </a>
                </div>
            </header>
            <div id="calcScreen" className="get-up">
                <div className="calcText">
                    <div>Hi, I'm Edwin</div>
                    <div>Creative web developer</div>
                    <a href="#contact" className="contactref">Contact</a>
                </div>
                <a href="#about" id="pixelated-face" className="top-z-index rotate-hover centered ">
                    <div>
                        <img src={faceIcon} alt="About" />
                    </div>
                </a>
            </div>
            <div className="buttons-place get-fastly-up">
                <About />
            </div>
            <Skills />
            <Projects />
            <Contact />
            <Footer />
            <Up />
        </section>
    )
}