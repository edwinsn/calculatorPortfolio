import React from 'react'
import backendIcon from '../../assets/images/skills/backendIcon.svg'
import frontendIcon from '../../assets/images/skills/frontendIcon.svg'
import designIcon from '../../assets/images/skills/designIcon.svg'
import othersIcon from '../../assets/images/skills/othersIcon.svg'
import reactIcon from '../../assets/images/skills/react.svg'
import htmlIcon from '../../assets/images/skills/html.svg'
import awsIcon from '../../assets/images/skills/aws.svg'
import cssIcon from '../../assets/images/skills/css.svg'
import figmaIcon from '../../assets/images/skills/figma.svg'
import firebaseIcon from '../../assets/images/skills/firebase.svg'
import gitIcon from '../../assets/images/skills/git.svg'
import jestIcon from '../../assets/images/skills/jest.svg'
import reactQueryIcon from '../../assets/images/skills/react-query.svg'
import mongoIcon from '../../assets/images/skills/mongo.svg'
import nodeIcon from '../../assets/images/skills/node.svg'
import reduxIcon from '../../assets/images/skills/redux.svg'
import sqlIcon from '../../assets/images/skills/sql.svg'
import gimpIcon from '../../assets/images/skills/gimp.svg'

import './skills.css'
import ShowUp from '../components/ShowUp'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs'
import 'react-tabs/style/react-tabs.css';



export default function Skills() {


    return (
        <ShowUp className='w-90 flex-column centered full-screen'>
            <h2 id='skills-title' className='text-white'>
                Skills
            </h2>
            <Tabs id='skills'>
                {/** Content */}
                <TabPanel >
                    <h2 className='subtitle'>
                        Frontend
                    </h2>
                    <div>
                        <img src={reactIcon} alt="" />
                        <img src={htmlIcon} alt="" />
                        <img src={cssIcon} alt="" />
                        <img src={reduxIcon} alt="" />
                        <img src={reactQueryIcon} alt="" />
                    </div>
                    <p>
                        React, the perfect ingredient for building amazing applications.
                        I have a deep love for the reactive philosophy and
                        its focus on state-driven components and dynamic
                        code updates. This allows for an intuitive and
                        user-friendly experience. My technical skills include
                        React, HTML, CSS, Redux, and React Query. With
                        these tools in my belt, I'm ready to take on any project
                        and make it a React-tastic success!"
                    </p>
                </TabPanel>
                <TabPanel>
                    <h2 className='subtitle'>
                        Backend
                    </h2>
                    <div>
                        <img src={nodeIcon} alt="" />
                        <img src={sqlIcon} alt="" />
                        <img src={awsIcon} alt="" />
                        <img src={mongoIcon} alt="" />
                        <img src={firebaseIcon} alt="" />
                    </div>

                    <p>
                        Say hello to seamless backend systems! I'm proficient in using
                        Node.js, MongoDB, SQL, and AWS to create efficient and
                        reliable solutions. My in-depth knowledge of these
                        technologies enables me to design and implement secure,
                        scalable backend systems that can handle the demands of
                        modern applications. So whether you need a system that's
                        simple and straightforward or one that's complex and
                        powerful, I've got you covered.
                    </p>
                </TabPanel>

                <TabPanel>
                    <h2 className='subtitle'>
                        Design
                    </h2>
                    <div>
                        <img src={figmaIcon} alt="" />
                        <img src={gimpIcon} alt="" />
                    </div>
                    <p>
                        With Figma and GIMP in my toolbox, I bring a playful
                        yet professional touch to visual design. Whether it's
                        a logo, website, or any other design project, I have
                        the skills to turn your ideas into eye-catching,
                        user-friendly designs that stand out and make a lasting
                        impression.
                    </p>
                </TabPanel>
                <TabPanel>
                    <h2 className='subtitle'>
                        Others
                    </h2>
                    <div>
                        <img src={gitIcon} alt="" />
                        <img src={jestIcon} alt="" />
                    </div>
                    <p>
                        Git and Jest? More like hit and the best! These tools
                        are my trusty sidekicks in the wild world of web
                        development. With Git, I can easily track my code
                        and collaborate with my team. And with Jest, I can
                        be confident that my code is not only shiny, but
                        also functions like a well-oiled machine.
                        Let's just say, I'm ready for any coding adventure
                        that comes my way!
                    </p>
                </TabPanel>

                {/** Options */}
                <TabList>
                    <Tab>
                        <img src={frontendIcon} alt="" />
                        <span>
                            Frontend
                        </span>
                    </Tab>
                    <Tab>
                        <img src={backendIcon} alt="" />
                        <span>
                            Backend
                        </span>
                    </Tab>
                    <Tab>
                        <img src={designIcon} alt="" />
                        <span>
                            Design
                        </span>
                    </Tab>
                    <Tab>
                        <img src={othersIcon} alt="" />
                        <span>
                            Others
                        </span>
                    </Tab>

                </TabList>

            </Tabs>
        </ShowUp>
    )

    /*return (
            <p className="title">My Skills</p>
            <div id="skills" className="centered wrap">
                <div style={{ textAlign: "center" }}>
                    <DropDownList title="Frontend" icon={frontendIcon} items={["React", "Html", "Css", "Redux", "Styled-componets"]} />
                    <DropDownList title="Backend" icon={backendIcon} items={["Nodejs", "Express", "MongoDb", "SQL"]} />
                </div>
                <div>
                    <DropDownList title="Design" icon={designIcon} items={["UI design", "Figma"]} />
                    <DropDownList title="Others" icon={othersIcon} items={["Git", "Jest", "JsDoc", "Firebase"]} />
                </div>
            </div>
    ) */
}   