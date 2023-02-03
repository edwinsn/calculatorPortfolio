import animal1 from '../../assets/images/projects/animal1.png'
import animal2 from '../../assets/images/projects/animal2.png'
import animal3 from '../../assets/images/projects/animal3.png'
import animal4 from '../../assets/images/projects/animal4.png'
import chainy1 from '../../assets/images/projects/chainy1.png'
import chainy2 from '../../assets/images/projects/chainy2.png'
import chainy3 from '../../assets/images/projects/chainy3.png'
import chainy4 from '../../assets/images/projects/chainy4.png'
import chess1 from '../../assets/images/projects/chess1.png'
import chess2 from '../../assets/images/projects/chess2.png'
import chess3 from '../../assets/images/projects/chess3.png'
import chess4 from '../../assets/images/projects/chess4.png'
import meal1 from '../../assets/images/projects/meal1.png'
import meal2 from '../../assets/images/projects/meal1.png'
import meal3 from '../../assets/images/projects/meal1.png'
import purchase1 from '../../assets/images/projects/purchase1.png'
import purchase2 from '../../assets/images/projects/purchase2.png'
import root1 from  '../../assets/images/projects/root1.png'
import root2 from  '../../assets/images/projects/root2.png'
import root3 from  '../../assets/images/projects/root3.png'
import root4 from  '../../assets/images/projects/root4.png'
import paIcon from '../../assets/images/paIcon.svg'

import './projects.css'
//import HorizontalScroll from 'react-scroll-horizontal'
import { ProjectsSection } from './components/ProjectsSecation'


export let Projects = function () {

    let projects = [
        {
            tittle: "Chainy Link",
            description: "Share the good stuff with one link",
            shortDescription: "Share the good stuff with one link",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [chainy1, chainy2, chainy3, chainy4],
            icon: paIcon,
            backgroundColor: '#EBEEFB',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Meal prep",
            description: "A fresh and fun redesign of the meal prep page",
            shortDescription: "A fresh and fun redesign of the meal prep page",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [meal1, meal2, meal3],
            icon: paIcon,
            backgroundColor: '#F1F5FD',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Requio",
            description: "Securely manage expenses with this web app",
            shortDescription: "Securely manage expenses with this web",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [purchase1, purchase2],
            icon: paIcon,
            backgroundColor: '#D5F2C7',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Animalcoords",
            description: "Help stray animals with just a few clicks",
            shortDescription: "Help stray animals with a few clicks",
            href: "https://petfinder-b4ec4.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [animal1, animal2, animal3, animal4],
            icon: paIcon,
            backgroundColor: '#F2EFE8',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }, {
            tittle: "Root planner",
            description: "Plan and manage routes like a boss with this system.",
            shortDescription: "Plan and manage routes with this system",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [root1, root2, root3, root4],
            icon: paIcon,
            backgroundColor: '#FAFAFA',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Chess",
            description: "A classic chess game and an AI opponent",
            shortDescription: "A chess game and an AI opponent",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [chess1, chess2, chess3, chess4],
            icon: paIcon,
            backgroundColor: '#B05325',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }
    ]

    /*const child = { width: `100vw`, height: `100vh`, border: '1px solid green' }
    const childLast = { width: `100vw`, height: `100vh`, border: '1px solid green', overflow: 'scroll' }
    const parent = { width: `100vw`, height: `100vh`, border: '1px solid red' }*/

    return (
        <div>
            {/*<HorizontalScroll
            style={parent}
            reverseScroll
            >*/}
            <ProjectsSection projects={projects.slice(0, 2)}
                tittle="Trustful interfaces"
                description="We can generate trust and an uniqueness feeling building intuitive, fast, beautiful and responsive intefaces."
                tags={["React", 'Css', 'Html']}
            />
            <ProjectsSection projects={projects.slice(2, 4)}
                tittle="Secure systems"
                description="If it is online it will be attacked, we can secure our systems with data encryption, authentication policies, certified data access among other techniques."
                tags={["Privacy", 'Encryption', 'Hashing']}
            />
            <ProjectsSection projects={projects.slice(4, 6)}
                tittle="Handdle complexity"
                description="If it is online it will be attacked, we can secure our systems with data encryption, authentication policies, certified data access among other techniques."
                tags={["Javascript", 'Java', 'A.I.']}
            />
        </div>
    )
    /*</HorizontalScroll>*/

}