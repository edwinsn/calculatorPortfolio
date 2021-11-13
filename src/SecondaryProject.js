import React from 'react'
import './assets/secondaryproject.css'
import githubIcon from './assets/images/githubLink.svg'
import gotoIcon from './assets/images/goto.svg'

export default function SecondaryProject(props) {

    let { name, img, url, description, githubLink } = props

    return (
        <div
            className="secondary-project flex">

            <a href={url}
                target="_blank"
                rel="noreferrer"
            >
                <img src={img} alt={name} />
            </a>
            <div className="column project-decription centered">
                <span className="secondary-projec-title">{name}</span>
                <p>{description}</p>
                <div className="flex centered">
                    {githubLink&&<a href={githubLink} target="_blank" rel="noreferrer">
                        <button><img src={githubIcon} alt="github link" /></button>
                    </a>}
                    <a href={url} target="_blank" rel="noreferrer">
                        <button><img src={gotoIcon} alt="live version" /></button>
                    </a>
                </div>
            </div>

        </div>
    )
}
