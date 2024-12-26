import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// import React from "react";

const ServicesDetail = ({ onBack }) => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <h2>มีอะไรบ้างเกี่ยวกับบริการนี้</h2>
      <p> TTTTT </p>
      <button className="btn btn-custom btn-lg" onClick={() => navigate("/#services")}>Back to seevices </button>
    </div>
  );
};

export default ServicesDetail;
