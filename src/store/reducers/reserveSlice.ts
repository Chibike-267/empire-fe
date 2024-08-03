import { createSlice } from '@reduxjs/toolkit';
import { reserveApi } from '../services/reserveApi';

const initialState = {
  error: "",
  reserveUnitId: {},
  updateReserveId: {},
  viewHistoryId: [],
  singleReserveId: [],
  allReserve: [],
};

const reserveSlice = createSlice ({
  name: 'reserve',
  initialState,
  reducers: {
    getError: (state, action) => {
      state.error = action.payload;
    },
    setReserveUnitId: (state, action) => {
      state.reserveUnitId = action.payload;
    },
    setUpdateUnitId: (state, action) => {
      state.updateReserveId = action.payload;
    },
    getViewHistoryId: (state, action) => {
      state.viewHistoryId = action.payload;
    },
    getSingleReserveId: (state, action) => {
      state.singleReserveId = action.payload;
    },
    getAllReserve: (state, action) => {
      state.allReserve = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(reserveApi.endpoints.reserveUnit.matchFulfilled, (state, action) => {
        state.reserveUnitId = action.payload;
      })
      .addMatcher(reserveApi.endpoints.editReserve.matchFulfilled, (state, action) => {
        state.updateReserveId = action.payload;
      })
      .addMatcher(reserveApi.endpoints.history.matchFulfilled, (state, action) => {
        state.viewHistoryId = action.payload;
      })
      .addMatcher(reserveApi.endpoints.singleReserve.matchFulfilled, (state, action) => {
        state.singleReserveId = action.payload;
      })
      .addMatcher(reserveApi.endpoints.allReserve.matchFulfilled, (state, action) => {
        state.allReserve = action.payload;
      });
  },
});

export const ReserveActions = reserveSlice.actions;
export default reserveSlice.reducer;