
import githubIcon from './assets/images/githubIcon.svg'
import mailIcon from './assets/images/mailIcon.svg'
import edwinsPhoto from './assets/images/edwinsPhoto.jpg'

export let MainPage = function () {
    return (
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
                <div>
                    <img className="edwinsPhoto" src={edwinsPhoto} alt="Edwin" />
                </div>
            </div>

        </section>

    )
}