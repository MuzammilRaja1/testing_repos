import React, { useState } from 'react';
import { useCreateParkingLotMutation } from '../../../service/parkingLotApi';
import '../../../index.css';  

const CreateLot = () => {
  const [lotData, setLotData] = useState({
    name: '',
    rank: 0,
    slotkey: 0,
  });


  const [successMessage, setSuccessMessage] = useState('');
  const [createParkingLot, { isLoading, isError, error }] = useCreateParkingLotMutation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLotData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        name: lotData.name,
        rank: lotData.rank,
        nSlotsKey: { 1: 1, 2: 2, 3: 3 },  
      };

      const response = await createParkingLot(payload).unwrap(); 

      console.log('Parking Lot Created:', response);

     
      setSuccessMessage('Parking Lot Created Successfully!');
      setLotData({
        name: '',
        rank: 0,
        slotkey: 0,
      });

    } catch (err) {
      console.error('Error creating parking lot:', err);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-black">Create a Parking Lot</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
            Lot Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={lotData.name}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
            required
          />
        </div>

        <div>
          <label htmlFor="rank" className="block text-sm font-medium text-gray-700">
            Rank
          </label>
          <input
            type="number"
            id="rank"
            name="rank"
            value={lotData.rank}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
            required
          />
        </div>
        
        <div>
          <label htmlFor="slotkey" className="block text-sm font-medium text-gray-700">
            Slot Key
          </label>
          <input
            type="number"
            id="slotkey"
            name="slotkey"
            value={lotData.slotkey}
            onChange={handleChange}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Creating Lot...' : 'Create Lot'}
        </button>

    
        {isError && (
          <div className="text-red-600 mt-2">
            <p>Error: {error.message}</p>
          </div>
        )}


        {successMessage && (
          <div className="text-green-600 mt-2">
            <p>{successMessage}</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateLot;
