import React, { useState, useEffect } from 'react';
import '../App.css';
import { imageSlide } from '../data';

const BackgroundSlider = () => {
    const [currentState, setCurrentState] = useState(0);
    console.log('re-rendered')

    useEffect(() => {
        const maxNumber = imageSlide.length - 1;
        const interval = setInterval(() => {
            setCurrentState(prevState => (prevState === maxNumber ? 0 : prevState + 1));
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const bgImageStyle = {
        backgroundImage: `url(${imageSlide[currentState].url})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        height: '100%',
    };

    return (
        <div className='homecontainer-style'>
            <div style={bgImageStyle}></div>
        </div>
    );
};

export default BackgroundSlider;
