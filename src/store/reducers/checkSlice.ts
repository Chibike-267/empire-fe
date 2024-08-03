import { createSlice } from '@reduxjs/toolkit';
import { reserveApi } from '../services/reserveApi';

const initialState = {
  inLoading: false,
  outLoading: false,
  feedback: {},
};

const checkSlice = createSlice({
  name: 'check',
  initialState,
  reducers: {
    startCheckIn: (state) => {
      state.inLoading = true;
    },
    endCheckIn: (state) => {
      state.inLoading = false;
    },
    startCheckOut: (state) => {
      state.outLoading = true;
    },
    endCheckOut: (state) => {
      state.outLoading = false;
    },
    feedBack: (state, action) => {
      state.feedback = action.payload;
    },
    startCancelReservation: (state) => {
      state.inLoading = true;
    },
    endCancelReservation: (state) => {
      state.inLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(reserveApi.endpoints.checkIn.matchPending, (state) => {
        state.inLoading = true;
      })
      .addMatcher(reserveApi.endpoints.checkIn.matchFulfilled, (state) => {
        state.inLoading = false;
      })
      .addMatcher(reserveApi.endpoints.checkIn.matchRejected, (state) => {
        state.inLoading = false;
      })
      .addMatcher(reserveApi.endpoints.checkOut.matchPending, (state) => {
        state.outLoading = true;
      })
      .addMatcher(reserveApi.endpoints.checkOut.matchFulfilled, (state) => {
        state.outLoading = false;
      })
      .addMatcher(reserveApi.endpoints.checkOut.matchRejected, (state) => {
        state.outLoading = false;
      })
      .addMatcher(reserveApi.endpoints.cancelReserve.matchPending, (state) => {
        state.inLoading = true;
      })
      .addMatcher(reserveApi.endpoints.cancelReserve.matchFulfilled, (state) => {
        state.inLoading = false;
      })
      .addMatcher(reserveApi.endpoints.cancelReserve.matchRejected, (state) => {
        state.inLoading = false;
      })
  },
});

export const CheckActions = checkSlice.actions;
export default checkSlice.reducer;
