import React, { useEffect, useState } from 'react'

const Contact = () => {

const [userData, setUserData] = useState({
  username:"", email:"", phone:"", city:"", message:""
});

  useEffect(()=>{
    const callContactPage = async () =>{
     try {
      const res = await fetch('https://loginbckend.onrender.com/getdata', {
        method:"GET",
        headers:{
          'Content-Type':'application/json',
        },
        credentials: 'include',
      });

      const data = await res.json(); 
      setUserData({...userData, username:data.username, email:data.email, phone:data.phone, city:data.city });    

        if(!res.status === 200 ){
          const error = new Error(res.error);
          throw error;
        }

     } catch (err) {
        console.log(err);
     }
     
  }
  callContactPage();
    
}, []);

const handleInput = (e) =>{  
  setUserData({...userData, [e.target.name]:e.target.value });
}

const sbmtMsgData = async(e) => {
  e.preventDefault();
   
  const { username, email, phone, city, message  } = userData;
    
  const res = await fetch( "https://loginbckend.onrender.com/contact", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
      body: JSON.stringify({
        username, email, phone, city, message
      })
  });

  const data = await res.json();

    if(!data ){
        console.log("Message not send");
    }else{
      alert("Message Send Successfully")
      setUserData({...userData, message:""});
    }
  }

  return (
    <>
      <section className="text-center" style={{padding: "0px 0px 50px 0px"}}>        
        <div className="bg-image cntct_sec"></div>
        <div className='container'>
          <div className="card mx-md-5 shadow-5-strong contct_frm_page">
          <div className="card-body py-5 px-md-5">

            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <h2 className="fw-bold mb-5">Contact Us Enquiry</h2>
                <form method='POST'>
                  
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example1" className="form-control" 
                        onChange={handleInput}
                        name='username'
                        value={userData.username}
                        placeholder='Enter Your Name...'/>
                      </div>
                    </div>                    
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="email" id="form3Example3" className="form-control" 
                        onChange={handleInput}
                        name='email'
                        value={userData.email}
                        placeholder='Enter Your Email Add...'/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="number" id="form3Example2" className="form-control" 
                        onChange={handleInput}
                        name='phone'
                        value={userData.phone}
                        placeholder='Enter Your Phone Number...'/>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input type="text" id="form3Example2" className="form-control" 
                        onChange={handleInput}
                        name='city'
                        value={userData.city}
                        placeholder='Enter Your City...'/>
                      </div>
                    </div>
                    <div className="col-md-12 mb-12">
                      <div className="form-outline text_area">
                        <textarea 
                        onChange={handleInput}
                        name='message'
                        value={userData.message}
                        placeholder='Enter Your Message...' className="form-control "></textarea>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4 frm_btn"
                  onClick={sbmtMsgData}
                  >
                    Send Message
                  </button>


                  <div className="text-center">
                    <p>or sign up with:</p>
                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-facebook-f"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-google"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-twitter"></i>
                    </button>

                    <button type="button" className="btn btn-link btn-floating mx-1">
                      <i className="fab fa-github"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          </div>
        </div>
      </section>
    </>
  ) 
}

export default Contact
