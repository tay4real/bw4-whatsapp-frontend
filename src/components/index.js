import React from "react";
import { Alert } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ContinueWith = ({ title, className, loginWith }) => {
  return (
    <div className="col-12 my-1">
      <a className={className} href={loginWith}>
        <i className="fab fa-facebook"></i>
        {title}
      </a>
    </div>
  );
};

export const DangerAlert = ({ messsage }) => (
  <div>
    <Alert variant="danger">{messsage}</Alert>
  </div>
);

export const WhatsAppLogo = (maxWidth = "25px") => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <Link to="/">
      <img
        style={{ maxWidth: maxWidth }}
        src={process.env.PUBLIC_URL + "whatsap.png"}
        alt="Spotify Logo White"
      />
    </Link>
  </div>
);
