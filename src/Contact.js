//import './assets/contact.css'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { LoadingCircles } from './Loading'
import './assets/contact.css'

let contractText = "Hello, I would like to tell you about a job offer, you can find more info here: \n\nwrite me back by email."
let freelancerText = "Hello, I would like to commission you a project,\nis about \n\n...\n\nwrite me back by email."
let projectText = "Hi there, I have a project you may be interested in, is about\n\n..."

export let Contact = function () {
  //repo rt in the window the sent status
  let [messagesent1, setMessagesent1] = useState(false)
  let [messagesent2, setMessagesent2] = useState(false)
  let [sendButton1, changeSendButton1] = useState(<input type="submit" value="Send" key="1" />)
  let [sendButton2, changeSendButton2] = useState(<input type="submit" value="Send" key="2" />)


  return (
    <>
      <hr />
      <div className="contactContainer" id="#contact">
        <p className="title" >Contact</p>
        <h2>Send me a link</h2>
        <form className="sendLikn" id="contact"
          onSubmit={(ev) => { sendMessage(ev, setMessagesent1, changeSendButton1) }}>
          <div >
            <input type="text" className="green"
              placeholder={messagesent1 ? "...right, I'll check out the link, thank you." : "link"}
              name="link" required ></input>
            <div className="submit-container">
              {sendButton1}
            </div>
          </div>
          <div></div>
        </form>
        <h2>Or write me</h2>
        <form className="contact tittle"
          onSubmit={(ev) => { sendMessage(ev, setMessagesent2, changeSendButton2) }}>
          <div className="screens">

            <div className="data">
              <input placeholder="Name" name="name" required></input>
              <input placeholder="Email" name="email" required></input>
            </div>
            <textarea name="message" placeholder={messagesent2 ? "... right, I'll get back to you in the next few days." : "message"} required></textarea>

          </div>
          <div className="btns">
            <button onClick={(ev) => { fillMessage(ev, 1) }} >Hire me</button>
            <button onClick={(ev) => { fillMessage(ev, 2) }} >Freelancer</button>
            <button onClick={(ev) => { fillMessage(ev, 3) }} >Share ideas</button>
            <div>
              {sendButton2}
            </div>
          </div>
        </form>
      </div>
    </>
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


let sendMessage = function (ev, setMessagesent, changeSendButton) {
  ev.preventDefault()
  console.log("sending")
  changeSendButton(<LoadingCircles />)
  emailjs.sendForm('service_h1epg1j', 'template_nunwcy2', ev.target, "user_c4k3ES8RjQalUaezoM6Lz")
    .then((result) => {
      ev.target.reset()
      changeSendButton(<input type="submit" value="Send" key="1" />)
      setMessagesent(true)
      setTimeout(() => {
        setMessagesent(false)
      }, 4000)
      //console.log(result)

    }, (error) => {
      changeSendButton(<input type="submit" value="Send" key="1" />)
      console.log(error.text);
    });
}