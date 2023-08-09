import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
const Error = () => {
    const history=useNavigate();
    return (
        <div className='container text-center'>
            <p className='text-center display-4 '>Page not found!</p>
            <Button onClick={()=>history("/")}>Riderect to login</Button>
        </div>
    );
};

export default Error;