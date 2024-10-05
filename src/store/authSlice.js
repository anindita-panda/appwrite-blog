import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	status: false, // by default, the user is not logged in
	userData: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		login: (state, action) => {
			state.status = true;
			state.userData = action.payload.userData; // or just action.payload cuz the key is the same
		},
		logout: (state) => {
			state.status = false;
			state.userData = null;
		},
	},
});

export const {login, logout} = authSlice.actions;

export default authSlice.reducer;
