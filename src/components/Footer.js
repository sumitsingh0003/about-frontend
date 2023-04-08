import React from 'react'
import {Link} from 'react-router-dom'


const Footer = () => {
  return (
    <>
      <div className='footer_sec'>
          <footer
                  className="text-center text-lg-start text-dark">
            <section
                    className="d-flex justify-content-between p-4 text-white foot_soc"
                    style={{background: "rgb(0 202 245)"}}
                    >
              <div className="me-5">
                <span>Get connected with us on social networks:</span>
              </div>
              
              <div className="mt-3">
                <Link to="" className="text-white me-4">
                  <i className="fab fa-facebook-f"></i>
                </Link>
                <Link to="" className="text-white me-4">
                  <i className="fab fa-twitter"></i>
                </Link>
                <Link to="" className="text-white me-4">
                  <i className="fab fa-google"></i>
                </Link>
                <Link to="" className="text-white me-4">
                  <i className="fab fa-instagram"></i>
                </Link>
                <Link to="" className="text-white me-4">
                  <i className="fab fa-linkedin"></i>
                </Link>
                <Link to="" className="text-white me-4">
                  <i className="fab fa-github"></i>
                </Link>
              </div>
            </section>
            
            <section className="">
              <div className="container text-center text-md-start mt-5 bot_foot">
                <div className="row mt-3">
                  <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Company name</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", background: "7c4dff", height: "2px"}}
                        />
                    <p>
                      Here you can use rows and columns to organize your footer
                      content. Lorem ipsum dolor sit amet, consectetur adipisicing
                      elit.
                    </p>
                  </div>
                  
                  <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Products</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", background: "7c4dff", height: "2px"}}
                        />
                    <p>
                      <Link to="#!" className="text-dark">MDBootstrap</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">MDWordPress</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">BrandFlow</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">Bootstrap Angular</Link>
                    </p>
                  </div>

                  <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                    <h6 className="text-uppercase fw-bold">Useful links</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", background: "7c4dff", height: "2px"}}
                        />
                    <p>
                      <Link to="#!" className="text-dark">Your Account</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">Become an Affiliate</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">Shipping Rates</Link>
                    </p>
                    <p>
                      <Link to="#!" className="text-dark">Help</Link>
                    </p>
                  </div>

                  <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                    <h6 className="text-uppercase fw-bold">Contact</h6>
                    <hr
                        className="mb-4 mt-0 d-inline-block mx-auto"
                        style={{width: "60px", background: "7c4dff", height: "2px"}}
                        />
                    <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
                    <p><i className="fas fa-envelope mr-3"></i> info@example.com</p>
                    <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
                    <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
                  </div>
                </div>
              </div>
            </section>


            <div
                className="text-center p-3"
                style={{background: "rgb(0 202 245)", color: "#fff"}} > © 2020 Copyright: <Link className="text-dark" to="" >Sumit Singh</Link>
            </div>
          </footer>

      </div>
    </>
  )
}

export default Footer
