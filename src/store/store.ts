import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { unitApi } from './services/unitApi';
import { reserveApi } from './services/reserveApi';
import unitReducer from './reducers/unitSlice';
import checkReducer from './reducers/checkSlice';
import reserveReducer from './reducers/reserveSlice';
import dashboardReducer from './reducers/dashboardSlice';

const store = configureStore ({
  reducer: {
    unit: unitReducer,
    check: checkReducer,
    reserve: reserveReducer,
    dashboard: dashboardReducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [reserveApi.reducerPath]: reserveApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(unitApi.middleware, reserveApi.middleware),
});

setupListeners(store.dispatch);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;