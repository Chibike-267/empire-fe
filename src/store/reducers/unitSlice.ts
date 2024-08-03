import { createSlice } from '@reduxjs/toolkit';
import { unitApi } from '../services/unitApi';

const initialState = {
  error: "",
  addUnit: {},
  updateUnit: {},
  viewUnitStep: 0,
  viewUnitId: [],
  allViewUnit: [],
  filterUnit: [],
};

const unitSlice = createSlice ({
  name: 'unit',
  initialState,
  reducers: {
    getError: (state, action) => {
      state.error = action.payload;
    },
    setAddUnit: (state, action) => {
      state.addUnit = action.payload;
    },
    setUpdateUnit: (state, action) => {
      state.updateUnit = action.payload;
    },
    setViewUnitStep: (state, action) => {
      state.viewUnitStep = action.payload;
    },
    getViewUnitId: (state, action) => {
      state.viewUnitId = action.payload;
    },
    getAllViewUnit: (state, action) => {
      state.allViewUnit = action.payload;
    },
    getFilterUnit: (state, action) => {
      state.filterUnit = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(unitApi.endpoints.getUnit.matchFulfilled, (state, action) => {
        state.viewUnitId = action.payload;
      })
      .addMatcher(unitApi.endpoints.getUnits.matchFulfilled, (state, action) => {
        state.allViewUnit = action.payload;
      })
      .addMatcher(unitApi.endpoints.filterUnits.matchFulfilled, (state, action) => {
        state.filterUnit = action.payload;
      })
      .addMatcher(unitApi.endpoints.addUnit.matchFulfilled, (state, action) => {
        state.addUnit = action.payload;
      })
      .addMatcher(unitApi.endpoints.editUnit.matchFulfilled, (state, action) => {
        state.updateUnit = action.payload;
      });
  },
});

export const UnitActions = unitSlice.actions;
export default unitSlice.reducer;
