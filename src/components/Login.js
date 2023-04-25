import React, { useState, useEffect, useContext } from "react";
import {useNavigate} from 'react-router-dom'

import { UserContext } from "../App"

const Login = () => {

  const {state, dispatch }= useContext(UserContext)

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const LoginData = async (e) => {
    e.preventDefault();

    const res = await fetch("https://loginbckend.onrender.com/login", {
      credentials: 'include',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    // debugger;
    const data = await res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Login Details");
    } else {
      dispatch({type:"USER", payload:true})
      window.alert("Login is Successfull");
      navigate("/");
    }
  };
  

  return (
    <>
      <section className="text-center text-lg-start login_page">
        <div className="container py-4 login_cont">
          <div className="row g-0 align-items-center login_main_sec">
            <div
              className="col-lg-5 mb-5 mb-lg-0 lgn_bx"  
            >
              <div className="card cascading-right">
                <div className="card-body shadow-5 text-center lgn_bx_card">
                  <h2 className="fw-bold mb-5">Login Now</h2>
                  <form method="POST">
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        placeholder="Enter Your Email"
                        autoComplete="off"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        onChange={(e) => setPassword(e.target.value)}
                        value={password}
                        placeholder="Enter Your Password"
                        autoComplete="off"
                      />
                      <label className="form-label" htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4 frm_btn"
                      onClick={LoginData}
                    >
                      Login
                    </button>

                    <div className="text-center">
                      <p>or sign up with:</p>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-facebook-f"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter"></i>
                      </button>

                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github"></i>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="col-lg-5 mb-lg-0">
              <img
                src={
                  "https://mdbootstrap.com/img/new/ecommerce/vertical/004.jpg"
                }
                className="w-100 rounded-4 shadow-4"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
