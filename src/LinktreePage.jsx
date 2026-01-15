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
            href="https://share.google/Pq9I8di4dEohIa0lq"
            target="_blank"
            rel="noopener noreferrer"
            className="link-button"
          >
            <div className="link-content">
              <span className="link-icon">
                <img
                  src="/google-color-svgrepo-com.svg"
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
                  src="/instagram-2-1-logo-svgrepo-com.svg"
                  alt="Instagram Icon"
                  className="instagram-icon"
                  style={{ width: "50px", height: "50px" }}
                />
              </span>
              <span className="link-text">Suivez-nous sur Instagram</span>
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
