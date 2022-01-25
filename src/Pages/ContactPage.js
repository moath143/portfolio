import React from "react";
import ContactItem from "../Components/ContactItem";
import phone from "../img/phone.svg";
import email from "../img/emailme.svg";
import location from "../img/location.svg";
import Tittle from "../Components/Tittle";

function ContactPage() {
  return (
    <div>
      <div className="title">
        <Tittle title={"About Me"} span={"About Me"} />
      </div>
      <div className="ContactPage">
        <div className="map-sect">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13607.268139986976!2d34.45808972238732!3d31.501712597447046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14fd7f054e542767%3A0x7ff98dc913046392!2sGaza!5e0!3m2!1sen!2s!4v1642702663083!5m2!1sen!2s"
            width="600"
            height="450"
            frameBorder="0"
            style={{ border: 0 }}
            allowFullScreen=""
            aria-hidden="false"
            tabIndex="0"
          ></iframe>
        </div>
        <div className="contact-sect">
          <ContactItem
            icon={phone}
            text1={"+257 7756110718"}
            text2={"+0333 6782 8792"}
            title={"Phone"}
          />
          <ContactItem
            icon={email}
            text1={"loremipusum@hmail.com"}
            text2={"abcloremipsum@gmail.com"}
            title={"Email"}
          />
          <ContactItem
            icon={location}
            text1={"Gaza"}
            text2={"Gaza Strip"}
            title={"Address"}
          />
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
