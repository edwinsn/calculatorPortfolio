
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
                <img className="edIcon" src={edIcon} alt="edwin portfolio" />
                <div className="solarPanel">
                    <a href="#about" title="About">
                        <img src={userIcon} />
                    </a>
                    <a href="#projects" title="Projects">
                        <img id="project-img" src={portfolioIcon} />
                    </a>
                    <a href="#contact" title="Contact">
                        <img src={contactIcon} />
                    </a>
                </div>
            </header>
            {/*<progress className="progress progress1" />*/}
            {/*<progress className="progress progress2" />*/}
            <div className="calcScreen" >
                <div className="calcText">
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
                <Projects />
                <Contact />
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

    /*return (
        <section id="main" className="mainPage">
            <header>
                <div className="headerSpace"></div>
                <div className="headerLinks">
                    <a href="#about">About</a>
                    <a href="#projects">Projects</a>
                    <a href="#contact">Contact</a>
                </div>
            </header>
            <div>

                <div className="introduction">
                    <div>
                        <div>
                            <a href="https://github.com/edwinsn" target="_blank" rel="noreferrer">
                                <img alt="github" className="icon" src={githubIcon}></img>
                            </a>
                            <a href="mailto:edwinsanchez750@gmail.com" alt="email" target="_blank" rel="noreferrer">
                                <img alt="mail" className="icon" src={mailIcon}></img>
                            </a>
                        </div>
                        <div>Hi, I'm <span className="name">Edwin Sáchez</span>,<br /> web developer.</div>
                        <div className="presentation" >I think we can make a <span className="yellow">big</span> impact through code.</div>
                        <a href="#contact"><button>Write me</button></a>
                    </div>
                </div>
                
                <div >
                    <img className="edwinsPhoto" src={edwinsPhoto} alt="Edwin" />
                </div>
            </div>

        </section>

    )*/
}