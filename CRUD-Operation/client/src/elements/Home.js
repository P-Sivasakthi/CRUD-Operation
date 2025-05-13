import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'


function Home() {
  const [data, setData] = useState([])
    const [deleted, setDeleted] = useState(true)
    useEffect(()=>{
        if(deleted){
            setDeleted(false)
        axios.get('http://localhost:5000/employees')
        .then((res)=>{
            setData(res.data)
        })
        .catch((err)=>console.log(err))
    }
    }, [deleted])

    function handleDelete(id){
        axios.delete(`http://localhost:5000/deleteemployee/${id}`)
        .then((res)=>{
            setDeleted(true)
        })
        .catch((err)=> console.log(err))
    }
  return (
    <div className='fullscreen-primary'>
        <h3>Students</h3>
        <hr/>
        <div className='custom-flex'>
            <Link className='btn btn-success' to='/create'>Add Student</Link>
        </div>
        <div className='table-container'>
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((student)=>{
                        return (<tr>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.email}</td>
                            <td>{student.age}</td>
                            <td>{student.gender}</td>
                            <td>
                                <Link className='btn mx-2 btn-success' to={`/read/${student.id}`}>Read</Link>
                                <Link className='btn mx-2 btn-success' to={`/edit/${student.id}`}>Edit</Link>
                                <button onClick={()=>handleDelete(student.id)} className='btn mx-2 btn-danger'>Delete</button>
                            </td>
                        </tr>)
                    })
                }
            </tbody>
        </table>
        </div>
    </div>
  )
}

export default Home
