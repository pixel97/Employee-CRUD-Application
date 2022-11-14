import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate, useParams } from "react-router-dom";
import { deleteEmployee, editEmployee } from "../reducer/employee-reducer";

const EditEmployee = () => {
   
   const employeeData = useSelector((state) => state.employee);
   let {memberID} = useParams();
   const filterData = employeeData.filter((dataParam) => dataParam.id === Number(memberID));
  const [employeeObj, updateEmployeeObj] = useState(filterData[0]);
  console.log(employeeData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleClick = () => {
    dispatch(
      editEmployee(employeeObj)
    );
    navigate('/home');
};
const deleteHandler = () => {
  dispatch(
    deleteEmployee(employeeObj)
  );
  navigate('/home');
};

const goToHome = () => {

  navigate("/home");
}


  return (
    <div className = "m-5">
      <div>
      <h1> Edit a team member </h1>
      <h3 style={{ color: "grey" }}> Edit contact info, location and role. </h3>
     <button className = "position-absolute top-0 end-0" onClick = {goToHome}><i class="bi bi-x"></i></button>
      </div>

      <hr></hr>
      <p> Info </p>
      <input type="text" id="fname" value = {employeeObj.firstName} onChange={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, firstName: event.target.value}}); }}/>
      <br />
      <br />
      <input type="text" id="lname"  value = {employeeObj.lastName} onChange={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, lastName: event.target.value}}); }}/>
      <br />
      <br />
      <input type="text" id="email" value = {employeeObj.email} onChange={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, email: event.target.value}}); }}/>
      <br />
      <br />
      <input type="text" id="number" value = {employeeObj.contactNumber} onChange={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, contactNumber: event.target.value}}); }}/>
      <br />
      <br />
      <p> Role </p>

      <div>
      <label htmlFor="regular"> Regular - Cant delete members</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="regular" name = "role" checked = {employeeObj.role !== 'admin' ? 'checked' : ''} onClick={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, role: ''}}); console.log(employeeObj) }} /><br /><br />
      </div>
      <hr></hr>

      <div>
      <label htmlFor="admin"> Admin - Can delete members</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="admin"  name = "role" checked = {employeeObj.role === 'admin' ? 'checked' : ''} onClick={(event)=>{updateEmployeeObj((prevState)=>{return {...prevState, role: 'admin'}}); console.log(employeeObj) }}  /><br /><br />
      </div>
      <hr></hr> 
        <div
          className="btn wd-rounded-buttons float-right"
          style={{
            color: "red",
            border: "1px solid grey",
          }} onClick = {deleteHandler}
        >
          Delete
        </div>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

    
        <div
          className="btn wd-rounded-buttons float-right"
          style={{
            background: "blue",
            color: "white",
            border: "1px solid white",
          }} onClick = {handleClick}
        >
          Save
        </div>
    </div>
  );
};

export default EditEmployee;
