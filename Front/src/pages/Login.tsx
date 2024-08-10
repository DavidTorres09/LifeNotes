import React, { useState } from 'react';
import LoginForm from '../components/forms/LoginForm';
import ErrorModal from '../components/modals/ErrorModal';
import '../styles/login.css'; 

export const Login: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleShowError = (message: string) => {
    setErrorMessage(message);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setErrorMessage('');
  };

  return (
    <div className="bg-register flex justify-center items-center min-h-screen">
      <LoginForm onError={handleShowError} />
      {isModalOpen && (
        <ErrorModal message={errorMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
};
