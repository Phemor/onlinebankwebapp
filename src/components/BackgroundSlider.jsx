import React, { useState } from 'react';
import '../App.css';
import imageSlide from '../data';

const BackgroundSlider = () => {
    const[currentState,setCurrentState]=useState(0)
    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%'
    };

  return (
    <div className='container-style'>
        <div style={bgImageStyle}></div>
    </div>
  );
};
export default BackgroundSlider;