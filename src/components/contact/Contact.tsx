import React, { useRef, useState } from "react";
import "./Contact.scss";
import ReCAPTCHA from "react-google-recaptcha";
import emailjs from "@emailjs/browser";
import CheckIcon from "@mui/icons-material/Check";
import SendIcon from "@mui/icons-material/Send";
import { EMAILJS, reCAPTCHA_SECRET } from "../../utils/secrets";
import { EMPTY_STRING, ERROR_MESSAGE } from "../../utils/constants";
import { EmailJsError } from "../../utils/types";
import Loader from "../loader/Loader";
import Envelope from "../envelope/Envelope";

export default function Contact() {
  const formInitialState = {
    name: EMPTY_STRING,
    email: EMPTY_STRING,
    message: EMPTY_STRING,
  };
  const { SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY } = EMAILJS;
  const form = useRef();
  const [formData, setFormData] = useState(formInitialState);
  const [isLoading, setIsLoading] = useState(false);
  const [isComplete, setIsComplete] = useState(false);
  const [errorMessage, setErrorMessage] = useState(EMPTY_STRING);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const sendEmail = (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        setFormData(formInitialState);
        setIsLoading(false);
        setIsComplete(true);
      },
      (error: EmailJsError) => {
        setIsLoading(false);
        setErrorMessage(ERROR_MESSAGE.get(error.status));
      }
    );
  };
  const buttonText = () => {
    if (isLoading) {
      return (
        <>
          <h2>Sending</h2>
          <Loader />
        </>
      );
    }
    if (isComplete) {
      return (
        <>
          <h2>Sent!</h2>
          <div className="send-icon">
            <CheckIcon fontSize="inherit" />
          </div>
        </>
      );
    }
    return (
      <>
        <h2>Send</h2>
        <div className="send-icon">
          <SendIcon fontSize="inherit" />
        </div>
      </>
    );
  };
  return (
    <>
      <div className="glass contact-container">
        {isComplete ? (
          <Envelope />
        ) : (
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
            <p>{errorMessage}</p>
            <div className="form-submit-container">
              <button className="form-submit-button" type="submit">
                {buttonText()}
              </button>
            </div>
          </form>
        )}
      </div>
    </>
  );
}
