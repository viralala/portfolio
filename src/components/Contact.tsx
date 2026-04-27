import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";
import { profile } from "../data/profile";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a href={`mailto:${profile.email}`} data-cursor="disable">
                {profile.email}
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              <a href={`tel:${profile.phone.replace(/\s+/g, "")}`} data-cursor="disable">
                {profile.phone}
              </a>
            </p>
            <h4>Location</h4>
            <p>{profile.location}</p>
          </div>
          <div className="contact-box">
            <h4>Websites</h4>
            {profile.websites.map((website) => (
              <a
                key={website.href}
                href={website.href}
                target="_blank"
                rel="noreferrer"
                data-cursor="disable"
                className="contact-social"
              >
                {website.label} <MdArrowOutward />
              </a>
            ))}
          </div>
          <div className="contact-box">
            <h4>Languages</h4>
            <p>
              {profile.languages
                .map((language) => `${language.name} - ${language.level}`)
                .join(" • ")}
            </p>
            <h2>
              Designed and Developed <br /> by <span>{profile.fullName}</span>
            </h2>
            <h5>
              <MdCopyright /> 2026
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
