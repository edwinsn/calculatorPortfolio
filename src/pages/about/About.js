
import { useState } from 'react'
import cvIcon from '../../assets/images/Edwin_Sánchez-cv.svg'
import cvIconColored from '../../assets/images/Edwin_Sánchez-cv-colored.svg'
import ShowUp from '../components/ShowUp'
import './about.css'
import mailIcon from '../../assets/images/mailIcon.svg'
import cv from "../../assets/files/Edwin's_cv(Full stack developer).pdf"



export let About = function () {

    const [copyEmail, setcopy] = useState("Copy email")
    const [cvImage, setCvImage] = useState(cvIcon)

    return (

        <div id="about">

            <ShowUp className="wrap justify-around">
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
                    <div id="contactBtns">
                        <button className="email centered"
                            onClick={() => { copymail(setcopy) }}>
                            <img id="mail-icon" alt="copy edwin mail" src={mailIcon} />
                            <div className="centered">{copyEmail}</div>
                        </button>
                    </div>

                </div>

                <a href={cv} id="cv"
                    className="centered"
                    download={true}
                >
                    <img src={cvImage}
                        alt="Edwin Sánchez cv"
                        onMouseEnter={() => { setCvImage(cvIconColored) }}
                        onMouseLeave={() => { setCvImage(cvIcon) }}
                        onTouchStart={() => { setCvImage(cvIconColored) }}
                        onTouchEnd={() => { setCvImage(cvIcon) }}
                    />
                </a>
            </ShowUp>

        </div>

    )
}

let copymail = (setcopy) => {
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
}