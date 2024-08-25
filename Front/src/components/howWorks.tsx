import React from 'react';
import '../../styles/glassNav.css';

const howWorks: React.FC = () => {

  return (
    <div className="h-full flex-grow flex justify-center">
    <div className="w-full custom-max-width p-8 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-left text-2xl font-semibold">¿Cómo funciona?</h2>
      <p className="text-left text-lg mt-2">Utilizar nuestro servicio es muy sencillo, únicamente debes seguir los siguientes pasos:</p>
      <div className="flex justify-center mt-8">
        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md w-full max-w-xs mx-4">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-blue-500">1.</span>
          </h3>
          <p className="text-justify">
            Registrate de forma gratuita y comprende tus emociones con un análisis profundo utilizando herramientas de inteligencia artificial que detectan y miden tus estados emocionales en tiempo real.
          </p>
        </div>
        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md w-full max-w-xs mx-4">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-blue-500">2.</span>
          </h3>
          <p className="text-justify">
            Crea una entrada diaria y usa el poder de la IA para ofrecerte soluciones personalizadas. De esta manera puedes obtener una opinión secundaria sobre tus pensamientos más privados.
          </p>
        </div>
        <div className="flex flex-col items-start bg-white p-6 rounded-lg shadow-md w-full max-w-xs mx-4">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-blue-500">3.</span>
          </h3>
          <p className="text-justify">
            Implementa técnicas para mejorar tu bienestar. Con la configuración específica que ofrecemos esperamos darte las mejores recomendaciones para que mejores en todos los aspectos de tu vida.
          </p>
        </div>
      </div>
    </div>
  </div>)
};

export default howWorks;