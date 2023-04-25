import React,{useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';

import {UserContext} from "../App"


const Logout = () => {

    const {state, dispatch} = useContext(UserContext);

    const navigate = useNavigate();

    useEffect(() =>{
        fetch('https://loginbckend.onrender.com/logout',{
                method:"GET",
                headers:{
                'Content-Type':'application/json',
                },
                credentials:'include',

            }).then((res)=>{
                dispatch({type:"USER", payload:false})
                navigate('/login');

            }).catch((err)=>{
                console.log(err)
            })
            
    },[])
    
  return (
    <>
        <h1>Log Out Page</h1>
    </>
  )
}

export default Logout
