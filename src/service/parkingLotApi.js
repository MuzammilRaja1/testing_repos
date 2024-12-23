import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const BASE_URL = import.meta.env.VITE_API_URL_DATA
console.log("testing")
export const parkingLotApi = createApi({
  reducerPath: 'parkingLotApi',
  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}`, 
    prepareHeaders: (headers) => {
   
      headers.set('Content-Type', 'application/json');
      return headers;
    },
  }),
  endpoints: (builder) => ({
    // Define the POST /parking_lot endpoint
    createParkingLot: builder.mutation({
      query: (lotData) => ({
        url: '/parking_lot',
        method: 'POST',
        body: lotData,
      }),
    }),
  }),
});

export const { useCreateParkingLotMutation } = parkingLotApi;
