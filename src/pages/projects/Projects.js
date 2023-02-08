import animal1 from '../../assets/images/projects/animal1.jpg'
import animal2 from '../../assets/images/projects/animal2.jpg'
import animal3 from '../../assets/images/projects/animal3.jpg'
import animal4 from '../../assets/images/projects/animal4.jpg'
import chainy1 from '../../assets/images/projects/chainy1.jpg'
import chainy2 from '../../assets/images/projects/chainy2.jpg'
import chainy3 from '../../assets/images/projects/chainy3.jpg'
import chainy4 from '../../assets/images/projects/chainy4.jpg'
import chess1 from '../../assets/images/projects/chess1.jpg'
import chess2 from '../../assets/images/projects/chess2.jpg'
import chess3 from '../../assets/images/projects/chess3.jpg'
import chess4 from '../../assets/images/projects/chess4.jpg'
import meal1 from '../../assets/images/projects/meal1.jpg'
import meal2 from '../../assets/images/projects/meal2.jpg'
import meal3 from '../../assets/images/projects/meal3.jpg'
import purchase1 from '../../assets/images/projects/purchase1.jpg'
import purchase2 from '../../assets/images/projects/purchase2.jpg'
import root1 from '../../assets/images/projects/root1.jpg'
import root2 from '../../assets/images/projects/root2.jpg'
import root3 from '../../assets/images/projects/root3.jpg'
import root4 from '../../assets/images/projects/root4.jpg'
import rootIcon from '../../assets/images/projects/icons/root.svg'
import animalIcon from '../../assets/images/projects/icons/animal.svg'
import chainyIcon from '../../assets/images/projects/icons/chainy.svg'
import chessIcon from '../../assets/images/projects/icons/chess.svg'
import expensesEyesIcon from '../../assets/images/projects/icons/expenseeyes.svg'
import mealIcon from '../../assets/images/projects/icons/meal.svg'

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
            icon: chainyIcon,
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
            icon: mealIcon,
            backgroundColor: '#F1F5FD',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "ExpenseEyes",
            description: "Money gone missing? This web app will solve the mystery",
            shortDescription: "Money gone missing? This web app will solve the mystery",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [purchase1, purchase2],
            icon: expensesEyesIcon,
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
            icon: animalIcon,
            backgroundColor: '#F2EFE8',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }, {
            tittle: "Root planner",
            description: "Plan and manage routes like a boss with this system.",
            shortDescription: "Plan and manage routes with this system",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [root1, root2, root3, root4],
            icon: rootIcon,
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
            icon: chessIcon,
            backgroundColor: '#B05325',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }
    ]


    return (
        <div id='projects'>
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

}