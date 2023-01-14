import React from 'react'
import {Outlet,Link} from 'react-router-dom';
import{useEffect, useState} from "react"
import axios from 'axios'

function Users() {

  const[users, setUsers] = useState([]);
  const[loading, setLoading] = useState(true)

  useEffect(() => {
    axios('https://jsonplaceholder.typicode.com/users')
    .then(res => setUsers(res.data))
    .finally(() => setLoading(false))
  }, [])

  //let { path, url } = useRouteMatch();

  

  return (
    <>
      <h1>Users</h1>
      {loading && <div>Loading..</div>}
      <ul>
        {
          users.map((user) => (
            <li key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </li>
          ))
        }
      </ul>
      < Outlet />
    </>
  )
}

export default Users