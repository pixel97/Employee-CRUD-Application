import React from "react";
import {useSelector} from "react-redux";
import {Link,NavLink, useNavigate} from "react-router-dom";
import EmployeeComponent from "./employee-component";

function EmployeeDetails(){
const employeeArray = useSelector(state => state.employee)
{console.log("Hello")}
{console.log(employeeArray)}
const navigate = useNavigate();
const goToAdd = () => {

    navigate("/add");
}
return (
<>
    <div className = "text-center">
    <h1> Team Members </h1>
    <h3 style = {{color:"grey"}}> You have {employeeArray.length} members </h3>
    <div className="btn wd-rounded-buttons float-right" style={{background:"blue",color:"white",border:"1px solid white"}} onClick = {goToAdd}>Add</div>
    </div>
    <ul className="list-group">
    {
    employeeArray.map(e =>
    <EmployeeComponent key = {e.id} e = {e}/>)
    }
    </ul>
</>
);
};

export default EmployeeDetails;


