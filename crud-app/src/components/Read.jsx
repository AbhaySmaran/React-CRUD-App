import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';

export const Read = () => {
    const [data,setData] = useState([])

    const fetchData = async()=>{
        const res = await axios.get('https://663636dc415f4e1a5e26a633.mockapi.io/crud-api')
        setData(res.data)
    }

    const handleDelete = (id)=>{
        axios
            .delete(`https://663636dc415f4e1a5e26a633.mockapi.io/crud-api/${id}`)
            .then(()=>{fetchData()});
    }

    const setlocalstorage =(id,name,email)=>{
        localStorage.setItem("id",id);
        localStorage.setItem('name',name);
        localStorage.setItem('email',email)
    }

    useEffect(()=>{
        fetchData();
    },[])

    return (
        <div>
            <h2><Link to='/create'>Create New</Link></h2>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>
                                <Link to='/update'>
                                     <button className="btn-success" onClick={()=>setlocalstorage(item.id,item.name,item.email)}>
                                        Edit
                                     </button>
                                </Link>
                            </td>
                            <td>
                                <button className='btn btn-danger' onClick={()=>handleDelete(item.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
