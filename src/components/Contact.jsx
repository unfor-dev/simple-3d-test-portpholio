import React from "react";

export default function Contact() {
  return (
    <div className="Contact">
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <input className="contact-name" type="text" placeholder="Name" />  
        <input className="contact-email" type="email" placeholder="Email" />  
        <input className="contact-message" type="text" placeholder="Write your message" />  
        <button type="submit" className="button contact-button" href="#">Send</button>
      </div>

      <div className="contact-section-places">
        <h1>Canvas</h1>
      </div>
    </div>
  );
};
