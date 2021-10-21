import React from 'react'
import { CalcBtn } from './CalcBtn'
import githubLink from './assets/images/githubLink.svg'
import goto from './assets/images/goto.svg'
import ShowUp from './ShowUp'

export default function Project(props) {
    return (
        <ShowUp>
            <div>
                <div className="flex">
                    <a className="subtitle"
                        href={props.href}
                        rel="noreferrer"
                        target="_blank">
                        {props.title}</a>
                    <img src={props.icon} alt="" className="project-icon" />
                </div>
                <p className="description">
                    {props.description}</p>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.repo}>
                    <img src={githubLink} className="project-btn" alt="repository link" /></a>
                <a
                    target="_blank"
                    rel="noreferrer"
                    href={props.href}>
                    <img src={goto} className="project-btn" alt="live project" />
                </a>
            </div>

            <CalcBtn
                img={props.imgSrc}
                alt={props.alt}
                href={props.href}
            />

        </ShowUp>
    )
}
