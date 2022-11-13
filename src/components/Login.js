import React, { useState } from 'react';


function Login({ setLoggedIn }) {
    const initFormState = {
        username: '',
        password: ''
    }

    const [formState, setFormState] = useState(initFormState);


    const formChange = (e) => {
        const {name, value } = e.target;
        setFormState((prevState) => ({...prevState, [name]: value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        await fetch ('http://localhost:9293/users/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formState)
        })
        .then ((resp) => resp.json())
        .then ((user) => {
            console.log(user)
            if(user.error) {
                alert(user.error)
            } else {
            
                setLoggedIn(user)
                setFormState(initFormState)
            }
        })
    }

    return (
        <div class='login-box'>
            <h2>Login</h2>
            <form className = 'formWrapper' onSubmit = {handleSubmit} autoComplete="off">
                <div class = "user-box">
                <input className = 'input' type = 'text' name = 'username' placeholder = 'Username' value = {formState.username} onChange = {formChange} required />
                </div>
                <div class="user-box">
                <input className = 'input' type = 'password' name = 'password' placeholder = 'Password' value = {formState.password} onChange = {formChange} required />
                </div>
                <div class="user-box">
                <button className = 'formBtn' type = 'submit'>Login</button>
                </div>
                <div id='button-form'>
            <p className = 'signup'>Don't have an account?<br />
                 <a className = 'signupLink' href = '/users/new' >Register</a></p>
                 </div>
            </form>
            
        </div>
    )
}

export default Login