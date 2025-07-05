import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ServiceCatalog from '../components/common/ServiceCatalog'; // Corrected import path

const NewApplicationPage = () => {
  const [searchParams] = useSearchParams();
  const serviceId = searchParams.get('service');
  const [service, setService] = useState(null);

  useEffect(() => {
    const fetchServiceDetails = async () => {
      if (serviceId) {
        // This part would ideally fetch from a dedicated /api/services/:id endpoint
        const services = {
            '1': { id: 1, name: 'Business Permit Renewal', formType: 'business_permit_renewal' },
            '2': { id: 2, name: 'Real Property Tax Payment', formType: 'real_property_tax'},
            '3': { id: 3, name: 'Community Tax Certificate (Cedula)', formType: 'cedula'},
            '4': { id: 4, name: 'Local Civil Registry Request', formType: 'civil_registry'}
        };
        setService(services[serviceId]);
      } else {
        setService(null);
      }
    };
    fetchServiceDetails();
  }, [serviceId]);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Submit logic goes here!');
  };

  const renderFormFields = () => {
    // This function can be built out later
    return <p>Form fields for {service?.name} will go here.</p>
  };

  return (
    <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
      {serviceId ? (
        <div className="bg-white rounded-lg shadow-md p-8">
          <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">
            {service ? service.name : 'New Application'}
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            {renderFormFields()}
            {service && (
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
              >
                Submit Application
              </button>
            )}
          </form>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-bold text-gray-800 mb-6">Select a Service</h1>
          <ServiceCatalog isPortal={true} />
        </div>
      )}
    </div>
  );
};

export default NewApplicationPage;