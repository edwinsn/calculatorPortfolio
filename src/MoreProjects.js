import React from 'react'
import SecondaryProject from './SecondaryProject'
import './assets/moreprojects.css'
import chessJar from './assets/files/chess.jar'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import groupsImg from './assets/images/groups.jpg'
import arrowIcon from './assets/images/deployIcon.svg'
import csGif from './assets/images/cs.png'
import naGif from './assets/images/na.jpg'


export default function MoreProjects() {
    return (
        <div>
            <p className="title">More Projects</p>
            <Carousel emulateTouch
                infiniteLoop showThumbs={false}
                useKeyboardArrows
                showStatus={false}
                autoPlay={false}
                renderArrowPrev={(handler) => { return <div onClick={handler} className="arrow left centered"><img alt="" src={arrowIcon} /></div> }}
                renderArrowNext={(handler) => { return <div onClick={handler} className="arrow right centered"><img alt="" src={arrowIcon} /></div> }}
            >
                <SecondaryProject name="Chess Game"
                    url={chessJar}
                    img={csGif}
                    githubLink="https://github.com/edwinsn/chess-game"
                    description="Maybe no the most beautiful, but the best move function
                        uses recursion
                         (you  need the java virtual machine to run it."
                />

                <SecondaryProject name="Structures"
                    url="https://structures-8ecpr.ondigitalocean.app/"
                    img={groupsImg}
                    githubLink="https://github.com/edwinsn/groups"
                    description="A site for algebraical structures where you can verify some
                    properties." />
                <SecondaryProject name="NASA Library clone"
                    img={naGif}
                    url="https://edwinsn.github.io/Search-NASA-images/"
                    githubLink="https://github.com/edwinsn/Search-NASA-images"
                    description="This site is a clone of the NASA Multimedia Library for searching
                     multimedia from NASA library." />
            </Carousel>
        </div >
    )
}
