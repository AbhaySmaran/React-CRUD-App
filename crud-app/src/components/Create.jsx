import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const history = useNavigate()

    const header = { "Access-Contrl-Allow-Origin ": "*"}
    const handleClick=(e)=>{
        e.preventDefault();
        axios
            .post('https://663636dc415f4e1a5e26a633.mockapi.io/crud-api',{
                name: name,
                email: email,
                header,
            })
            .then(()=>{
                history('/')
            });
    };

    return (
        <div>
            <h2>Create</h2>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input type='text' className='form-control' onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input type='email' className='form-control' onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleClick}>
                    Submit
                </button>
            </form>
        </div>
    )
}

export default Create
