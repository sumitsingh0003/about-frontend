import React, {useState, useEffect } from 'react';

import {Link,useNavigate} from 'react-router-dom'

const Registration = () => {

const navigate = useNavigate();

  const [user, setUser]= useState({
    username:"", email:"", phone:"",city:"",password:"",cpassword:"", images:""
  })

  const handleInputs = (e) =>{
    setUser({...user, [e.target.name]:e.target.value });
  }

  const handleFileInput = (e) => {
    setUser({...user, file:e.target.files[0], [e.target.name]:e.target.value})
    
  }
  
  const SbmtData = async(e) => {
    e.preventDefault();

    const { username, email, phone, city, password, cpassword, images, file } = user;

    console.log(file);

    debugger;
    const formData  = new FormData();

    formData.append('username', username);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('city', city);
    formData.append('password', password);
    formData.append('cpassword', cpassword);
    formData.append('images', images);
    formData.append('file', file);


      const res = await fetch( "https://loginbckend.onrender.com/register", {
      method: "POST",
      headers: {
        // 'Content-Type': 'multipart/form-data; boundary=MyBoundary',

      },      
        body: formData,
        
    });
    let a = await formData;
    console.log(a);

    console.log(user);
    
    const data = await res.json();

      if(data.status === 422 || !data ){
          console.log("Invalid Registration");
      }else{
        console.log("Registration Successfull");
        navigate("/login")
      }
      debugger;
  }


  return (
    <>
      <section className="register_form" style={{background: "rgb(158 191 255 / 71%)"}}>
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
              <div className="card text-black register_frm" >
                <div className="card-body p-md-5">
                  <div className="row justify-content-center">
                    <div className="col-md-10 col-lg-6 col-xl-7 align-items-center order-1 d-flex order-lg-1">
                      <div>
                        <img src={'https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp'} className="img-fluid" alt="Sample " />
                        <Link to="/login">  I have an account</Link>
                      </div>
                      </div>
                    <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-2">
                      <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Registration Form</p>
                      
                      <form action='/register'  className="mx-1 mx-md-4" method="POST" encType="multipart/form-data">
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="username" className="form-control" name='username' 
                            onChange={handleInputs}
                            value={user.username}
                            placeholder='Name' 
                            autoComplete="off"/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="email" id="email" className="form-control" name='email' 
                            onChange={handleInputs}
                            value={user.email}
                            placeholder='Email' autoComplete="off"/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-phone"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="number" id="Phone" className="form-control" name='phone' 
                            onChange={handleInputs}
                            value={user.phone}
                            placeholder='Phone' autoComplete="off"/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-street-view"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="text" id="City" className="form-control" name='city' 
                            onChange={handleInputs}
                            value={user.city}
                            placeholder='City' autoComplete="off"/>
                          </div>
                        </div>                        
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="password" className="form-control" name='password' 
                            onChange={handleInputs}
                            value={user.password}
                            placeholder='Password' autoComplete="off"/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="password" id="cpassword" className="form-control" name='cpassword'
                            onChange={handleInputs}
                            value={user.cpassword}
                            placeholder='Confirm Password' autoComplete="off"/>
                          </div>
                        </div>
                        <div className="d-flex flex-row align-items-center mb-4">
                          <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                          <div className="form-outline flex-fill mb-0">
                            <input type="file" className="form-control" name='images'
                            onChange={handleFileInput}
                            value={user.images}
                            />
                          </div>
                        </div>
                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                          <button type="button" className="btn btn-primary btn-lg frm_btn" onClick={SbmtData} >Register</button>
                        </div>
                      </form>

                    </div>                    
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Registration
