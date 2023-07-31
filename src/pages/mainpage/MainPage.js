
import faceIcon from '../../assets/images/faceIcon.png'
import { About } from '../about/About'
import { Projects } from '../projects/Projects'
import { Contact } from '../contact/Contact'
import Skills from '../sills/Skills'
import Footer from '../footer/Footer'
import Up from '../components/Up'
import ShowUp from '../components/ShowUp'
import './mainPage.css'
import Nav from '../Nav'


export let MainPage = function () {

    return (
        <section id="main">
            <Nav />
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
            <ShowUp className='w-100 flex justify-center ' isSlow={false}>
                <Skills />
            </ShowUp>
            <Projects />
            <ShowUp className='w-100 flex justify-center ' isSlow={false}>
                <Contact />
            </ShowUp>
            <Footer />
            <Up />
        </section>
    )
}