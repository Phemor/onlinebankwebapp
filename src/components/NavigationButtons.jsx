import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { BiArrowBack } from "react-icons/bi";
import { IoClose } from "react-icons/io5";

function NavigationButtons ()  {
  const navigate = useNavigate();

  return (
    <div className="navigation-buttons">
      <button onClick={() => navigate(-1)} className="back-button"><BiArrowBack /></button>
      <button onClick={() => navigate('/')} className="close-button"><IoClose /></button>
    </div>
  );
};

export default NavigationButtons;
