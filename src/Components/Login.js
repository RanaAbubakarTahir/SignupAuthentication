import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Sign_img from './Sign_img';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const history=useNavigate();
    const [user, setuser] = useState({
         email: '',
        password: ''
    });

    const changehandler = (e) => {
        const { name, value } = e.target;
        setuser({ ...user, [name]: value });
        console.log(user);
    }

    const onAdd = (e) => {
        e.preventDefault();
        const getuserarr=localStorage.getItem("Signdetails");
        console.log(getuserarr);

        const {  email,password } = user;
        
         if (email === "") {
            alert("email is required")
        }
        else if (!email.includes("@")) {
            alert("please put valid email")
        }

        
        else if (password === "") {
            alert("password is required")
        }
        else if (password.length <= 5) {
            alert("password must be greater than five letter");
        }

        else {
           if (getuserarr && getuserarr.length) {
             const userdata=JSON.parse(getuserarr);
             const userlogin=userdata.filter((el,k)=>{
                 return el.email === email && el.password;
 
             });
             if (userlogin.length===0) {
                 alert("invalid details");
             }
             else{
                console.log("user login successfully");
                history("/details");
             }
           }
        }
    }

    return (
        <div>
            <>
                <div className='container my-5'>
                    <section className='d-flex justify-content-between'>
                        <div className='left_data my-5' style={{ width: '100%' }}>
                            <h3 className='text-center col-lg-4'>Login</h3>
                            <Form>

                                <Form.Group className="mb-3  col-md-6" controlId="Enter email">

                                    <Form.Control type="email " name='email' onChange={changehandler} placeholder="Enter email" />
                                </Form.Group>



                                <Form.Group className="mb-3  col-md-6" controlId="password">

                                    <Form.Control type="password" placeholder="Enterpassword" name='password' onChange={changehandler} />
                                </Form.Group>
                                <Button variant="success" onClick={onAdd}>Submit</Button>

                            </Form>
                         
                        </div>
                        <Sign_img />

                    </section>

                </div>

            </>
        </div>
    );
};

export default Login; 