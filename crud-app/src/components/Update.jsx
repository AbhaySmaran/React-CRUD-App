import React from 'react';
import { useState,useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const Update = () => {
    const [id,setId] = useState(0)
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const navigate = useNavigate()

    useEffect(()=>{
        setId(localStorage.getItem("id"));
        setName(localStorage.getItem('name'));
        setEmail(localStorage.getItem('email'));
    },[])

    const handleUpdate = (e)=>{
        e.preventDefault()
        console.log('id',id)
        axios
            .put(`https://663636dc415f4e1a5e26a633.mockapi.io/crud-api/${id}`,{
                name: name,
                email: email
            })
            .then(()=>{
                navigate('/')
            })
    }

    return (
        <div>
            <form>
                <div className='mb-3'>
                    <label className='form-label'>Name</label>
                    <input className='form-control' type='text' value={name} onChange={(e)=>setName(e.target.value) } />
                </div>
                <div className='mb-3'>
                    <label className='form-label'>Email</label>
                    <input className='form-control' type='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
                </div>
                <button type='submit' className='btn btn-primary' onClick={handleUpdate}>
                    Update
                </button>
            </form>
        </div>
    )
}
