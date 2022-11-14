import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { addEmployee } from "../reducer/employee-reducer";


const AddEmployee = () => {

  const dispatch = useDispatch();

  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contactNum, setcontactNum] = useState("");
  const [role, setRole] = useState("");

  const handleFName = (e) => setFname(e.target.value);
  const handleLName = (e) => setLname(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleContactNum = (e) => setcontactNum(e.target.value);
  const handleRole = (e) => setRole(e.target.value);

  const employeeAmount = useSelector((state) => state.employee.length);
 
  console.log(employeeAmount + 1);
  const navigate = useNavigate();
  const handleClick = () => {
      dispatch(
        addEmployee({
          id: employeeAmount + 1,
          "firstName": fName,
          "lastName": lName,
          "role": role,
          "contactNumber": contactNum,
          "email": email,
          "profilePicture": "images/user1.png"
        })
      );
      navigate('/home');
  };

  const goToHome = () => {
    navigate("/home");
  }

  
  


  return (
    <div className = "m-5">
      <h1> Add a team member </h1>
      <h3 style={{ color: "grey" }}> Set email, location and role </h3>
      <button className = "position-absolute top-0 end-0" onClick = {goToHome}><i class="bi bi-x"></i></button>
      <hr></hr>
      <p> Info </p>
      <span>
      <input type="text" id="fname" onChange={handleFName} value = {fName} placeholder = "Enter first name"/></span>
     
      <br />
      <br />
      <input type="text" id="lname" onChange={handleLName} value = {lName} placeholder = "Enter last name"/>
      <br />
      <br />
      <input type="text" id="email" onChange={handleEmail} value = {email} placeholder = "Enter email"/>
      <br />
      <br />
      <input type="text" id="number"  onChange={handleContactNum} value = {contactNum} placeholder = "Enter contact number"/>
      <br />
      <br />
      <p> Role </p>

      <div>
      <label htmlFor="regular"> Regular-Cant delete members</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="regular" onChange = {handleRole} value={role} name = "b1"/><br /><br />
      </div>
      <hr></hr>

      <div>
      <label htmlFor="admin"> Admin - Can delete members</label>&nbsp;&nbsp;&nbsp;&nbsp;
      <input type="radio" id="admin" onChange = {handleRole} value={role}  name = "b1"/><br /><br />
      </div>
      <hr></hr> 

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

export default AddEmployee;
