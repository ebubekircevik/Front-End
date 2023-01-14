import React from 'react'
import {Outlet, NavLink} from "react-router-dom";

function Layout() {
  return ( 
  <> 
    <nav>
      <ul>
        <li>
          <NavLink 
            activeClassName='active'
            exact 
            to="/"            
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            activeClassName='active'
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink 
            activeClassName='active' 
            to="/users"
          >
            Users
          </NavLink>
        </li>
      </ul>
    </nav> 
    < Outlet /> {/*must ! eklenmeli*/}
  </>)
}

export default Layout
