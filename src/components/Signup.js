// import React, { useState } from 'react';
// import "../components/signup.css";

// function Signup({ addNewUser }) {
//     const initFormState = {
//         username: '',
//         email: '',
//         password: ''
//     }

//     const [formState, setFormState] = useState(initFormState);
//     const [passConfirmation, setPassConfirmation] = useState({passwordConfirm: ''})


//     const formChange = (e) => {
//         const { name, value } = e.target;
//         setFormState((prevState) => ({...prevState, [name]: value}))
//     }

//     const passwordConfChange = (e) => {
//         const { name, value } = e.target;
//         setPassConfirmation((prevState) => ({...prevState, [name]: value}))
//     }

//     const handleSubmit = async(e) => {
//         e.preventDefault();
//         if (formState.password !== passConfirmation.passwordConfirm) {
//             alert('Passwords do not match! Please try again.')
//         } else {
//             await fetch ('http://localhost:9293/users', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formState)
//             })
//             .then ((resp) => resp.json())
//             .then ((newUser) => {
//                 addNewUser(newUser)
//                 setFormState(initFormState)
//             })
//         }
//     }

//     return (
//         <div class = "signup-box">
//             <h2><b>Signup</b></h2>
//             <br></br>
//             <h3><b>Welcome to Notes App</b></h3>
//             <br></br>
//             <h4> <i>Signup to save all Notes and access them from anywhere </i></h4>
//             <br></br>
//             <form  className = 'formWrapper' onSubmit = {handleSubmit} autoComplete="off">
//             <div class = "user-box">
//                 <label className = 'label' htmlFor = 'username'></label>
//                 <input className = 'input' id = 'username' type = 'text' name = 'username' placeholder = 'Username' value = {formState.username} onChange = {formChange} required />
//             </div>
//             <br></br>
//             <div class = "user-box">  
//                 <label className = 'label' htmlFor = 'email'></label>
//                 <input className = 'input' id = 'email' type = 'email' name = 'email' placeholder = 'Email address' value = {formState.email} onChange = {formChange} required />
//             </div>
//             <br></br>
//             <div class = "user-box">
//                 <label className = 'label' htmlFor = 'password'></label>
//                 <input className = 'input' id = 'password' type = 'password' name = 'password' placeholder = 'Password' value = {formState.password} onChange = {formChange} required />
//                 <label className = 'label' htmlFor = 'passwordConfirm'></label>
//                 <input className = 'input' id = 'passwordConfirm' type = 'password' name = 'passwordConfirm' placeholder = 'Confirm password' value = {passConfirmation.passwordConfirm} onChange = {passwordConfChange} required />
//                 <div class = "button-form"></div>
//                 <button className = 'formBtn' type = 'submit'>SUBMIT</button>
//             </div>
//             </form>
//         </div>
//     )
// }

// export default Signup