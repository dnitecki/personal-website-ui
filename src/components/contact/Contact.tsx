import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <>
      <div className="glass contact-container">
        <form className="contact-form">
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
            placeholder=" john.doe@gmail.com"
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
            placeholder=" How can I help?"
            className="form-input"
            required
          />
          <button className="form-submit" type="submit">
            <h3>Send</h3>
            <FontAwesomeIcon className="send-icon" icon={faPaperPlane} />
          </button>
        </form>
      </div>
    </>
  );
}
