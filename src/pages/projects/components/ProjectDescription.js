import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesUp } from '@cseitz/icons-duotone';
import { ReactComponent as GithubLinkIcon } from '../../../assets/images/githubprojectLink.svg';
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
    color
}) {

    const { width } = useWindowDimensions()
    const [isHovered, setIsHovered] = React.useState(false)
    const issmallView = width < 950;

    const style = {
        color,
        textDecoration: 'none',
    }

    return (
        <div
            style={style}
            className="project-body column centered"
        >
            <FontAwesomeIcon
                icon={faAnglesUp}
                className={`deploy-project-description cursor-pointer ${!open ? 'down' : ''}`}
                onClick={() => setOpen(prev => !prev)}
            />
            <div className='tittle-section centered'>
                <a
                    className='project-tittle'
                    href={href}
                    style={style}
                    target='_blank'
                    rel="noreferrer noopener"
                >
                    {tittle}
                </a>
                <img src={icon} alt='' className='project-icon' />
            </div>
            <div className='description-actions column centered'>
                {
                    !open && <>
                        {!issmallView && <p className='text-centered project-description' >{description}</p>}
                        {issmallView && <p className='text-centered project-description' >{shortDescription}</p>}
                        <div className='project-actions flex'>
                            <a href={href}
                                className='project-link-icon'
                                target="_blank"
                                style={{ ...color && { background: color } }}
                                rel="noreferrer">
                                <img src={linkIcon} alt='' />
                            </a>
                            <a
                                href={githubLink}
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                                className="project-github-link"
                                target="_blank"
                                style={{
                                    ...color && { borderColor: color },
                                    ...color && isHovered && { background: color }
                                }}
                                rel="noreferrer">
                                <GithubLinkIcon stroke={color || "#1D4F97"} style={{ height: '100%' }} />
                            </a>
                        </div>
                    </>
                }
            </div>


        </div>
    )
}
