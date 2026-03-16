// src/components/StatusCard.js
import React from "react";
import "../App.css";

const StatusCard = ({ title, value, progress }) => {
  return (
    <div className="status-card">
      <h4>{title}</h4>
      <p>{value}</p>
      {progress !== undefined && <p>Progress: {progress}%</p>}
    </div>
  );
};

export default StatusCard;