import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const reserveApi = createApi({
  reducerPath: "reserveApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    reserveUnit: builder.mutation({
      query: ({ reserveInfo, unitId }) => ({
        url: `reservation/reserve/${unitId}`,
        method: "POST",
        body: reserveInfo,
      }),
    }),

    editReserve: builder.mutation({
      query: (reserveId) => ({
        url: `reservation/reserve/${reserveId}`,
        method: "PATCH",
      }),
    }),

    history: builder.query({
      query: (unitId) => ({
        url: `reservation/history/${unitId}`,
        method: "GET",
      }),
    }),

    cancelReserve: builder.mutation({
      query: (reserveId) => ({
        url: `reservation/cancel/${reserveId}`,
        method: "PATCH",
      }),
    }),

    singleReserve: builder.mutation({
      query: (reserveId) => `reservation/single/${reserveId}`,
    }),

    allReserve: builder.query({
      query: () => "reservation/all",
    }),

    checkIn: builder.mutation({
      query: (reserveId) => `reservation/check-in/${reserveId}`,
    }),

    checkOut: builder.mutation({
      query: (reserveId) => `reservation/check-out/${reserveId}`,
    }),
  }),
});

export const {
  useReserveUnitMutation,
  useEditReserveMutation,
  useHistoryQuery,
  useCancelReserveMutation,
  useSingleReserveMutation,
  useAllReserveQuery,
  useCheckInMutation,
  useCheckOutMutation,
} = reserveApi;
