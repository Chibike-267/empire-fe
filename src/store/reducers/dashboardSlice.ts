import { createSlice } from '@reduxjs/toolkit';
import { unitApi } from '../services/unitApi';

const initialState = {
    loading: false,
    properties: {},
    locations: {},
    views: 0,
  };
  
  const dashboardSlice = createSlice({
    name: 'dashboard',
    initialState,
    reducers: {
      startLoading(state) {
        state.loading = true;
      },
      endLoading(state) {
        state.loading = false;
      },
      dashhboardFeedBack(state, action) {
        state.properties = action.payload;
      },
      locationFeedBack(state, action) {
        state.locations = action.payload;
      },
      viewed(state) {
        state.views += 1;
      },
    },
    extraReducers: (builder) => {
      builder
        .addMatcher(unitApi.endpoints.getDashboard.matchFulfilled, (state, action) => {
          state.properties = action.payload;
        })
        .addMatcher(unitApi.endpoints.getLocation.matchFulfilled, (state, action) => {
          state.locations = action.payload;
        });
    },
  });
  
  export const DashboardActions = dashboardSlice.actions;
  export default dashboardSlice.reducer;