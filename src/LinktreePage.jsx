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
            href="https://www.google.com/search?sca_esv=031453346484e3fe&sxsrf=AE3TifMg65G3vZ2GWuznJCRPBN6gsSTxnA:1750937268313&si=AMgyJEtREmoPL4P1I5IDCfuA8gybfVI2d5Uj7QMwYCZHKDZ-E-JwdQ_Ty5x0FaxlrmQ66N9ekXZuyj0bmTdekm8eB5Gunh7ZmjlL0tcWuDSLcfcj_aJnA38e6sB4bx-KbbUSGOkkaLrKa3IBKpsASoMGipHqg9IiJElA0eTB0zSUC_XbMyL1t9138har3Vp3FyrejsMnXDp749DedX8bV7HxVUCDcmlGfw%3D%3D&q=The+Smile+Space+-+Cabinet+d%27orthodontie+et+de+dentisterie+p%C3%A9diatrique+%C3%A0+Soignies+Avis&sa=X&ved=2ahUKEwiknZvP_Y6OAxUYAfsDHfLCIxMQ0bkNegQIKRAE&biw=1920&bih=919&dpr=1"
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
            href="https://calendly.com/thesmilespace"
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
