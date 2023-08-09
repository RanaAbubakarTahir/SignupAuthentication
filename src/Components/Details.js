import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
const Details = () => {
    const[logindata,setlogindata]=useState([]);
    const getuser=localStorage.getItem("user_login"); 
    const history=useNavigate();
    const logout=()=>{
    localStorage.removeItem("user_login");
        history("/"); 
}
    
    return (
   

    <div>
    
        
      
        <h1>Details</h1>
        <Button onClick={logout}>Logout</Button>
        {/* <h1>{logindata[0].name}</h1> */}
     
        </div>
  
      
    );
};

export default Details;