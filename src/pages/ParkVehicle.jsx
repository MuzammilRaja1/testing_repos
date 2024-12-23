
import React, { useState } from 'react';
import { useParkVehicleMutation } from '../service/vehicleApi';
import { toast } from 'react-toastify'; 

const ParkVehicle = () => {
  const [vehicleSize, setVehicleSize] = useState(1); 
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingLotId, setParkingLotId] = useState(1); 

  const [parkVehicle, { isLoading, isSuccess, isError, error }] = useParkVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vehicleData = {
      vehicleSizeId: vehicleSize,
      plateNumber: plateNumber,
      parkingLotId: parkingLotId,
    };

    try {
      const response = await parkVehicle(vehicleData).unwrap(); 
      toast.success('Vehicle parked successfully!');
     
      setPlateNumber('');
      setVehicleSize(1);
      setParkingLotId(1);
    } catch (err) {
      console.log("error--->" , err);
      toast.error('Error parking vehicle: ' + (err?.message || 'Unknown error'));
    }
    
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-black">Park a Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Size */}
        <div>
          <label htmlFor="vehicleSize" className="block text-sm font-medium text-gray-700">Vehicle Size</label>
          <select
            id="vehicleSize"
            value={vehicleSize}
            onChange={(e) => setVehicleSize(Number(e.target.value))}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Small</option>
            <option value={2}>Medium</option>
            <option value={3}>Large</option>
          </select>
        </div>

        {/* Plate Number */}
        <div>
          <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">Plate Number</label>
          <input
            id="plateNumber"
            name="plateNumber"
            type="text"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>

        {/* Parking Lot */}
        <div>
          <label htmlFor="parkingLotId" className="block text-sm font-medium text-gray-700">Parking Lot</label>
          <select
            id="parkingLotId"
            value={parkingLotId}
            onChange={(e) => setParkingLotId(Number(e.target.value))}
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value={1}>Lot 1</option>
            <option value={2}>Lot 2</option>
            <option value={3}>Lot 3</option>
          </select>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700"
          disabled={isLoading}
        >
          {isLoading ? 'Parking Vehicle...' : 'Park Vehicle'}
        </button>
        {isError && (
          <div className="text-red-600 mt-2">
            <p>Error: {error.message}</p>
          </div>
        )}

        {/* Success message */}
        {isSuccess && (
          <div className="text-green-600 mt-2">
            <p>Parking  Successfully!</p>
          </div>
        )}
      </form>
    </div>
  );
};

export default ParkVehicle;
