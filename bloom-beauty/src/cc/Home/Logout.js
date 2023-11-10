import React from 'react';
import { useNavigate } from 'react-router-dom';

function Logout({ onLogout }) {
  const navigate = useNavigate();

  const handleLogout = () => {   
    onLogout();    
    navigate('/');
  };

  const handleCancel = () => {    
    navigate('/products'); 
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="max-w-md p-4 border rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Logout Page</h2>
        <div className="bg-blue-100 p-4 rounded-md">
          <p className="text-blue-800">Are you sure you want to log out?</p>
          <div className="mt-4">
            <button
              onClick={handleLogout}
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Logout
            </button>
            <button
              onClick={handleCancel}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 px-4 py-2 rounded-md"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Logout;
