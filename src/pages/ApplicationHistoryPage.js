import React, { useState, useEffect } from 'react';
import api from '../api';

const ApplicationHistoryPage = () => {
  const [applications, setApplications] = useState([]);
  const [filter, setFilter] = useState('All');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const res = await api.get('/applications');
        setApplications(res.data);
      } catch (err) {
        console.error("Failed to fetch application history:", err);
      }
    };
    fetchApplications();
  }, []);

  const filteredApplications = applications.filter(app => {
    if (filter === 'All') return true;
    return app.status.toLowerCase() === filter.toLowerCase();
  });

  return (
    <div className="p-4 sm:p-6 lg:p-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Application History</h1>
      <div className="mb-4">
        <label htmlFor="status-filter" className="sr-only">Filter by status</label>
        <select
          id="status-filter"
          name="status-filter"
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
          onChange={(e) => setFilter(e.target.value)}
          value={filter}
        >
          <option>All</option>
          <option>Pending</option>
          <option>For Review</option>
          <option>Requires Payment</option>
          <option>Approved</option>
          <option>Completed</option>
        </select>
      </div>
      <div className="overflow-x-auto bg-white rounded-lg shadow-md">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Service</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date Submitted</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {filteredApplications.map((application) => (
              <tr key={application.id}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{application.Service.name}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                   <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                      application.status === 'In Progress' || application.status === 'For Review' ? 'bg-blue-100 text-blue-800' :
                      application.status === 'Requires Payment' ? 'bg-yellow-100 text-yellow-800' :
                      application.status === 'Completed' || application.status === 'Approved' ? 'bg-green-100 text-green-800' :
                      'bg-gray-100 text-gray-800'
                    }`}>
                      {application.status}
                    </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(application.submittedDate).toLocaleDateString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ApplicationHistoryPage;