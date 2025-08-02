// LinktreePage.js
import React from "react";
import "./LinktreePage.css";

const LinktreePage = () => {
  // Background image - replace with your actual image
  const backgroundImage =
    "https://thesmilespace.be/img/cabinet/the-smile-space-orthodontie-cabinet-4.png";

  return (
    <div
      className="linktree-container"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`,
      }}
    >
      <div className="content-wrapper">
        <div className="profile-section">
          <img
            src="https://thesmilespace.be/img/the-smile-space-orthodontie-logo.png"
            alt="TheSmileSpace Logo"
            className="profile-image"
          />
          <h1 className="profile-title">TheSmileSpace</h1>
          <p className="profile-subtitle">Cabinet d'Orthodontie</p>
        </div>

        <div className="links-section">
          <a
            href="https://www.google.com/search?client=safari&sca_esv=29db07fc8cf0577a&hl=fr-be&q=avis+sur+the+smile+space&uds=AOm0WdE2fekQnsyfYEw8JPYozOKzkAn00025F2C_QwhT9HnqZyIhPyQgJYcNpDkhgyF0khJR9jU6LmClVlL3oW9UmlIOZQTLdNOfH4WXVIyrMt7G0icUFRsQCOXZCK_IVMiz4x26oc7x_Q5MJYSKCU-kUPyddx-7Zo4Dulszvcnm7KPJStnHhAE&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-JwdQ_Ty5x0FaxlrmQ66N_IC5hpw1BVUP_yKfmMiY-Wy7pCvIR1ltIGiRcjRTZY1gyDHNMtfa2zKb3YrKd27G92a5Um-1a4mH-TLahdzU1QGQuK8g%3D%3D&sa=X&ved=2ahUKEwi3hr37xaCOAxXuaqQEHZ8xHhYQxKsJKAB6BAgKEAE&ictx=1&stq=1&cs=1&lei=RGRmaLfUAu7VkdUPn-P4sAE"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <div className="link-content">
              <span className="link-icon">
                <img
                  src="https://www.svgrepo.com/show/475656/google-color.svg"
                  alt="Google Icon"
                  className="google-icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </span>
              <span className="link-text">Nos avis google (5 étoiles)</span>
            </div>
          </a>

          <a
            href="https://www.instagram.com/the_smile_space/"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <div className="link-content">
              <span className="link-icon">
                <img
                  src="https://www.svgrepo.com/show/452229/instagram-1.svg"
                  alt="Instagram Icon"
                  className="instagram-icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </span>
              <span className="link-text">Suivez-nous sur Instagram</span>
            </div>
          </a>

          <a
            href="https://calendly.com/mons-thesmilespace/the-smile-space-nouveau-cabinet-d-orthodontie-a-mons"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button primary-link"
          >
            <div className="link-content">
              <span className="link-icon">
                <img
                  src="https://www.svgrepo.com/show/423027/calendar-date-schedule.svg"
                  alt="Calendly Icon"
                  className="calendly-icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </span>
              <span className="link-text">Prendre rendez-vous !</span>
            </div>
          </a>
        </div>

        <footer className="footer">
          <p>
            © {new Date().getFullYear()} TheSmileSpace. Tous droits réservés.
          </p>
        </footer>
      </div>
    </div>
  );
};

export default LinktreePage;
