import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentView: "RDV",
};

export const DashboardSlice = createSlice({
  name: "dashboard",
  initialState,
  reducers: {
    setView: (state, action) => {
      state.currentView = action.payload;
    },
  },
});

export const { setView } = DashboardSlice.actions;

export const selectCurrentView = (state) => state.dashboard.currentView;

export default DashboardSlice.reducer;
