import React, { useState } from "react";
import { properties } from "../data/properties";

const Filters = ({ onFilter }) => {
  const [filters, setFilters] = useState({
    location: "",
    moveInDate: "",
    priceRange: "",
    propertyType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedFilters = { ...filters, [name]: value };
    setFilters(updatedFilters);
    onFilter(updatedFilters);
  };

  const uniqueLocations = ["", ...new Set(properties.map((p) => p.location.split(",")[1].trim()))];
  const uniquePropertyTypes = ["", ...new Set(properties.map((p) => p.type))];

  return (
    <section className="bg-blue-600 text-white p-6 rounded-lg shadow-lg mb-6">
      <h2 className="text-2xl font-bold text-center mb-4">Find Your Rental Home</h2>
      <div className="flex flex-col md:flex-row items-center justify-center md:space-x-4 space-y-4 md:space-y-0">
        
        {/* Location Filter */}
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Locations</option>
          {uniqueLocations.filter((loc) => loc).map((loc) => (
            <option key={loc} value={loc}>{loc}</option>
          ))}
        </select>

        {/* Move-in Date */}
        <input
          type="date"
          name="moveInDate"
          value={filters.moveInDate}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        />

        {/* Price Range Filter */}
        <select
          name="priceRange"
          value={filters.priceRange}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Prices</option>
          <option value="$500-$2,500">$500 - $2,500</option>
          <option value="$2,500-$5,000">$2,500 - $5,000</option>
          <option value="$5,000+">$5,000+</option>
        </select>

        {/* Property Type Filter */}
        <select
          name="propertyType"
          value={filters.propertyType}
          onChange={handleChange}
          className="bg-white text-gray-800 border-none p-3 rounded-md w-full md:w-auto cursor-pointer"
        >
          <option value="">All Types</option>
          {uniquePropertyTypes.filter((type) => type).map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>

        {/* Search Button */}
        <button
          className="bg-yellow-400 text-black px-5 py-3 rounded-md w-full md:w-auto font-semibold hover:bg-yellow-500 cursor-pointer"
          onClick={() => onFilter(filters)}
        >
          Search
        </button>
      </div>
    </section>
  );
};

export default Filters;
