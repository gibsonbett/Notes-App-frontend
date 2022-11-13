import React from "react"
import { NavLink } from 'react-router-dom'


const NavBar = ( {loggedIn} ) => {
    return (
        <div className = 'navWrapper'>
            {loggedIn['id'] === undefined ?
            <NavLink className = 'navLinks' exact to = '/'>
                Login
            </NavLink> :
            <>
                <NavLink className = 'navLinks' exact to = '/logout'>
                    Logout
                </NavLink>
            </>
            }
            
            
        </div>
    )
}

export default NavBar