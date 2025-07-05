import React from 'react';
import ServiceCatalog from '../components/common/ServiceCatalog'; // Corrected import path

const ServiceCatalogPage = () => {
  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Service Catalog</h1>
        <p className="mt-2 text-lg text-gray-600">
          Login to apply for any of our available services.
        </p>
      </div>
      <ServiceCatalog isPortal={false} />
    </div>
  );
};

export default ServiceCatalogPage;