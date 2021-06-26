import './assets/contact.css'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { LoadingCircles } from './Loading'

let contractText = "Hello, I would like to tell you about a job offer, you can find more info here: \n\nwrite me back by email."
let freelancerText = "Hello, I would like to commission you a project,\nis about \n\n...\n\nwrite me back by email."
let projectText = "Hi there, I have a project you may be interested in, is about\n\n..."

export let Contact = function () {

  let [messagesent, messagesentDisplay] = useState("none")
  let [sendButton, changeSendButton] = useState(<input type="submit" value="Send" key="1"/>)

  let messagesentStyle = messagesent ? { display: messagesent } : undefined
  
  return (
    <section id="contact" className="contact">
      <div className="messageSent" style={messagesentStyle}>
        <span>Right! I'll write you back soon.</span>
      </div>
      <p>Contact me</p>
      <form onSubmit={(ev) => { sendMessage(ev, messagesentDisplay, changeSendButton) }} className="contactform" id="contactForm">
        <div className="inputsContainer">
          <input type="text" placeholder="Name" name="name" required />
          <input type="email" placeholder="Email" name="email" required />
        </div>
        <div className="message">
          <textarea placeholder="Message" name="message" required></textarea>
          <div>
            <input type="submit" onClick={(ev) => { fillMessage(ev, 1) }} form="contactForm" value="I want to hired you..." />
            <input type="submit" onClick={(ev) => { fillMessage(ev, 2) }} value="I have a work for you..." />
            <input type="submit" onClick={(ev) => { fillMessage(ev, 3) }} value="I have an idea..." />
          </div>
        </div>
        <div className="sendForm">
          {sendButton}
        </div>
      </form>
    </section>
  )
}

let fillMessage = function (ev, n) {
  ev.preventDefault()
  switch (n) {
    case 1:
      ev.target.form[2].value = contractText
      break;
    case 2:
      ev.target.form[2].value = freelancerText
      break;
    case 3:
      ev.target.form[2].value = projectText
      break;
    default:
      break;
  }
}


let sendMessage = function (ev, messagesentDisplay, changeSendButton) {
  ev.preventDefault()
  console.log("sending")
  changeSendButton(<LoadingCircles />)
  emailjs.sendForm('service_kjojome', 'template_nunwcy2', ev.target, process.env.REACT_APP_EMAILJSUSERID||"user_c4k3ES8RjQalUaezoM6Lz")
    .then((result) => {
      ev.target.reset()
      changeSendButton(<input type="submit" value="Send" key="1"/>)
      messagesentDisplay("flex")
      setTimeout(() => {
        messagesentDisplay(undefined)
      }, 3000)
      console.log(result)

    }, (error) => {
      changeSendButton(<input type="submit" value="Send" key="1" />)
      console.log(error.text);
    });
}