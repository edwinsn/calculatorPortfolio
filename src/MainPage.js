
import edIcon from './assets/images/edIcon.svg'
import faceIcon from './assets/images/faceIcon.svg'
import { About } from './About'
import { Projects } from './Projects'

export let MainPage = function () {

    return (
        <section>
            <header>
                <img className="edIcon" src={edIcon} alt="edwin portfolio" />
                <div className="solarPanel">
                    <div>A</div>
                    <div>P</div>
                    <div>C</div>
                </div>
            </header>
            {/*<progress className="progress progress1" />*/}
            {/*<progress className="progress progress2" />*/}
            <div className="calcScreen">
                <div className="calcText">
                    <div>Hi, I'm Edwin</div>
                    <div>I can solve your problems almost as fast as a calculator, beep.</div>
                </div>
                <img src={faceIcon} className="top-z-index pixelated-face" alt="Edwin pixelated face" />
                <div className="reflex"></div>
            </div>
            <div className="buttons-place">
                <About />
                <Projects />
            </div>
        </section>
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