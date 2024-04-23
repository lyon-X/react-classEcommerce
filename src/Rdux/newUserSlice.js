import { createSlice } from "@reduxjs/toolkit";

import { Users } from "../Datas/Datas";
const userSlice = createSlice({
  name: "users",
  initialState: {
    users: Users,
  },
  reducers: {
    addEmployees(state, action) {
      state.users.push(action.payload);
    },
    deleteFrmMyCompany(state, action) {
      state.users = state.users.filter((user) => user.id !== action.payload);
    },

    updateEmployees(state, action) {
      state.users.map((user) => {
        if (user.id === action.payload.id) {
          user.name = action.payload.name;
        }
      });
    },
  },
});

export const {
  addEmployees,
  deleteFrmMyCompany,
  updateEmployees,
} = userSlice.actions;

export default userSlice;
