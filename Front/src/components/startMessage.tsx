import React from 'react';
import '../styles/glassNav.css';
const startMesage: React.FC = () => {

  return (
    <div className="flex flex-col min-h-screen">
  <div className="flex justify-center my-12 flex-grow">
  <div className="text-center custom-max-width">
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold navbar">
      CONTROL DE TUS <span className="emocionesText">EMOCIONES</span> CON <span className="text-gradient-to-r rainbow-text">IA</span>
    </h1>
  </div>
</div>
</div>
  );
};

export default startMesage;