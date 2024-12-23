import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_API_URL_DATA


export const vehicleApi = createApi({
  reducerPath: 'vehicleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`,
  }),
  endpoints: (builder) => ({
    parkVehicle: builder.mutation({
      query: (data) => ({
        url: 'vehicle/park',
        method: 'POST',
        body: data,
      }),
    }),
    
    
    exitVehicle: builder.mutation({
      query: (ticketId) => ({
        url: 'vehicle/exit',
        method: 'POST',
        body: { ticketId }, 
      }),
    }),
  }),
});

export const { useParkVehicleMutation, useExitVehicleMutation } = vehicleApi;
