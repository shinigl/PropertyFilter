import React, { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import Modal from './Modal'; // Import the Modal component

const PropertyCard = ({ property, toggleFavorite, isFavorited }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-blue-50 p-5 rounded-xl shadow-lg transition-transform transform hover:scale-105">
      <img
        src={property.image}
        alt={property.name}
        className="w-full h-52 object-cover rounded-lg cursor-pointer"
        onClick={openModal} // Open modal when the image is clicked
      />
      <div className="mt-3 flex items-center">
        <h3 className="text-xl font-bold text-blue-800">{property.name}</h3>
        <div
          onClick={() => toggleFavorite(property)}
          className="ml-2 cursor-pointer"
        >
          {isFavorited ? (
            <AiFillHeart className="text-red-600" />
          ) : (
            <AiOutlineHeart className="text-gray-400" />
          )}
        </div>
      </div>
      <p className="text-gray-700">{property.location}</p>
      <p className="text-blue-600 font-semibold text-lg">${property.price}/month</p>
      <div className="flex justify-between text-gray-600 mt-2 text-sm">
        <span>{property.beds} Beds</span>
        <span>{property.bathrooms} Bathrooms</span>
        <span>{property.size}m²</span>
      </div>
      {property.popular && (
        <span className="bg-green-200 text-green-800 px-3 py-1 rounded-full text-xs font-medium mt-3 inline-block">
          Popular
        </span>
      )}

      {/* Modal component */}
      {isModalOpen && <Modal image={property.image} onClose={closeModal} />}
    </div>
  );
};

export default PropertyCard;
