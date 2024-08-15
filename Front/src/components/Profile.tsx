import React from 'react';
import { UserIcon, DocumentTextIcon, ChartBarIcon } from '@heroicons/react/24/solid';
import '../styles/profile.css'

const exampleData = {
  username: 'johndoe',
  name: 'John Doe',
  email: 'johndoe@example.com',
  registrationDate: '2023-01-15',
  lastAccess: '2024-08-14',
  totalNotesWritten: 50,
  totalNotesPublished: 30,
  notesLastMonthWritten: 5,
  countEmotionsLastMonth: 'happy'
};

const Profile: React.FC = () => {
  return (
    <div className="flex items-center justify-center mt-10">
      <div className="user-profile p-6 w-full max-w-lg bg-gray-800 text-white rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4 text-center">Perfil de Usuario</h2>
        
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <UserIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <h3 className="text-lg font-medium">{exampleData.username}</h3>
              <p className="text-sm">Nombre: {exampleData.name}</p>
              <p className="text-sm">Correo: {exampleData.email}</p>
              <p className="text-sm">Fecha de Registro: {exampleData.registrationDate}</p>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <DocumentTextIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <p className="text-sm">Cantidad Total de Notas Escritas este mes: {exampleData.totalNotesWritten}</p>
              <p className="text-sm">Cantidad de Notas Totales: {exampleData.totalNotesPublished}</p>
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h3 className="text-lg font-medium mb-2">Análisis del Último Mes</h3>
          <div className="flex items-center space-x-2 mb-4">
            <ChartBarIcon className="w-5 h-5 text-[#6D4C41]" />
            <div>
              <p className="text-sm">Estado de ánimo más utilizado este mes: {exampleData.countEmotionsLastMonth}</p>
            </div>
          </div>
          <div className="flex justify-center space-x-4">
            <button
              className="py-2 px-4 bg-[#F9A8D4] text-white rounded-lg hover:bg-[#F472B6] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F472B6] focus:ring-offset-2 text-sm"
              onClick={() => alert('Ver Resumen Mensual')}
            >
              Ver Resumen Mensual
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
