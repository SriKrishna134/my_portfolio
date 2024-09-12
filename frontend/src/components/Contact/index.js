import Loader from "react-loaders"
import "./index.scss"
import AnimatedLetters from "../AnimatedLetters" 
import { useEffect, useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef();

    useEffect(() => {
        const timerId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timerId);
        };
      }, []);

      const sendEmail = (e) => {
        e.preventDefault() 

        emailjs
      .sendForm(process.env.REACT_APP_EMAILJS_SERVICE_ID, process.env.REACT_APP_EMAILJS_TEMPLATE_ID, refForm.current, {
        publicKey: process.env.REACT_APP_EMAILJS_USER_ID,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

    return(
        <>
            <div className = "container contact-page">
                <div className = "text-zone">
                    <table>
                        <tr>
                            <td className="left-side">
                                <h1>
                                    <AnimatedLetters letterClass={letterClass} strArray = {"Contact me".split("")} idx = {15} />
                                </h1>
                                <p style={{ color: 'black' }} className="contact-font">
                                    <br/>
                                    Thank you for your interest in getting in touch! 
                                    <br/>
                                    <br/>I value open communication and welcome any inquiries, feedback, or collaboration opportunities. Please don't hesitate to get in touch with me by filling out the contact form.
                                    <br/>
                                    <br/>
                                    <a target = "_blank" rel = "noreferrer" href = "https://www.linkedin.com/in/srikrishna-hireholi/">
                                        <FontAwesomeIcon icon={faLinkedin}  class = "icon" style={{ color: '#0b92db' }} />
                                    </a>
                                    <a target = "_blank" rel = "noreferrer" href = "mailto:srikrishnanfs@gmail.com">
                                        <FontAwesomeIcon icon={faEnvelope} class = "icon" style={{ color: '#db1515' }} />
                                    </a>
                                </p>
                            </td>
                            <td className="right-side">
                                <div className="contact-form">
                                    <form ref={refForm} onSubmit={sendEmail}>
                                        <ul>
                                            <li className = "half">
                                                <input type="text" name="user_name" placeholder="Name" required />
                                            </li>
                                            <li className="half">
                                                <input type="email" name="user_email" placeholder = "Email" required />
                                            </li>
                                            <li>
                                                <input placeholder = "Subject" type="text" name="user_subject" required/>
                                            </li>
                                            <li>
                                                <textarea placeholder="Message" name="message" required></textarea>
                                            </li>
                                            <li>
                                                <input type="submit" className="flat-button" value="Send" />
                                            </li>
                                        </ul>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <Loader type="pacman" />
        </>
    )
}

export default Contact