import React, { useEffect, useState } from 'react'
import AbtBanner from '../image/image.jpg'
import {useNavigate} from 'react-router-dom'


const About = () => {

const navigate = useNavigate();
const [userData, setUserData] = useState({});

  useEffect(()=>{  
    const callAboutusPage = async () =>{
     try {
      const res = await fetch('https://loginbckend.onrender.com/about', {
        method:"GET",
        headers:{
          Accept :'application/json',
          'Content-Type':'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json();      
      setUserData(data);

      
        if(!res.status === 200 ){
          const error = new Error(res.error);
          throw error; 
        }

     } catch (err) {
        console.log(err);
        navigate('/login');
     }
     
  }

  callAboutusPage();

},[]);




  return (
    <>
      <div className='abt_banner'>
        <img src={AbtBanner} alt="About US" />
        <div className='main_abt'>
          <div className='abt_conts'>
            <h1>Wellcome to About Us Page</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </div>
      </div>

      <section className='ab_profile'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-8 col-12 m-auto'>
              <div className='row abt_profile'>
                <div className='col-md-4' style={{padding: "0"}}>
                  <div className='prfl_img'>
                    <img src={ userData.images} alt="Profile" />
                    <ul>
                      <li>
                        <a href="https://www.instagram.com/sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fab fa-instagram" aria-hidden="true"></i> Instagram</a>
                        </li>
                      <li>
                        <a href="https://www.facebook.com/sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fab fa-facebook-f" aria-hidden="true"></i> Facebook</a>
                        </li>
                      <li>
                        <a href="https://www.linkedin.com/in/sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fab fa-linkedin" aria-hidden="true"></i> linkedin</a>
                        </li>
                      <li>
                        <a href="https://in.pinterest.com/sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fa fa-pinterest" aria-hidden="true"></i> Pintrest</a>
  </li>
                      <li>
                        <a href="https://twitter.com/Sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fab fa-twitter" aria-hidden="true"></i> Twitter</a>
                      </li>
                      <li>
                        <a href="https://github.com/Sumitsingh0003" target="_blank"  rel="noopener noreferrer"><i className="fab fa-github" aria-hidden="true"></i> Github</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-md-8'>
                  <div className='prfl_cont' >
                    <h2>{ userData.username}</h2>
                    <span>Web Developer</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                  </div>
                  <div className='pfl_dtls'>
                    <h3>About Details</h3>
                    <ul>
                      <li><p>User Id</p><b>{ userData._id}</b></li>
                      <li><p>Name</p><b>{ userData.username}</b></li>
                      <li><p>Email</p><b>{ userData.email}</b></li>
                      <li><p>Phone</p><b>{ userData.phone}</b></li>
                      <li><p>City</p><b>{ userData.city}</b></li>
                    </ul>
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

export default About
