import React,{useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import {UserContext} from "../App"


const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() =>{
        fetch('http://localhost:5000/logout',{
                method:"GET",
                headers:{
                'Content-Type':'application/json',
                },
                credentials:'include',

            }).then((res)=>{
                dispatch({type:"USER", payload:false})
                navigate('/login');
                console.log(res)
            }).catch((err)=>{
                console.log(err)
            })
            
    })

    console.log(state)
    
  return (
    <>
        <h1>Log Out Page</h1>
    </>
  )
}

export default Logout
