import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import { useNavigate } from "react-router-dom";
import EditEmployee from "../edit-employee";


const EmployeeComponent = (
{
    e = {
        "id": 100,
        "firstName": "Adrien",
        "lastName": "Olczak",
        "role": "admin",
        "contactNumber": "4153101619",
        "email": "adrien@instawork.com",
        "profilePicture": "images/user1.png"
    }
}

) => {
 const navigate = useNavigate();
 const EditUser = (id) => {
    navigate("/edit/"+id);
 }
return (
<>

<li className="list-group-item">
<div class = "container" >
<div className = "row">
        <div className="col-xxl-2 col-xl-2 col-lg-1 col-md-2 col-sm-2 mt-4 text-center">
           <img src = {e.profilePicture} style = {{borderRadius:"50%", height:"50px", width:"50px"}} className = "center-block"/>
       </div>
        <div className ="col-xxl-10 col-xl-10 col-lg-11 col-md-10 col-sm-10">
                   <span><button onClick = {() => {EditUser(e.id)}}>Edit</button></span>
                   <p> {e.firstName} {e.lastName} {e.role && <span>({e.role})</span>} </p>
                  <p style = {{color:"grey"}}> {e.contactNumber} </p>
                  <p style = {{color:"grey"}}> {e.email} </p>
        </div>
</div>
</div>
</li>
</>
);
};

export default EmployeeComponent;