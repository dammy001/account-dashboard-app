import { createSlice } from '@reduxjs/toolkit';

interface State {
  sidebarOpen: boolean;
}

const initialState: State = {
  sidebarOpen: false,
};

export const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    openSidebar: (state) => {
      state.sidebarOpen = true;
    },
    closeSidebar: (state) => {
      state.sidebarOpen = false;
    },
  },
});

export const { toggleSidebar, openSidebar, closeSidebar } = utilSlice.actions;

export default utilSlice.reducer;
