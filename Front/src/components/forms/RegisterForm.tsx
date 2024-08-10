import React, { useState } from 'react';
import { UserIcon, UserCircleIcon, EnvelopeIcon, CalendarIcon, LockClosedIcon, KeyIcon } from '@heroicons/react/24/solid';


interface RegisterFormProps {
  onError: (message: string) => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onError }) => {
  const [formData, setFormData] = useState({
    username: '',
    name: '',
    email: '',
    age: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'age' ? Math.max(0, Number(value)).toString() : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.email.includes('@')) {
      onError('Por favor, ingresa un correo electrónico válido.');
      return;
    }
    if (formData.username.length < 3) {
      onError('El nombre de usuario debe tener al menos 3 caracteres.');
      return;
    }
    if (Number(formData.age) < 0) {
      onError('La edad no puede ser negativa.');
      return;
    }
    if (formData.password.length < 6) {
      onError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }
    if (formData.password !== formData.confirmPassword) {
      onError('Las contraseñas no coinciden.');
      return;
    }
  };

  return (
    <div className="register-form p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">Regístrate</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center space-x-2">
          <UserIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="username" className="block text-sm mb-1 text-white">Usuario</label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <UserCircleIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="name" className="block text-sm mb-1 text-white">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <EnvelopeIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="email" className="block text-sm mb-1 text-white">Correo</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <CalendarIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="age" className="block text-sm mb-1 text-white">Edad</label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              min="1"
              step="1"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <LockClosedIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="password" className="block text-sm mb-1 text-white">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              required
            />
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <KeyIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="confirmPassword" className="block text-sm mb-1 text-white">Confirmar Contraseña</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
              required
            />
          </div>
        </div>
        <button
          type="submit"
          className="w-full py-2 bg-[#F9A8D4] text-white rounded-lg hover:bg-[#F472B6] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F472B6] focus:ring-offset-2 text-sm"
        >
          Regístrate
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600 text-sm">
        ¿Ya tienes una cuenta? <a href="/login" className="text-blue-500 hover:underline">Inicia sesión</a>
      </p>
    </div>
  );
};

export default RegisterForm;
