import React, {useContext, useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom'
import Logo from '../image/logo.png'

import { UserContext } from "../App";

const Header = () => {
  const [open, setOpen] = useState(false);
  const handleClick = event => {
    setOpen(!open);
  }

  const {state, dispatch} = useContext(UserContext);

  const RenderMenu = () =>{
    if(state){
      return(
        <>
        <ul className="navbar-nav navb_manu">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/logout">Logout</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item avatar">
                  <Link className="nav-link p-0" to="/">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/avatar-5.webp" className="rounded-circle z-depth-0"
                      alt="avatar" height="35" />
                  </Link>
                </li>
              </ul>
        </>
      )
    }else{
      return(
        <>
        <ul className="navbar-nav navb_manu">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/registration">Registration</Link>
                </li>
              </ul>
              <ul className="navbar-nav ml-auto nav-flex-icons">
                <li className="nav-item avatar">
                  <Link className="nav-link p-0" to="/">
                    <img src="https://via.placeholder.com/100X100" className="rounded-circle z-depth-0"
                      alt="avatar" height="35" />
                  </Link>
                </li>
              </ul>
        </>
      )
    }


  }



  return (
    <>
      <header className='main_hdr'>
        <div className='container'>
            <nav className="mb-1 navbar navbar-expand-lg navbar-dark orange lighten-1">
            <Link className="navbar-brand" to="/">
             <img src={Logo} alt="main" aria-hidden="true" />
            </Link>
            <button className="navbar-toggler" type="button" onClick={handleClick} data-toggle="collapse" data-target="#navbarSupportedContent-555"
              aria-controls="navbarSupportedContent-555" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className={`collapse navbar-collapse ${open ? 'show' : ""}`} id="navbarSupportedContent-555">
              <RenderMenu />
            </div>
          </nav>
        </div>  
      </header>
    </>
  )
}

export default Header
