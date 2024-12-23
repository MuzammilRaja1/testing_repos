import React, { useEffect, useState } from "react";
import { useGetParkingSlotsQuery } from "../../service/parkingApi";
import { Link, useNavigate } from "react-router-dom";

const ParkingLot = () => {
  const { data, error, isLoading, refetch } = useGetParkingSlotsQuery();
  const [occupiedSlots, setOccupiedSlots] = useState(
    JSON.parse(localStorage.getItem("slot_ids")) || []
  );
  const navigate = useNavigate();

  useEffect(() => {

    localStorage.setItem("slot_ids", JSON.stringify(occupiedSlots));
  }, [occupiedSlots]);

  const handleSlotClick = (slotId) => {
    if (!occupiedSlots.includes(slotId)) {
      navigate(`/park-vehicle/${slotId}`);
    }
  };

  const markSlotAsOccupied = (slotId) => {
    setOccupiedSlots((prev) => [...prev, slotId]);
  };

  if (isLoading) return <p className="text-center text-lg">Loading...</p>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold text-center mb-6">Parking Lot Status</h1>
      <div className="grid grid-cols-5 gap-4">
        {data && data.data.length > 0 ? (
          data.data.map((slot) => (
            occupiedSlots.includes(slot.id) ? (
              <div
                key={slot.id}
                className="bg-red-300 w-24 h-24 flex items-center justify-center text-white font-bold rounded-md cursor-not-allowed"
              >
                <span className="text-sm">Slot {slot.id}</span>
              </div>
            ) : (
              <div
                key={slot.id}
                onClick={() => handleSlotClick(slot.id)}
                className="bg-green-300 w-24 h-24 flex items-center justify-center text-white font-bold rounded-md cursor-pointer"
              >
                <span className="text-sm">Slot {slot.id}</span>
              </div>
            )
          ))
        ) : (
          <p className="text-center col-span-5">No parking slots available</p>
        )}
      </div>
    </div>
  );
};

export default ParkingLot;
