import naGif from './assets/images/na.gif'
import paGif from './assets/images/pa.gif'
import mcGif from './assets/images/mc.gif'
import csGif from './assets/images/cs.gif'
import paIcon from './assets/images/paIcon.svg'
import mcIcon from './assets/images/mcIcon.svg'
import chessJar from './assets/files/chess.jar'
import './assets/projects.css'
import { CalcBtn } from './CalcBtn'
import Project from './Project'


export let Projects = function () {

    return (
        <div className="projects" id="projects">
            <p className="title">Some of my Projects</p>

            <Project title="Animalcoords"
                description="If you have ever rescued an animal from the street, you will know what
                        loyalty and gratitude are. This application allows you to report where
                        you saw a stray animal, how often and lets you even upload a picture of it, so you can find it if you want to feed or
                        adopt it."
                href="http://animalcoords.com"
                imgSrc={mcGif}
                icon={mcIcon}
                repo="https://github.com/edwinsn/petfinder"
            />

            <Project title="Purchase Analisis"
                description="Throughout the month we usually spend our money according to what
                        is needed at the moment and by the end, we don't
                        remember if all our purchases were smart or really necessary.
                        This app lets you organize your purchase data in one site and shows you some
                        histograms so you can know how you are spending your money."
                href="https://purchase-analysis-23370.web.app/"
                imgSrc={paGif}
                icon={paIcon}
                repo="https://github.com/edwinsn/purchase-analysis"
            />

            <div >
                <div>
                    <a className="title" href="https://edwinsn.github.io/Search-NASA-images/" rel="noreferrer" target="_blank">NASA Multimedia Library clone</a>
                    <p className="description">This small application is a clone of the NASA Multimedia Library,
                        it allows you to search,  setting a time interval,  for images or audio from NASA, besides it shows you a description of the entry you select.</p>
                </div>
                <CalcBtn
                    img={naGif}
                    href="https://edwinsn.github.io/Search-NASA-images/"
                    alt={"a gif of the app"} />
            </div>
            <div>
                <div>
                    <a className="title"
                        href="https://edwinsn.github.io/Search-NASA-images/"
                        rel="noreferrer"
                        target="_blank">Chess Game</a>
                    <p className="description">Maybe no the most beautiful but the function
                        that decides the best move for the computer use recursion (you shall need the java virtual machine to run it).
                    </p>
                </div>
                <CalcBtn
                    img={csGif}
                    href={chessJar}
                    alt={"A gif of the chess game "}
                    download={true}
                />


            </div>
        </div>
    )

}