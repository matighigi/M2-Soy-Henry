import React from 'react';
import { useState } from 'react';


export default function  Form() {
  
  let [form, setForm] = useState({
  user: '',
  password: '',
  })
  const [error, setError] =useState('')
  
  const handlerChangeUser = (event) => {
    if(!form.user) {
      setError('Username is required')
    }
    if(!/\S+@\S+\.\S+/.test(event.target.value)) {
      setError('Username is invalid')
    }
    else {
      setError('')
    }
    setForm({...form, user: event.target.value})
  }

  const handlerChangePassword = (event) => {
    if(!form.password) {
      setError('Password is required')
    }
    if(!/(?=.*[0-9])/.test(event.target.value)) {
      setError('Password is invalid')
    }
    else {
      setError('')
    }
    setForm({...form, password: event.targer.value})
  }

  const handlerSubmit = (event) => {
    event.preventDefault()
  }


  return (
     <form className={error && 'error'} onSubmit={handlerSubmit}>
      <h1>Formulario de Ingreso</h1>
      <div>
        <label>Username:</label>
        <input type='text' name='username' onChange={handlerChangeUser}/>
      </div>
      <hr style={{ borderStyle: 'none' }}/>
      <div>
        <label>Password:</label>
        <input type='password' name='password' onChange={handlerChangePassword}/>
        {error && <p>{error}</p>}
      </div>
      <hr style={{ borderStyle: 'none' }}/>
      <button
       type='submit'
       disabled={!form.user || error}
       >Submit</button>
     </form>
  )
}
