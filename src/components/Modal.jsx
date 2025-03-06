import React from 'react';

const Modal = ({ image, onClose }) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when the image is clicked
      >
        <img
          src={image}
          alt="Property"
          className="max-w-full max-h-screen object-contain rounded-lg"
        />
        <button
          className="absolute top-5 right-5 text-white bg-black bg-opacity-50 p-2 rounded-full"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
