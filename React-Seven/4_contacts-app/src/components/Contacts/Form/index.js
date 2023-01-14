import React from 'react'
import {useState, useEffect} from 'react'

const initialFormValues = {fullname:'', phone_number:''}

function Form({addContact, contacts}) {  
  const [form, setForm] = useState({fullname: '', phone_number: ''})

    useEffect(()=>{
      setForm(initialFormValues)
    }, [contacts])

  const onChangeInput = (e) => { //input un degeri degistiginde input un değerini ilgili form propertysine atar 
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = (e) => {
    e.preventDefault(); //submit olduğunda sayfa yenilemesini engeller
    if(form.fullname ==="" || form.phone_number ===""){
      return false;
    }

    addContact([...contacts,form])
    setForm(initialFormValues)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <input name='fullname' placeholder='Fullname' value={form.fullname} onChange={onChangeInput}/>
        </div>
        <div>
          <input name="phone_number" placeholder='Phone Number' value={form.phone_number} onChange={onChangeInput}/>
        </div>
        <div className='btn'>
          <button>Add</button>
        </div>
      </form>
    </div>
  )
}

export default Form