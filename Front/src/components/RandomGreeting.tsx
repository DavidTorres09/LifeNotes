import React from 'react';
import '../styles/randomGreeting.css';

const imageNames = [
  'cat.jpg',
  'elephant.jpg',
  'golden.jpg',
  'horse.jpg',
  'lion.jpg',
  'penguin.jpg',
  'rabbit.jpg',
  'worm.jpg',
];

const pastelColors = [
    '#FAD02E',
    '#F28D35', 
    '#F6C6C6',
    '#F9A8D4',
    '#D0E0FF', 
    '#B9FBC0', 
    '#C1C6C8',
    '#D4A5A5',
  ];
  

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * imageNames.length);
  return imageNames[randomIndex];
};

const getRandomColor = () => {
    const randomIndex = Math.floor(Math.random() * pastelColors.length);
    return pastelColors[randomIndex];
  };

const WelcomeMessage: React.FC = () => {
  const imageSrc = `/assets/greeting/${getRandomImage()}`;
  const borderColor = getRandomColor();

  return (
    <div className="welcome-container">
      <h2 className='greeting-index'>¡Bienvenid@ {sessionStorage.getItem('name')}!</h2>
      <img 
        src={imageSrc} 
        alt="Imagen de bienvenida" 
        className="welcome-image" 
        style={{ borderColor: borderColor }}
        />
    </div>
  );
};

export default WelcomeMessage;
