import React from "react";
import {useSelector} from "react-redux";
import {Link,NavLink} from "react-router-dom";
import EmployeeComponent from "./employee-component";

function EmployeeDetails(){
const employeeArray = useSelector(state => state.employee)
{console.log("Hello")}
{console.log(employeeArray)}
return (
<>
    <div className = "text-center">
    <h1> Team Members </h1>
    <h3 style = {{color:"grey"}}> You have {employeeArray.length} members </h3>
     <Link to="/add"><div className="btn wd-rounded-buttons float-right" style={{background:"blue",color:"white",border:"1px solid white"}}>Add</div></Link>
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


