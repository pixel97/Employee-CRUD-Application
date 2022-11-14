import { createSlice } from "@reduxjs/toolkit";
import employeeData from "../data/employeeDetails.json";

const EmployeeReducer = createSlice({
  name: "employeeData",
  initialState: employeeData,
  reducers: {
    addEmployee(state, action) {
      state.push({
        // id: new Date().getTime(),
        ...action.payload,
      });
    },

    editEmployee(state, action) {
      return state.map((data) => {
        if (data.id === action.payload.id) {
          return { ...data, ...action.payload };
        } else {
          return data;
        }
      });
    },

    deleteEmployee(state, action) {
      return state.filter((data) => {
        return data.id !== action.payload.id
      });
    },
  },
});

export const { addEmployee , editEmployee, deleteEmployee} = EmployeeReducer.actions;
export default EmployeeReducer.reducer;
