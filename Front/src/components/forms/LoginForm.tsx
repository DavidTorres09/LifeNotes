import React, { useState } from 'react';
import { UserIcon, LockClosedIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

interface LoginFormProps {
  onError: (message: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onError }) => {
  const navigate = useNavigate();

  const handleIndex = () => {
    navigate('/index');
  }

  const handleRegister = () => {
    navigate('/register');
  }

  const [formData, setFormData] = useState({
    user: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (formData.user.length < 3) {
      onError('El nombre de usuario debe tener al menos 3 caracteres.');
      return;
    }
    if (formData.password.length < 6) {
      onError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    try {
      const response = await axios.post('http://localhost:5023/api/lifenotes/user/login', {
        user: formData.user,
        password: formData.password
      });

      if (response.status === 200) {
        const { id, user, email, name, age, password } = response.data;

        sessionStorage.setItem('userId', id);
        sessionStorage.setItem('user', user);
        sessionStorage.setItem('email', email);
        sessionStorage.setItem('name', name);
        sessionStorage.setItem('age', age.toString());
        sessionStorage.setItem('password', password);

        console.log('Login exitoso');
        handleIndex();
      }
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        if (error.response.status === 400) {
          onError('Usuario o contraseña inválidos');
        } else {
          onError(`Error: ${error.response.status}`);
        }
      } else {
        onError('Error en la solicitud: ' + error.message);
      }
    }
  };

  return (
    <div className="login-form p-6 w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4 text-center">Iniciar sesión</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <div className="flex items-center space-x-2">
          <UserIcon className="w-5 h-5 mt-5 text-[#6D4C41]" />
          <div className="flex-1">
            <label htmlFor="user" className="block text-sm mb-1 text-white">Usuario</label>
            <input
              type="text"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="w-full p-2 border rounded-lg border-[#F1A6A1] text-sm focus:border-[#FFABAB] focus:ring-0 transition-all"
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
        <button
          type="submit"
          className="w-full py-2 bg-[#F9A8D4] text-white rounded-lg hover:bg-[#F472B6] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F472B6] focus:ring-offset-2 text-sm"
        >
          Iniciar sesión
        </button>
      </form>
      <p className="mt-4 text-center text-gray-600 text-sm" onClick={handleRegister}>
        ¿No tienes una cuenta? <a href="/register" className="text-blue-500 hover:underline">Regístrate</a>
      </p>
    </div>
  );
};

export default LoginForm;
