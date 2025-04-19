import React from "react";
import Map from "./Map";

export default function Contact() {
  return (
    <div className="Contact" id="Contact">
      <div className="contact-wrapper">
        <h1>Contact Us</h1>
        <form className="contact-wrapper">
          <input className="contact-name" type="text" placeholder="Name" required/>  
          <input className="contact-email" type="email" placeholder="Email" required/>  
          <textarea className="contact-message" type="text" placeholder="Write your message" required/>  
          <button type="submit" className="button contact-button" href="#">Send</button>
        </form>
      </div>

      <div className="contact-section-places">
        <Map className="map" />
      </div>
    </div>
  );
};
