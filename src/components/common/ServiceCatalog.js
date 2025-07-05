import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../api';

const ServiceCatalog = ({ isPortal = false }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await api.get('/services');
        setServices(res.data);
      } catch (err) {
        console.error("Failed to fetch services:", err);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {services.map((service) => (
        <div key={service.id} className="flex flex-col overflow-hidden bg-white rounded-lg shadow-lg">
          <div className="flex-1 p-6">
            <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
            <p className="mt-3 text-base text-gray-500">{service.description}</p>
            <p className="mt-4 text-lg font-bold text-gray-700">Fee: ₱{service.fees}</p>
          </div>
          <div className="p-6 bg-gray-50">
            <Link
              to={isPortal ? `/portal/new-application?service=${service.id}` : '/login'}
              className="block w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-600 rounded-md hover:bg-blue-700"
            >
              Apply Now
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ServiceCatalog;