
import { configureStore } from '@reduxjs/toolkit';
import { vehicleApi } from '../service/vehicleApi';  // Import the vehicle API service
import { parkingApi } from '../service/parkingApi';  // Import the correct parkingApi service

export const store = configureStore({
  reducer: {
    
    [vehicleApi.reducerPath]: vehicleApi.reducer,
    [parkingApi.reducerPath]: parkingApi.reducer,  
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(vehicleApi.middleware)  // Add vehicleApi middleware
      .concat(parkingApi.middleware),  // Add parkingApi middleware (this should match the import above)
});
