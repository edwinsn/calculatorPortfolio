import html from './assets/images/html5.svg'
import js from './assets/images/js.svg'
import react from './assets/images/react.svg'
import css from './assets/images/css.svg'
import gitHub from './assets/images/githubIcon.svg'
import mailIcon from './assets/images/mailIcon.svg'
import cv from "./assets/files/Edwin's cv.pdf"
import { useState } from 'react'
import java from './assets/images/java.svg'
import mongodb from './assets/images/mongodb.svg'
import sql from './assets/images/sql.svg'
import node from './assets/images/node.svg'
import axis from './assets/images/axis.svg'

let firstShow = false
let aux = false

export let About = function () {

    const [copyEmail, setcopy] = useState("Copy email")
    const [showSkill2, setShowSkill2] = useState(true)

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
                <div className="about-text">
                    <p className="title">About</p>
                    <p>
                        When I was a child, there was a boy who was extremely good at
                        calculations, once in a math class, we worked together and
                        I discovered that by giving him a possible solution to the problem
                        we were working, he could quickly implement it and in this way, after
                        rehearsing a couple of alternatives, we came up with an idea whose
                        result was a logical answer , unfortunately we were wrong. Nonetheless
                        I think that the combination of the power of calculation of machines
                        and human creativity can do great things.
                    </p>

                    <p className="cv"><a href={cv}  download={true}>Download VC</a></p>
                </div>
                <div>
                    <p className="title">Skills</p>
                    <div className="skills"
                        onMouseLeave={() => { if (showSkill2) { setShowSkill2(false) }; aux = false }}
                        onMouseEnter={() => { setShowSkill2(true) }}
                        onClick={() => {
                            if (aux) {
                                setShowSkill2(!showSkill2)
                            }
                            aux = true
                        }}
                    >
                        <div style={{ right: showSkill2 ? undefined : "5%", top: showSkill2 ? undefined : "12%" }}>
                            <img src={axis} className="axis" alt="" />
                            <div>
                                <img src={css} alt="" />
                                <img src={js} alt="" />
                                <img src={react} alt="" />
                                <img src={html} alt="" />
                            </div>
                        </div>
                        <div style={{
                            animationName: showSkill2 && !firstShow ? undefined : "toggle2",
                            animationDuration: showSkill2 ? "1400ms" : "1200ms",
                            animationFillMode: "forwards"
                        }}>
                            <img src={axis} className="axis" alt="" />
                            <div>
                                <img src={node} alt="" />
                                <img src={mongodb} alt="" />
                                <img src={sql} alt="" />
                                <img src={java} alt="" />
                            </div>
                        </div>
                    </div>
                </div>


            </div>

        </div >
    )
    /*return (
        <section className="about" id="about">

                <div className="aboutText">
                    <p>About</p>
                    <p>When I was a child, there was a boy who was extremely good at calculations,
                        once in a math class, we worked together and I discovered that by giving him
                        a possible solution to the problem we were working, he could quickly
                        implement it and in this way, after rehearsing a couple of alternatives, we came up with
                        an idea whose result was a logical answer , unfortunately we were wrong.
                        Nonetheless I think that the combination of the power of calculation
                        of machines and human creativity can do great things.</p>

                    {/*<p>Dounload Cv</p><br />}
            </div>
            <div className="skills">
                <p>Skills</p>
                <div>
                    <img src={js} alt="javascript"></img>
                    <p>Javascript</p>
                </div>
                <div>
                    <img src={css} alt="css"></img>
                    <p>css</p>
                </div>
                <div>
                    <img src={html} alt="Html"></img>
                    <p>HTML</p>
                </div>
                <div>
                    <img src={react} alt="React"></img>
                    <p>React</p>
                </div>
            </div>
        </section>
    )*/
}