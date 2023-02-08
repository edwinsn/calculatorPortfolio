import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@cseitz/icons-duotone';
import githubLinkIcon from '../../../assets/images/githubprojectLink.svg'
import linkIcon from '../../../assets/images/goto.svg'
import useWindowDimensions from '../../components/useWindowDimensions';


export default function ProjectDescription({
    open,
    setOpen,
    tittle,
    icon,
    description,
    shortDescription,
    href,
    githubLink,
}) {

    const { width } = useWindowDimensions()
    const issmallView = width < 950;

    return (
        <div className="project-body column centered">
            <FontAwesomeIcon
                icon={faAnglesUp}
                className={`deploy-project-description cursor-pointer ${!open ? 'down' : ''}`}
                onClick={() => setOpen(prev => !prev)}
            />
            <div className='tittle-section centered'>
                <span className='project-tittle'>
                    {tittle}
                </span>
                <img src={icon} alt='' className='project-icon' />
            </div>
            <div className='description-actions column centered'>
                {!issmallView && <p className='text-centered project-description' >{description}</p>}
                {issmallView && <p className='text-centered project-description' >{shortDescription}</p>}
                <div className='project-actions flex'>
                    <a href={href}
                        className='project-link-icon'
                        target="_blank"
                        rel="noreferrer">
                        <img src={linkIcon} alt='' />
                    </a>
                    <a href={githubLink}
                        className="project-github-link"
                        target="_blank"
                        rel="noreferrer">
                        <img src={githubLinkIcon} alt='' />
                    </a>
                </div>
            </div>


        </div>
    )
}
