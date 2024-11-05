import React, { useState } from 'react';
import toast, {Toaster} from 'react-hot-toast';
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';
import { registerUser } from '../../firebase/firebase.config';

function Singup() {
  

    const [userInfo, setUserInfo] = useState({
        email: '',
        password: '',
        confirmpassword: '',
    });

    const userInfoHandler = (e) =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
        
    }

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
          const {email, password, confirmpassword} = userInfo;
          if(!email || !password){
            toast.error("Please fill the email and password.");
          }else{
            if(confirmpassword === password){
              await registerUser(email,password); //user create
              toast.success("Sign Up successfully!");
              
            }else{
              toast.error("Passwords do not match.\nPlease try again!");
            }
          }

        } catch (error) {
          toast.error("Something is wrong!");
        }
          
    }


  return (
    <MDBContainer fluid className='p-5' style={{backgroundColor:'#e0e8f6'}}>
      <Toaster/>

      <MDBCard className='text-black' style={{borderRadius: '25px',maxWidth:"700px",margin:"0 auto"}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h1 classNAme="text-center fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</h1>

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3 px-2" size='lg'/>
                <MDBInput placeholder='Your Name' required id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3 px-2" size='lg'/>
                <MDBInput placeholder='Your Email' 
                onChange={userInfoHandler} 
                name='email' 
                id='form2'
                required 
                type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3 px-2" size='lg'/>
                <MDBInput placeholder='Password' required onChange={userInfoHandler} name='password' id='form3' type='password'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3 px-2" size='lg'/>
                <MDBInput placeholder='Repeat your password' required onChange={userInfoHandler} id='form4' name='confirmpassword' type='password'/>
              </div>


              <button
              type="button"
              onClick={handleSubmit}
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary px-5 mb-4"
            >
              Sign Up
            </button>
              <p className='mt-1'>Already have an Account? <span><a href="/login">Login</a></span></p>
              
            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Singup;