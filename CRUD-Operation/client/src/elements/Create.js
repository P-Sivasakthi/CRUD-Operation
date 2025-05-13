import React, { useState } from 'react'
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom'

function Create() {
    const [values, setValues] = useState({
        name: '',
        email: '',
        age: '',
        gender: ''
    })

    const navigate = useNavigate()
    
    function handleSubmit(e){
        e.preventDefault()
        axios.post('http://localhost:5000/add_user', values)
        .then((res)=>{
            
            navigate('/')
            console.log(res)
        })
        .catch((err)=>console.log(err))
    }

  return (
    <div className='fullscreen-primary'>
        <h3>Add Student</h3>
        <hr/>
        <div className='custom-flex'>
            <Link to='/' class='btn btn-success'>Home</Link>
        </div>
        <form onSubmit={handleSubmit}>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input type='text' name='name' required onChange={(e)=> setValues({...values, name: e.target.value})} />
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' required onChange={(e)=> setValues({...values, email: e.target.value})} />
            </div>
            <div className='form-group'>
                <label htmlFor='gender'>Gender</label>
                <input type='text' name='gender' required onChange={(e)=> setValues({...values, gender: e.target.value})} />
            </div>
            <div className='form-group'>
                <label htmlFor='age'>Age</label>
                <input type='number' name='age' required onChange={(e)=> setValues({...values, age: e.target.value})} />
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Save</button>
            </div>
        </form>
    </div>
  )
}

export default Create
