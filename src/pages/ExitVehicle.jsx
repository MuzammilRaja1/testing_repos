
import React, { useState } from 'react';
import { useExitVehicleMutation } from '../service/vehicleApi';
import { toast } from 'react-toastify';  

const ExitVehicle = () => {
  const [ticketId, setTicketId] = useState('');
  const [exitVehicle, { isLoading, isSuccess, isError, error }] = useExitVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ticketId) {
      toast.error('Please enter a ticket ID!');
      return;
    }

    try {
    
      const response = await exitVehicle(ticketId).unwrap();
      toast.success('Vehicle exited successfully!');
      setTicketId('');
    } catch (err) {
      toast.error('Error exiting vehicle: ' + (err?.message || 'Unknown error'));
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-black">Exit a Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
   
        <div>
          <label htmlFor="ticketId" className="block text-sm font-medium text-gray-700">Ticket ID</label>
          <input
            id="ticketId"
            name="ticketId"
            type="number"
            value={ticketId}
            onChange={(e) => setTicketId(e.target.value)}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

      
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Exiting Vehicle...' : 'Exit Vehicle'}
        </button>

     
        {isError && (
          <div className="text-red-600 mt-2">
            <p>Error: {error.message}</p>
          </div>
        )}

       
        {isSuccess && (
          <div className="text-green-600 mt-2">
            <p>Vehicle exited successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ExitVehicle;
