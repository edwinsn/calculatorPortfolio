import paGif from './assets/images/pa.gif'
import mcGif from './assets/images/mc.gif'
import paIcon from './assets/images/paIcon.svg'
import mcIcon from './assets/images/mcIcon.svg'
import './assets/projects.css'

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

        </div>
    )

}