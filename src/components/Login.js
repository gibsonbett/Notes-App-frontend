import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../components/login.css";

function Login() {
    const navigate= useNavigate()
    const handleLogin =(event)=>{
      event.preventDefault();
      // console.log("I work");
      navigate("/todolist")
    }
  return (
    <form className='container'>
        <h3><i>Welcome to Notes App</i></h3>
        <h4> <i>Login to save all Notes and access them from anywhere </i></h4>
        <br></br>
        <div className="cont-1">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>
        <div className="cont-1">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>
        <br></br>
        <div className="cont-1">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>
        <br></br>
        <div className="d-grid">
      <button id="login" type="submit" onClick={(e) => handleLogin(e)}>Login</button>
        </div>
      </form>
  )
}

export default Login
