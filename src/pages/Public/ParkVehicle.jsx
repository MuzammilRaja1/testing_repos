import React, { useState } from 'react';
import { useParkVehicleMutation } from '../../service/vehicleApi';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const ParkVehicle = () => {
  const param = useParams();

  const [vehicleSize, setVehicleSize] = useState(1);
  const [plateNumber, setPlateNumber] = useState('');
  const [parkingLotId, setParkingLotId] = useState(parseInt(param.id));
  const [ticketId, setTicketId] = useState(null);
  const [ticketDetails, setTicketDetails] = useState(null);

  const [parkVehicle, { isLoading, isSuccess, isError, error }] = useParkVehicleMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const vehicleData = {
      vehicleSizeId: vehicleSize,
      plateNumber: plateNumber,
      parkingLotId: parkingLotId,
    };
    localStorage.setItem("slot_id", JSON.stringify(param.id));

    try {
      const response = await parkVehicle(vehicleData).unwrap();

     
      console.log("Parked Vehicle Response:", response.data);

      const parkedVehicle = response.data;

      
      const ticketStatus = parkedVehicle.ticketStatus || 'Active';

      setTicketId(parkedVehicle.id);
      setTicketDetails({
        plateNumber: parkedVehicle.plate_number,
        vehicleSizeId: parkedVehicle.vehicle_size_id,
        ticketStatus: ticketStatus,
        parkingSlot: parkedVehicle.slot_id,
        parkedAt: parkedVehicle.park_at,
       
      });

      setPlateNumber('');
      setVehicleSize(1);
      setParkingLotId(1);
    } catch (err) {
      toast.error('Error parking vehicle: ' + (err?.message || 'Unknown error'));
    }
  };


  
  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-black">Park a Vehicle</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
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

        <div>
          <label htmlFor="parkingLotId" className="block text-sm font-medium text-gray-700">Parking Lot</label>
          <input
            id="parkingLotId"
            value={param.id}
            readOnly
            className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md"
          />
        </div>

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

        {isSuccess && (
          <div className="text-green-600 mt-2">
            <p>Successfully Parked</p>
          </div>
        )}
      </form>

      {ticketId && ticketDetails && (
        <div className="mt-6 p-4 bg-gray-100 rounded-md">
          <h3 className="text-xl font-semibold">Your Ticket</h3>
          <p><strong>Ticket ID:</strong> {ticketId}</p>
          <p><strong>Plate Number:</strong> {ticketDetails.plateNumber}</p>
          <p><strong>Vehicle Size:</strong> {ticketDetails.vehicleSizeId === 1 ? 'Small' : ticketDetails.vehicleSizeId === 2 ? 'Medium' : 'Large'}</p>
          <p><strong>Parked At:</strong> {new Date(ticketDetails.parkedAt).toLocaleString()}</p>
        
          <p><strong>Ticket Status:</strong> {ticketDetails.ticketStatus}</p>
        </div>
      )}
    </div>
  );
};

export default ParkVehicle;
