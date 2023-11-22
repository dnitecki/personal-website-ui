import React, { useContext, useRef, useState } from "react";
import "./Contact.scss";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { EMAILJS, reCAPTCHA_SECRET } from "../../utils/secrets";
import { EMPTY_STRING } from "../../utils/constants";

export default function Contact() {
  const formInitialState = {
    name: EMPTY_STRING,
    email: EMPTY_STRING,
    message: EMPTY_STRING,
  };
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS;
  const form = useRef();
  const [formData, setFormData] = useState(formInitialState);
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        setFormData(formInitialState);
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
        setFormData(formInitialState);
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
            value={formData.name}
            onChange={handleChange}
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
            value={formData.email}
            onChange={handleChange}
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
            value={formData.message}
            onChange={handleChange}
            required
          />
          <ReCAPTCHA sitekey={reCAPTCHA_SECRET} />
          <br />
          <button className="form-submit" type="submit">
            <h2>Send</h2>
            <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </>
  );
}
