import React from 'react'
import { useState, useEffect } from 'react'

import Form from './Form'
import List from './List'
import './styles.css'

function Contacts() {
  const[contacts, setContacts] = useState([
    {fullname: 'Ali',
    phone_number: 123    
    },
    {fullname: 'Ayse',
    phone_number: 456    
    },
    {fullname: 'Zeynep',
    phone_number: 789    
    }
  ])

  useEffect(()=>{
    console.log(contacts)
  }, [contacts])

  return (
    <div id='container'>
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts