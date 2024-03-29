//import './assets/contact.css'
import emailjs from 'emailjs-com'
import { useState } from 'react'
import { LoadingCircles } from '../components/Loading'
import './contact.css'
import ShowUp from '../components/ShowUp'

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
    <ShowUp className='w-70'>
      <hr />
      <div id="contact-container" className="flex">
        <p className="big-title" id="contact">Contact</p>
        <h2 className='white'>Send me a link</h2>
        <form className="sendLikn"
          onSubmit={(ev) => { sendMessage(ev, setMessagesent1, changeSendButton1) }}>
          <div>
            <input type="text" className="green"
              placeholder={messagesent1 ? "...right, I'll check out the link, thank you." : "link"}
              name="link" required ></input>
            <div className="submit-container centered">
              {sendButton1}
            </div>
          </div>
          <div></div>
        </form>
        <h2 className='white'>
          Or write me
        </h2>
        <form className="contact wrap centered tittle"
          onSubmit={(ev) => { sendMessage(ev, setMessagesent2, changeSendButton2) }}>
          <div className="screens">

            <div className="data wrap">
              <input placeholder="name" name="name" required></input>
              <input placeholder="email" name="email" required></input>
            </div>
            <textarea name="message" placeholder={messagesent2 ? "... right, I'll get back to you in the next few days." : "message"} required></textarea>

          </div>
          <div className="btns">
            <button onClick={(ev) => { fillMessage(ev, 1) }} >Hire me</button>
            <button onClick={(ev) => { fillMessage(ev, 2) }} >Freelancer</button>
            <button onClick={(ev) => { fillMessage(ev, 3) }} >Share ideas</button>
            <div className="centered">
              {sendButton2}
            </div>
          </div>
        </form>
      </div>
    </ShowUp>
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

  changeSendButton(<LoadingCircles />)
  emailjs.sendForm('service_h1epg1j', 'template_nunwcy2', ev.target, "user_c4k3ES8RjQalUaezoM6Lz")
    .then((result) => {
      ev.target.reset()
      changeSendButton(<input type="submit" value="Send" key="1" />)
      setMessagesent(true)
      setTimeout(() => {
        setMessagesent(false)
      }, 6000)

    }, (error) => {
      changeSendButton(<input type="submit" value="Send" key="1" />)
      console.log(error.text);
    });
}