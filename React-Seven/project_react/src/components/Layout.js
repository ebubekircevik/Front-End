import React from 'react'
import {Outlet, NavLink} from "react-router-dom";

function Layout() {

  return ( 
  <> 
    <nav>
      <ul>
        <li>
          <NavLink 
            to="/account"            
          >
            Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/list"
          >
            Lİst
          </NavLink>
        </li>
      </ul>
    </nav> 
    < Outlet /> {/*must ! eklenmeli*/}
  </>)
}

export default Layout
