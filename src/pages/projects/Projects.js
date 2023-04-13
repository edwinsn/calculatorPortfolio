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
import billing_portal1 from '../../assets/images/projects/billing_portal_1.png'
import billing_portal2 from '../../assets/images/projects/billing_portal_2.png'
import billing_portal3 from '../../assets/images/projects/billing_portal_3.png'
import billing_portal4 from '../../assets/images/projects/billing_portal_4.png'
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
import billingIcon from '../../assets/images/projects/icons/billing_dashboard.svg'
import chessBackground from '../../assets/images/testuraChess.jpeg'
import ShowUp from '../components/ShowUp'

import { ProjectsSection } from './components/ProjectsSecation'


export let Projects = function () {

    let projects = [
        {
            tittle: "Chainy Link",
            description: "Share the good stuff with one link",
            shortDescription: "Share the good stuff with one link",
            href: "https://chainylink.com/",
            githubLink: "https://github.com/edwinsn/chainyLink",
            imgs: [chainy1, chainy2, chainy3, chainy4],
            icon: chainyIcon,
            background: '#EBEFFB',
            secondaryBackground: '#EBEFFB',
            color: ''
        },
        {
            tittle: "Billing portal",
            description: "Dashboard for customers and billing management",
            shortDescription: "Dashboard for customers and billing management",
            href: "https://wakeful-client-523.notion.site/Sprwt-dashboard-e87a190b583a4ddc932266de2868a767",
            githubLink: "https://github.com/edwinsn",
            imgs: [billing_portal1, billing_portal2, billing_portal3, billing_portal4],
            icon: billingIcon,
            background: '#F1F5FE',
            secondaryBackground: '#F1F5FE',
            color: '#428b68'
        },
        {
            tittle: "ExpensesEyes",
            description: "Money gone missing? This web app will solve the mystery",
            shortDescription: "Money gone missing? This web app will solve the mystery",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [purchase1, purchase2],
            icon: expensesEyesIcon,
            background: '#D5F2C6',
            secondaryBackground: '#D5F2C6',
            color: '#294519'
        },
        {
            tittle: "Animalcoords",
            description: "Help stray animals with just a few clicks",
            shortDescription: "Help stray animals with a few clicks",
            href: "https://petfinder-b4ec4.web.app/",
            githubLink: "https://github.com/edwinsn/petfinder",
            imgs: [animal1, animal2, animal3, animal4],
            icon: animalIcon,
            background: '#F2EFE7',
            secondaryBackground: '#F2EFE7',
            color: '#73684B'
        }, {
            tittle: "Root planner",
            description: "Plan and manage routes like a boss with this system.",
            shortDescription: "Plan and manage routes with this system",
            href: "https://rootplanner.io/",
            githubLink: "https://github.com/edwinsn",
            imgs: [root1, root2, root3, root4],
            icon: rootIcon,
            background: '#FFFFFF',
            secondaryBackground: '#FEFEFE',
            color: '#1D4F97'
        },
        {
            tittle: "Chess",
            description: "A classic chess game and an AI opponent",
            shortDescription: "A chess game and an AI opponent",
            href: 'https://wakeful-client-523.notion.site/Chess-app-f94792cd765c4492a4b856a44fc1122d',
            githubLink: "https://github.com/edwinsn/chess-game",
            imgs: [chess1, chess2, chess3, chess4],
            icon: chessIcon,
            backgroundImage: chessBackground,
            secondaryBackground: chessBackground,
            repo: "https://github.com/edwinsn/purchase-analysis",
            color: '#6E4E2B'
        }
    ]


    return (
        <div id='projects'>
            <ShowUp className='w-100 flex justify-center ' isSlow={false}>
                <ProjectsSection projects={projects.slice(0, 2)}
                    tittle="Trustful interfaces"
                    description="We can generate trust and an uniqueness feeling building intuitive, fast, beautiful and responsive intefaces."
                    tags={["React", 'Css', 'Html']}
                />
            </ShowUp>
            <ShowUp className='w-100 flex justify-center ' isSlow={false}>
                <ProjectsSection projects={projects.slice(2, 4)}
                    tittle="Secure systems"
                    description="If it is online it will be attacked, we can secure our systems with data encryption, authentication policies, certified data access among other techniques."
                    tags={["Privacy", 'Encryption', 'Hashing']}
                />
            </ShowUp>
            <ShowUp className='w-100 flex justify-center ' isSlow={false}>
                <ProjectsSection projects={projects.slice(4, 6)}
                    tittle="Handdle complexity"
                    description="Today’s word may be complex, but with the right tools and vision, we can handle it with ease"
                    tags={["Javascript", 'Java', 'A.I.']}
                />
            </ShowUp>
        </div>
    )

}