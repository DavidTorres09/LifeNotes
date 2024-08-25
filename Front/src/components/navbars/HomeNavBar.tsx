import React from 'react';
import { StarIcon  } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../../styles/glassNav.css';

const HomeNavBar: React.FC = () => {
  const navigate = useNavigate();

  const handleIndex = () => {
    navigate('/login');
  }
  const handleNosotros = () => {
    navigate('/aboutUs');
  }

  
  return (
    <div className="flex flex-col min-h-screen">
  <nav className="navbar">
    <div className="container mx-auto flex justify-between items-center p-4">
      <div className="logo flex items-center space-x-2">
        <img src="https://th.bing.com/th/id/OIG4.NoDP5ITbJ3RJUklBXp1i?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
        <span>Life Notes</span>
      </div>
      <div className="navbarButton flex space-x-4">
        <a href="" className="flex items-center space-x-1 hover:text-[#F9A8D4] transition-colors" onClick={handleIndex}>
          <StarIcon className="w-5 h-5 text-color: #6D4C41;" />
          <span>Empezar a Utilizar</span>
        </a>
      </div>
    </div>
  </nav>

  <div className="flex justify-center my-12 flex-grow ">
  <div className="text-center custom-max-widthText">
    <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold navbar">
      CONTROL DE TUS <span className="emocionesText">EMOCIONES</span> CON <span className="text-gradient-to-r rainbow-text">IA</span>
    </h1>
  </div>
</div>

<div className="h-full flex-grow flex justify-center">
  <div className="w-full custom-max-width p-8 rounded-lg shadow-lg m-6">
    <h2 className="text-left text-2xl font-semibold comofuncionaText">¿Cómo funciona?</h2>
    <p className="text-left text-lg mt-2 comofuncionaText">Utilizar nuestro servicio es muy sencillo, únicamente debes seguir los siguientes pasos:</p>
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-start card p-6 rounded-lg shadow-md w-full  mx-4">
        <h3 className="text-xl font-bold mb-4">
          <span>1.</span>
        </h3>
        <p className="text-justify">
          Registrate de forma gratuita y comprende tus emociones con un análisis profundo utilizando herramientas de inteligencia artificial que detectan y miden tus estados emocionales en tiempo real.
        </p>
      </div>
      <div className="flex flex-col items-start card p-6 rounded-lg shadow-md w-full  mx-4">
        <h3 className="text-xl font-bold mb-4">
          <span >2.</span>
        </h3>
        <p className="text-justify">
          Crea una entrada diaria y usa el poder de la IA para ofrecerte soluciones personalizadas. De esta manera puedes obtener una opinión secundaria sobre tus pensamientos más privados.
        </p>
      </div>
      <div className="flex flex-col items-start card p-6 rounded-lg shadow-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">
          <span>3.</span>
        </h3>
        <p className="text-justify">
          Implementa técnicas para mejorar tu bienestar. Con la configuración específica que ofrecemos esperamos darte las mejores recomendaciones para que mejores en todos los aspectos de tu vida.
        </p>
      </div>
    </div>
  </div>
</div>

<footer className="py-4 navbar">
  <div className="container mx-auto flex items-center justify-between">

    <div className="flex items-center logo">
      <img
        src="https://th.bing.com/th/id/OIG4.NoDP5ITbJ3RJUklBXp1i?w=1024&h=1024&rs=1&pid=ImgDetMain"
        alt="Footer Logo"
        width="50"
        height="50"
        className="mr-4 rounded"
      /><span>Life Notes</span>
    </div>
    <div className="flex flex-grow justify-end space-x-8">
      <div className="mt-4 md:mt-0">
        <h5 className="links text-lg font-semibold">Opciones</h5>
        <ul className="list-none">
        <li><a className="text-white  hover:text-grey-500" onClick={handleNosotros} href="">Nosotros</a></li>
          <li><a href="https://openai.com/" className="text-white  hover:text-grey-500">OpenAI</a></li>
          <li><a href="https://github.com/DavidTorres09/LifeNotes" className="text-white  hover:text-grey-500">GitHub</a></li>
          
        </ul>
      </div>
      <div className="mt-4 md:mt-0">
        <h5 className="text-lg font-semibold links">Redes Sociales</h5>
        <ul className="list-none">
          <li><a href="https://www.facebook.com/" className="mr-3 text-white  hover:text-grey-500">Facebook</a></li>
          <li><a href="https://x.com/?mx=2" className="mr-3 text-white  hover:text-grey-500">Twitter</a></li>
          <li><a href="https://www.instagram.com/" className="text-white  hover:text-grey-500">Instagram</a></li>
        </ul>
      </div>
    </div>
  </div>
</footer>
</div>
    
    
  );
};

export default HomeNavBar;