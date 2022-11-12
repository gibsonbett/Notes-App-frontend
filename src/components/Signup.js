import React from 'react'
import { useNavigate } from 'react-router-dom'
import "../components/login.css"


function Signup() {
  const navigate = useNavigate()

  const handleSignUp = (event) => {
    event.preventDefault()
    navigate('/')
  }

  return (
    <form className="container">
        <h3><i>Welcome to Notes App</i></h3>
        <h4><i>Sign in to save all Notes and access them from anywhere</i></h4>
        <br></br>
        <div className="cont-1">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="First name"
          />
        </div>
        <div className="cont-1">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Last name" />
        </div>
        <div className="cont-1">
          <label>Email</label>
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
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already have an account? 
          <button className="btn btn-primary" onClick={(e) => handleSignUp(e)}>Login Here</button>
        </p>
      </form>
  )
}

export default Signup