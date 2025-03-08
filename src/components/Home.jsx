import React, { useState } from 'react';
import Filters from '../components/FilterSection';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {
  const [filters, setFilters] = useState({
    location: '', 
    moveInDate: '',
    priceRange: '', 
    propertyType: '' 
  });

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-4">
        <Filters onFilter={handleFilter} />
     
      </div>
      <Footer />
    </div>
  );
};

export default Home;