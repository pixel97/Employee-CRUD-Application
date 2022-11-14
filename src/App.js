import logo from './logo.svg';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import Employee from "./employee"
import AddEmployee from "./employee/new-employee"
import EditEmployee from "./employee/edit-employee"
import employeeReducer from './employee/reducer/employee-reducer';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';

function App() {
const store = configureStore({reducer: {employee: employeeReducer}});
  return (
    <Provider store={store}>
     <BrowserRouter>
       <Routes>
       <Route path="/edit/:memberID"  element={<EditEmployee/>}/>
      <Route path="/*" element={<Employee/>}/>
      <Route path="/add" element={<AddEmployee/>}/>

      </Routes>
     </BrowserRouter>
     </Provider>
  );
}

export default App;
