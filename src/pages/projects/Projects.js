import paGif from '../../assets/images/pa.gif'
import mcGif from '../../assets/images/mc.gif'
import paIcon from '../../assets/images/paIcon.svg'
import mcIcon from '../../assets/images/mcIcon.svg'
import './projects.css'
import { ProjectsSection } from './components/ProjectsSecation'


export let Projects = function () {

    let projects = [
        {
            tittle: "Meal prep",
            description: "A modern and fresh redesign of the savesolar page, more userfriendly ot impactful.",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [paGif, mcGif, mcIcon],
            icon: paIcon,
            backgroundColor: '#F9FFDC',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Save solar",
            description: "A modern and fresh redesign of the savesolar page, more userfriendly ot impactful.",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [mcGif],
            icon: paIcon,
            backgroundColor: '#F8F8F8',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Requio",
            description: "A web app where you can store secrely your expenses data",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [paGif, mcGif, mcIcon],
            icon: paIcon,
            backgroundColor: '#F9FFDC',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Animalcoords",
            description: "We all can help to stray animals! you cand find and report them here",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [mcGif],
            icon: paIcon,
            backgroundColor: '#F8F8F8',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }, {
            tittle: "Root planner",
            description: "I maintained this powerful system for route planning and managment",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [paGif, mcGif, mcIcon],
            icon: paIcon,
            backgroundColor: '#F9FFDC',
            repo: "https://github.com/edwinsn/purchase-analysis",
        },
        {
            tittle: "Chess",
            description: "A chess game with all its complex rules and movements.",
            shortDescription:"Solar energy landscape redesign",
            href: "https://purchase-analysis-23370.web.app/",
            githubLink: "https://github.com/edwinsn/purchase-analysis",
            imgs: [mcGif],
            icon: paIcon,
            backgroundColor: '#F8F8F8',
            repo: "https://github.com/edwinsn/purchase-analysis",
        }
    ]

    return (
        <>
            <ProjectsSection projects={projects.slice(0, 2)}
                tittle="Trustful interfaces"
                description="We can generate trust and an uniqueness feeling building intuitive, fast, beautiful and responsive intefaces."
                tags={["React", 'Css', 'Html']}
            />
            <ProjectsSection projects={projects.slice(2, 4)}
                tittle="Secure systems"
                description="If it is online it will be attacked, we can secure our systems with data encryption, authentication policies, certified data access among other techniques."
                tags={["React", 'css', 'html']}
            />
            <ProjectsSection projects={projects.slice(4, 6)}
                tittle="Handdle complexity"
                description="If it is online it will be attacked, we can secure our systems with data encryption, authentication policies, certified data access among other techniques."
                tags={["react", 'css', 'html']}
            />
        </>
    )

}