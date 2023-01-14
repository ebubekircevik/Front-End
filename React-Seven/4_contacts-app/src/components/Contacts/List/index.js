import React, { useState } from 'react'

function List({contacts}) {

  const [filterText, setFilterText] = useState('')

  const filtered = contacts.filter((item) => { //filter metodu her seferinde bir item verir
    return Object.keys(item).some((key) => { //Object.keys(item) key leri ayırır fullname, phone_numbe olarak. some metodu bu keylerden birini getirir 
      return item[key]
      .toString()
      .toLowerCase()
      .includes(filterText.toLocaleLowerCase());
    })
  })

  console.log('filter', filtered)

  return (
    <div>
      <input placeholder="Fİlter Contect" 
      value={filterText}
      onChange={(e) => setFilterText(e.target.value)}
      />
      <ul className='list'>
        {filtered.map((contact, i) => (
          <li key={i}>
            <span>{contact.fullname}</span>
            <span>{contact.phone_number}</span>
          </li>
          ))}
      </ul>

      <p>Total Contacts ({filtered.length})</p>
    </div>
  )
}

export default List