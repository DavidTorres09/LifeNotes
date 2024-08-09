import React from 'react';
import '../../styles/errorModal.css';

interface ErrorModalProps {
  message: string;
  onClose: () => void;
}

const ErrorModal: React.FC<ErrorModalProps> = ({ message, onClose }) => {
  return (
    <div className="errorModal fixed inset-0 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-md z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full text-center">
        <h3 className="text-lg font-semibold text-red-600">Error</h3>
        <p className="mt-2 text-black">{message}</p>
        <button
          onClick={onClose}
          className="mt-4 w-full py-2 bg-[#F9A8D4] text-white rounded-lg hover:bg-[#F472B6] transition-all transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#F472B6] focus:ring-offset-2"
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default ErrorModal;
