import React, { useRef } from "react";
import "./Contact.scss";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { EMAILJS, reCAPTCHA_SECRET } from "../../utils/secrets";

export default function Contact() {
  const form = useRef();
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS;

  const sendEmail = (e: any) => {
    console.log(TEMPLATE_ID);
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <>
      <div className="glass contact-container">
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            className="form-input"
            required
          />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@gmail.com"
            className="form-input"
            required
          />
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            rows={5}
            name="message"
            id="message"
            placeholder="How can I help?"
            className="form-input"
            required
          />
          <div className="g-recaptcha" data-sitekey={reCAPTCHA_SECRET} />
          <br />
          <button className="form-submit" type="submit">
            <h3>Send</h3>
            <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </>
  );
}
