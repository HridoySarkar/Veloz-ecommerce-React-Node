import React, { useState } from "react";
import { signInUser } from "../../firebase/firebase.config";
import toast, { Toaster } from "react-hot-toast";

const Login=()=> {
    const [user,setUser] = useState({
        email:"",
        password:"",
    });
    const handleData=(e)=>{
        setUser({...user,[e.target.name]:e.target.value});
    }

    const LoginUser= async (e)=>{
        const {email, password} = user;
        e.preventDefault();
        try {
            await signInUser(email,password);
            
        } catch (error) {
            
        }
    }


  return (
    <>
      <div>
        <Toaster/>
        <div
          className="my-4 p-5 rounded border bg-white"
          style={{
            margin: "0 auto",
            maxWidth: "400px",
            boxShadow: "0px 10px 15px -3px rgba(0,0,0,0.1)",
          }}
        >
          <form>
            {/* Email input */}
            <div data-mdb-input-init="" className="form-outline mb-4">
              <input type="email" onChange={handleData} name="email" id="form2Example1" className="form-control" />
              <label className="form-label" htmlFor="form2Example1">
                Email address
              </label>
            </div>
            {/* Password input */}
            <div data-mdb-input-init="" className="form-outline mb-4">
              <input
                type="password"
                id="form2Example2"
                name="password"
                onChange={handleData}
                className="form-control"
              />
              <label className="form-label" htmlFor="form2Example2">
                Password
              </label>
            </div>
            {/* 2 column grid layout for inline styling */}
            <div className="row mb-4">
              <div className="col d-flex justify-content-center">
                {/* Checkbox */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    defaultValue=""
                    id="form2Example31"
                    defaultChecked=""
                  />
                  <label className="form-check-label" htmlFor="form2Example31">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>
              <div className="col">
                {/* Simple link */}
                <a href="#!">Forgot password?</a>
              </div>
            </div>
            {/* Submit button */}
            <button
              type="button"
              onClick={LoginUser}
              data-mdb-button-init=""
              data-mdb-ripple-init=""
              className="btn btn-primary btn-block mb-4"
            >
              Sign in
            </button>
            {/* Register buttons */}
            <div className="text-center">
              <p>
                Not a member? <a href="signup">Sign Up</a>
              </p>
              <p>or sign up with:</p>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-facebook-f" />
              </button>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-google" />
              </button>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-twitter" />
              </button>
              <button
                type="button"
                data-mdb-button-init=""
                data-mdb-ripple-init=""
                className="btn btn-link btn-floating mx-1"
              >
                <i className="fab fa-github" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
