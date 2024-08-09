import React, { useState } from 'react';
import RegisterForm from '../components/forms/RegisterForm';
import ErrorModal from '../components/modals/ErrorModal';
import '../styles/register.css'; 

export const Register: React.FC = () => {
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
      <RegisterForm onError={handleShowError} />
      {isModalOpen && (
        <ErrorModal message={errorMessage} onClose={handleCloseModal} />
      )}
    </div>
  );
};
