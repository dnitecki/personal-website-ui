import React from "react";
import "./Contact.scss";

export default function Contact() {
  return (
    <>
      <div className="glass contact-container">
        <form className="contact-form">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" name="name" id="name" className="form-input" />
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@gmail.com"
            className="form-input"
          />
          <label htmlFor="message" className="form-label">
            Message
          </label>
          <textarea
            rows={50}
            name="message"
            id="message"
            placeholder="How can I help?"
            className="form-input"
          />
        </form>
      </div>
    </>
  );
}
