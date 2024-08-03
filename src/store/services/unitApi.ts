import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const unitApi = createApi({
  reducerPath: "unitApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:4000/" }),
  endpoints: (builder) => ({
    addUnit: builder.mutation({
      query: (unitInfo) => ({
        url: "unit/add-unit",
        method: "POST",
        body: unitInfo,
      }),
    }),

    editUnit: builder.mutation({
      query: (unitId) => ({
        url: `unit/edit-unit${unitId}`,
        method: 'PATCH'
      }),  
    }),

    getUnit: builder.query({
      query: (id) => ({
        url: `unit/single-unit/${id}`,
        method: "GET",
      }),
    }),

    getUnits: builder.query({
      query: () => "unit/all",
    }),

    filterUnits: builder.query({
      query: () => "unit/filter",
    }),

    getDashboard: builder.query({
      query: () => "unit/dashboard",
    }),

    getLocation: builder.query({
      query: () => "unit/location",
    }),
  }),
});

export const {
  useGetUnitQuery,
  useGetUnitsQuery,
  useFilterUnitsQuery,
  useAddUnitMutation,
  useEditUnitMutation,
  useGetDashboardQuery,
  useGetLocationQuery,
} = unitApi;
