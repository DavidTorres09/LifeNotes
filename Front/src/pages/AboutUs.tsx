
import { ArrowLeftIcon  } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../styles/glassNav.css';


const AboutUs = () => {
    const navigate = useNavigate();

  const handleIndex = () => {
    sessionStorage.clear();
    navigate('/');
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
        <a className="flex items-center space-x-1 hover:text-[#F9A8D4] transition-colors" onClick={handleIndex}  href="">
          <ArrowLeftIcon className="w-5 h-5 text-color: #6D4C41;" />
          <span>Volver a Inicio</span>
        </a>
      </div>
    </div>
  </nav>
  <div className="h-full flex-grow flex justify-center">
  <div className="w-full custom-max-width p-8 rounded-lg shadow-lg m-6">
    <div className="flex justify-center mb-8">
      <img
        src="https://th.bing.com/th/id/OIG4.NoDP5ITbJ3RJUklBXp1i?w=1024&h=1024&rs=1&pid=ImgDetMain"
        alt="Footer Logo"
        width="150"
        height="50"
        className="rounded"
      />
    </div>
    <h2 className="text-center text-2xl font-semibold comofuncionaText">LifeNotes</h2>
    <p className="text-center text-lg mt-2 comofuncionaText">
      "Expresa, reflexiona, crece: tu bienestar emocional en cada palabra."
    </p>
    <div className="flex justify-center mt-8">
      <div className="flex flex-col items-start card p-6 rounded-lg shadow-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">
          <span>Visión</span>
        </h3>
        <p className="text-justify">
        Ser la plataforma líder en bienestar emocional, donde cada usuario pueda explorar y comprender sus sentimientos, recibir apoyo personalizado y encontrar motivación a través de la inteligencia artificial, fomentando una comunidad de crecimiento personal y resiliencia.
        </p>
      </div>
      <div className="flex flex-col items-start card p-6 rounded-lg shadow-md w-full mx-4">
        <h3 className="text-xl font-bold mb-4">
          <span>Misión</span>
        </h3>
        <p className="text-justify">
        Facilitar un espacio seguro y accesible para que las personas registren sus emociones y reflexiones diarias. A través de la inteligencia artificial, ofrecemos consejos motivacionales y herramientas prácticas que empoderan a los usuarios a gestionar su bienestar emocional, promoviendo la autoexploración y el desarrollo personal.
        </p>
      </div>
    </div>
    <div className="flex items-center justify-center my-8">
      <img
        src="src/assets/nosotrosImg1.jpg"
        alt="Imagen 1"
        className="rounded"
        width="450"
        height="50"
      />
      <p className="ml-4 text-lg comofuncionaText text-justify">
      Obtené consejos es una funcionalidad diseñada para brindarte apoyo emocional en cualquier momento. Al registrar tus emociones y pensamientos, nuestra inteligencia artificial analiza tus notas y te ofrece consejos personalizados que buscan motivarte, ayudarte a superar desafíos y fomentar un estado mental positivo. Ya sea que estés enfrentando un día difícil o simplemente necesites un impulso de ánimo, la IA está aquí para ofrecerte palabras de sabiduría y apoyo, guiándote hacia una mayor comprensión de ti mismo y tu bienestar emocional.
      </p>
    </div>
    <div className="flex items-center justify-center my-8 flex-row-reverse">
      <img
        src="src/assets/nosotrosImg2.jpg"
        alt="Imagen 2"
        className="rounded"
        width="450"
        height="50"
      />
      <p className="mr-4 text-lg comofuncionaText text-justify">
      Cómo te sientes hoy? Es la puerta de entrada para explorar y comprender tu estado emocional diario. Con esta función, puedes registrar tus sentimientos de manera rápida y sencilla, permitiéndote llevar un seguimiento de tus emociones a lo largo del tiempo. Es un espacio donde puedes expresar tus alegrías, preocupaciones, y cualquier otra emoción que estés experimentando. Al capturar estos momentos, no solo estás liberando tus pensamientos, sino también construyendo un mapa emocional que te ayudará a identificar patrones y obtener una perspectiva más clara sobre tu bienestar general.
      </p>
    </div>
    <div className="flex items-center justify-center my-8">
      <img
        src="src/assets/nosotrosImg3.jpg"
        alt="Imagen 3"
        className="rounded"
        width="450"
        height="50"
      />
      <p className="ml-4 text-lg comofuncionaText text-justify">
      Tu salud mental es importante es un recordatorio fundamental de que tu bienestar emocional merece la misma atención que tu salud física. En un mundo lleno de desafíos y constantes cambios, es esencial dedicar tiempo a cuidar de tu mente. Esta función te invita a priorizar tu salud mental, ofreciéndote herramientas para explorar y comprender tus emociones, así como acceso a consejos personalizados que te ayuden a mantener el equilibrio y la resiliencia. Reconocer y atender tu salud mental no solo mejora tu calidad de vida, sino que también te empodera para enfrentar cada día con mayor fortaleza y claridad.
      </p>
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
        <li><a className="text-white  hover:text-grey-500">Nosotros</a></li>
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
}
export default AboutUs;