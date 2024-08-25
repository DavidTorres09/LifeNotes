import React from 'react';
import { HomeIcon, DocumentTextIcon, UserCircleIcon, XMarkIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import '../../styles/glassNav.css';

const NavBarDefault: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    sessionStorage.clear();
    navigate('/');
  }

  const handleIndex = () => {
    navigate('/index');
  }

  const handleMyNotes = () => {
    navigate('/mynotes');
  }

  const handleMyProfile = () => {
    navigate('/myprofile');
  }
  
  return (
    <nav className="navbar">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        <div className="logo flex items-center space-x-2">
          <img src="https://th.bing.com/th/id/OIG4.NoDP5ITbJ3RJUklBXp1i?w=1024&h=1024&rs=1&pid=ImgDetMain" alt="Logo" />
          <span>Life Notes</span>
        </div>

        <div className="nav-links flex space-x-4">
          <a href="" className="flex items-center space-x-1 hover:text-[#F9A8D4] transition-colors" onClick={handleIndex}>
            <HomeIcon className="w-5 h-5 text-color: #6D4C41;" />
            <span>Inicio</span>
          </a>
          <a href="" className="flex items-center space-x-1 hover:text-[#F9A8D4] transition-colors" onClick={handleMyNotes}>
            <DocumentTextIcon className="w-5 h-5 text-color: #6D4C41;" />
            <span>Mis notas</span>
          </a>
          <a href="" className="flex items-center space-x-1 hover:text-[#F9A8D4] transition-colors" onClick={handleMyProfile}>
            <UserCircleIcon className="w-6 h-6 color: #6D4C41;" />
            <span>Mi Perfil</span>
          </a>
        </div>

        <a href="" className="profile flex items-center space-x-2 hover:text-[#F9A8D4] transition-colors" onClick={handleLogout}>
            <XMarkIcon className="w-5 h-5 text-color: #6D4C41;" />
            <span>Salir </span>
        </a>
        
      </div>
    </nav>
  );
};

export default NavBarDefault;
