import {React, useContext, useState} from 'react'

import {useUser} from '../context/UserContext'

function Profile() {

  const {user , setUser} = useUser();
  const [loading, setLoading] = useState(false); 


  const handleLogin = () => {
    setLoading(true)
    setTimeout(() => {
      setUser({id: 1, username: 'bekir', bio: 'lorem ipsum'})
      setLoading(false)
    }, 1500)
  }

  return (
    <div>
      <button onClick={handleLogin}>{loading ? 'loading..': 'Login'}</button>
      <code>{JSON.stringify(user)}</code>
    </div>
  )
}

export default Profile