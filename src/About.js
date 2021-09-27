import gitHub from './assets/images/githubIcon.svg'
import mailIcon from './assets/images/mailIcon.svg'
import cv from "./assets/files/Edwin'sCV(web developer).pdf"
import { useState } from 'react'
import cvIcon from './assets/images/Edwin_Sánchez-cv.png'

export let About = function () {

    const [copyEmail, setcopy] = useState("Copy email")

    return (
        <div className="about" id="about">
            <div className="contactBtns">
                <a href="https://github.com/edwinsn"
                    rel="noreferrer"
                    target="_blank">
                    <img className="github-icon" alt="edwin's githuub account" src={gitHub} />
                </a>
                <button className="email"
                    onClick={() => {
                        setcopy("Copied!")
                        setTimeout(() => { setcopy("Copy email") }, 3000)

                        if (navigator.clipboard) {
                            navigator.clipboard.writeText("edwinsanchez750@gmail.com");
                        } else {
                            let textArea = document.createElement("textarea");
                            textArea.value = "edwinsanchez750@gmail.com";
                            // make the textarea out of viewport
                            textArea.style.position = "fixed";
                            textArea.style.left = "-999999px";
                            textArea.style.top = "-999999px";
                            document.body.appendChild(textArea);
                            textArea.focus();
                            textArea.select();
                            return new Promise((res, rej) => {
                                // here the magic happens
                                document.execCommand('copy') ? res() : rej();
                                textArea.remove();
                            });
                        }
                    }}>
                    <img className="mail-icon" alt="edwin mail" src={mailIcon} />
                    <div>{copyEmail}</div>
                </button>
            </div>
            <div className="container" >

                <div id="about-text">
                    <p className="title">About Me</p>
                    <p>
                        Hi, i'm Edwin, i like to <span className="highlight">solve problems</span >,
                        all kind of problems: <span className="highlight">programing</span>, <span className="highlight">design </span>
                        and even some <span className="highlight">mathematical</span> problems.
                    </p>
                    <p>
                        I know how to work collaboratively to build intuitive,
                        beautiful and reliable solutions that convince your <span className="highlight">clients</span>.
                    </p>

                </div>
                <div className="centered">
                    <a href={cv} id="cv" className="rotate-hover" download={true}>
                        <img src={cvIcon} alt="Edwin Sánchez cv" />
                    </a>
                </div>

            </div>
        </div>
    )
}