import React, { Component } from 'react'
export default class Login extends Component {
  render() {
    return (
      <form>
<<<<<<< HEAD
        <h3><i>Welcome to Notes App</i></h3>
        <h4> <i>Login to save all Notes and access them from anywhere </i></h4>
        <br></br>
        <div className="cont-1">
=======
        <h3>Welcome to Notes App</h3>
        <h4> Login to save all Notes and access them from anywhere </h4>
        <br></br>
        <div className="mb-3">
>>>>>>> 515b77c7c9c527f639a5a86cb6361cf3941be0ba
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
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    )
  }
}