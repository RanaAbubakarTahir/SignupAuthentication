import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import { NavLink } from 'react-router-dom';
const Home = () => {

    const[user,setuser]=useState({
        name:'',
        email:'',
        date:'',
        password:'',
});
 const[data,setdata]=useState([]);

    const changehandler=(e)=>{
        const{name,value}=e.target;
        setuser({...user,[name]:value});
        console.log(user);   
    }
  
    const onAdd=(e)=>{
       e.preventDefault();

       
       const {name,email,date,password}=user;
       if (name === "") {
           alert("name field is required")
       }
       else if(email===""){
        alert("email is required")
       }
       else if (!email.includes("@")) {
          alert("please put valid email")
       }
       
        else if(date===""){
        alert("date is required")
       }
       else if(password===""){
        alert("password is required")
       }
       else if (password.length<=5) {
           alert("password must be greater than five letter");
       }
          
         else{
          localStorage.setItem("Signdetails",JSON.stringify([...data,user]));  
          }
        }

    return (
        <>
        <div className='container my-5'>
          <section className='d-flex justify-content-between'>
            <div className='left_data my-5' style={{width:'100%'}}>
                  <h3 className='text-center col-lg-4'>Signup</h3>
        <Form>
        <Form.Group className="mb-3  col-md-6" controlId="exampleForm.ControlInput1">
       
        <Form.Control type="text" name='name' onChange={changehandler} placeholder="EnterName" />
      </Form.Group>

      <Form.Group className="mb-3  col-md-6" controlId="Enter email">
       
        <Form.Control type="email " name='email'   onChange={changehandler} placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3  col-md-6" controlId="EnterDATE">
       
       <Form.Control type="Date" placeholder="Enter DATE" name='date'   onChange={changehandler}/>
     </Form.Group>

     <Form.Group className="mb-3  col-md-6" controlId="password">
       
       <Form.Control type="password" placeholder="Enterpassword" name='password'  onChange={changehandler} />
     </Form.Group>
     <Button variant="success"  onClick={onAdd}>Submit</Button>
     
    </Form>
    <p className='mt-3'>Already have an account ? <span><NavLink to={"/login"}> Signin </NavLink></span></p>
            </div>
           <Sign_img/>
       
          </section>
          
        </div>
       
        </>
    );
};

export default Home;