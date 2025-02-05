// components/Modal.js
import { useState } from 'react';

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg p-6 w-80">
        <button onClick={onClose} className="float-right text-gray-500 hover:text-black">
          &times;
        </button>
        <p>Some text in the Modal..</p>
      </div>
    </div>
  );
};

export default Modal;