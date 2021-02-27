import React from "react";
import "./Card.css";

const Card = ({ icon, ip, title, port, description }) => (
  <div className="card">
    <div className="icon">{icon}</div>
    <div className="titleFormat"><span>{title}</span></div>
    <div>{ip}</div>
    <div>{port}</div>
    <div>{description}</div>
  </div>
);

export default Card;