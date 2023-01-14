import React, { useState } from 'react'
/*
function InputExample() {

  const [name, setName] = useState("Bekir")
  const onChangeName = (event) => setName(event.target.value)

  const [surname, setSurname] = useState("Çevik")
  const onChangeSurname = (event) => setSurname(event.target.value)

  return (
    <div>
      Please enter a name
      <br />
      <input value={name} onChange={onChangeName}/>
      <div>{name}</div>
      <br />
      Surname
      <br />
      <input value={surname} onChange={onChangeSurname}/>
      <div>{surname}</div>
      <br />
    </div>
  )
}
*/

//tek fonksiyon yazımı
function InputExample() {

  const [form, setForm] = useState({name: '', surname:''})

  const onChangeInput = (e) => {
    setForm({...form, [e.target.name]: e.target.value})
  }

  return (
    <div>
      Please enter a name
      <br />
      <input name='name' value={form.name} onChange={onChangeInput}/>
      <div>{form.name}</div>
      <br />
      Surname
      <br />
      <input name='surname' value={form.surname} onChange={onChangeInput}/>
      <div>{form.surname}</div>
      <br />
    </div>
  )
}

export default InputExample
