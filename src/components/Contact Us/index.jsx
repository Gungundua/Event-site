import React from "react";
import Wrapper from "./style";
import "@fortawesome/fontawesome-free/css/all.min.css";
import contact from "../assets/contact.jpg"; // currently unused, remove if not needed
const Contact = () => {
  return (
    <Wrapper>
      <div className="sections">
        {/* Left Column */}
        <div className="getintouch">
          <h1>Get In Touch</h1>
          <div className="section1">
            <div className="info">
            <p>
              <i className="fa-solid fa-location-dot"></i>
              5, Sindhi Colony Rd, opposite lane of Pink Square mall, Raja Park,<br />
              Adarsh Nagar, Jaipur, Rajasthan 302004
            </p>
            <p>
              <i className="fa-solid fa-headset"></i>
              +91 99505 23594<br />
              +91 75682 23594<br />
              sales.noonmoon@gmail.com
            </p>
            <p>
              <i className="fa-regular fa-clock"></i>
              Mon-Sat : 9:30AM - 6:30PM<br />
              Sunday : Closed
            </p>
          </div>
          <div style={{ width: "100%" }} className="map">
            <iframe
              width="300"
              height="300"
              frameBorder="0"
              scrolling="no"
              marginHeight="0"
              marginWidth="0"
              src="https://maps.google.com/maps?width=300&height=300&hl=en&q=Anshi%20Hospitality%20&amp;%20Events,%202nd%20Floor,%20Amar%20Plaza,%20Income%20Tax%20Colony,%20Model%20Town,%20Jagatpura,%20Jaipur,%20Rajasthan%20302017+(Anshi%20Events)&t=&z=14&ie=UTF8&iwloc=B&output=embed"
              title="Google Map Location"
            />
          </div>
          </div>
        </div>
        {/* Right Column */}
        <div className="connectform">
          <h2>Connect With Us</h2>
          <form action="https://getform.io/f/agdlqryb" method="POST">
            <div className="double-inputs">
              <input type="text" name="name" placeholder="Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
            </div>
            <input type="text" name="contact" placeholder="Contact No" required />
            <textarea name="message" placeholder="Enter Message" rows="6" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
export default Contact