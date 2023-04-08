import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import Banner from '../image/hero-img.png'
import ClientOne from '../image/clients/client-1.png'
import ClientTwo from '../image/clients/client-2.png'
import ClientThree from '../image/clients/client-3.png'
import ClientFour from '../image/clients/client-4.png'
import ClientFive from '../image/clients/client-5.png'
import ClientSix from '../image/clients/client-6.png'
import Skills from '../image/skills.png'
import PortfolioOne from '../image/portfolio/portfolio-1.jpg'
import PortfolioTwo from '../image/portfolio/portfolio-2.jpg'
import PortfolioThree from '../image/portfolio/portfolio-3.jpg'
import PortfolioFour from '../image/portfolio/portfolio-4.jpg'
import PortfolioFive from '../image/portfolio/portfolio-5.jpg'
import PortfolioSix from '../image/portfolio/portfolio-6.jpg'
import PortfolioSeven from '../image/portfolio/portfolio-7.jpg'
import PortfolioEight from '../image/portfolio/portfolio-8.jpg'
import PortfolioNine from '../image/portfolio/portfolio-9.jpg'
import TeamOne from '../image/team/team-1.jpg'
import TeamTwo from '../image/team/team-2.jpg'
import TeamThree from '../image/team/team-3.jpg'
import TeamFour from '../image/team/team-4.jpg'


const Main = () => {

  const [userName, setUserName] = useState('');
  const [show, setShow] = useState(false);
  
    useEffect(()=>{
      const userHomePage = async () =>{
       try {
        const res = await fetch('http://localhost:5000/getdata', {
          method:"GET",
          headers:{
            'Content-Type':'application/json',
          },
          credentials: 'include',
        });
  
        const data = await res.json(); 
        setUserName(data.username);
        setShow(true);
        

       } catch (err) {
          console.log(err);
       }
       
    }
    userHomePage();
      
  }, []);

  return (
    <>
    
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="200">
            <h1>Better Solutions For Your Business</h1>
            <h2>{userName} {show ? 'I Am Login in This Page': 'We are team of talented designers making websites with Bootstrap'}</h2>
            <div className="d-flex justify-content-center justify-content-lg-start">

              <Link to="/contact" className="btn-get-started scrollto">Get Started</Link>
              <a href="https://www.linkedin.com/in/sumitsingh0003/" target="_blank"  rel="noopener noreferrer"  className="glightbox btn-watch-video"><i className="fa fa-linkedin-square"></i><span>Go To Profile</span></a>
            </div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img" data-aos="zoom-in" data-aos-delay="200">
            <img src={Banner} className="img-fluid animated" alt="Banner" />
          </div>
        </div>
      </div>
    </section>

    <main id="main">
      <section id="clients" className="clients section-bg">
        <div className="container">

          <div className="row" data-aos="zoom-in">

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientOne} className="img-fluid" alt="Clients" />
            </div>  

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientTwo} className="img-fluid" alt="Clients" />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientThree} className="img-fluid" alt="Clients" />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientFour} className="img-fluid" alt="Clients" />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientFive} className="img-fluid" alt="Clients" />
            </div>

            <div className="col-lg-2 col-md-4 col-6 d-flex align-items-center justify-content-center">
              <img src={ClientSix} className="img-fluid" alt="Clients" />
            </div>

          </div>

        </div>
      </section>

      <section id="about" className="about">
        <div className="container" data-aos="fade-up">
          <div className="section-title">
            <h2>About Us</h2>
          </div>

          <div className="row content">
            <div className="col-lg-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>
              <ul>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
                <li><i className="ri-check-double-line"></i> Duis aute irure dolor in reprehenderit in voluptate velit</li>
                <li><i className="ri-check-double-line"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat</li>
              </ul>
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0">
              <p>
                Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <Link to="/contact" className="btn-learn-more">Learn More</Link>
            </div>
          </div>

        </div>
      </section>

      <section id="why-us" className="why-us section-bg">
      <div className="container-fluid" data-aos="fade-up">

        <div className="row">

          <div className="col-lg-7 d-flex flex-column justify-content-center align-items-stretch  order-2 order-lg-1">

            <div className="content">
              <h3>Eum ipsam laborum deleniti <strong>velit pariatur architecto aut nihil</strong></h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit
              </p>
            </div>

            <div className="accordion-list">
              <ul>
                <li>
                  <a data-bs-toggle="collapse" href="#." className="collapse" data-bs-target="#accordion-list-1"><span>01</span> Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                    <p>
                      Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" href="#." data-bs-target="#accordion-list-2" className="collapsed"><span>02</span> Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                    </p>
                  </div>
                </li>

                <li>
                  <a data-bs-toggle="collapse" href="#." data-bs-target="#accordion-list-3" className="collapsed"><span>03</span> Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                  <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                    <p>
                      Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                    </p>
                  </div>
                </li>

              </ul>
            </div>

          </div>

          <div className="col-lg-5 align-items-stretch order-1 order-lg-2 img why_us_imgs" data-aos="zoom-in" data-aos-delay="150">&nbsp;</div>
        </div>

      </div>
      </section>

      <section id="skills" className="skills">
        <div className="container" data-aos="fade-up">

          <div className="row">
            <div className="col-lg-6 d-flex align-items-center" data-aos="fade-right" data-aos-delay="100">
              <img src={Skills} className="img-fluid" alt=" Skills" />
            </div>
            <div className="col-lg-6 pt-4 pt-lg-0 content" data-aos="fade-left" data-aos-delay="100">
              <h3>Voluptatem dignissimos provident quasi corporis voluptates</h3>
              <p className="fst-italic">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua.
              </p>

              <div className="skills-content">

                <div className="progress html">
                  <span className="skill">HTML <i className="val">100%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress css">
                  <span className="skill">CSS <i className="val">90%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress js">
                  <span className="skill">JavaScript <i className="val">80%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress ps">
                  <span className="skill">Photoshop <i className="val">75%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" aria-valuenow="55" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

                <div className="progress rect">
                  <span className="skill">React <i className="val">50%</i></span>
                  <div className="progress-bar-wrap">
                    <div className="progress-bar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </section>

      <section id="services" className="services section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Services</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">
            <div className="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
              <div className="icon-box">
                <div className="icon"><i className="bx bxl-dribbble"></i></div>
                <h4><a href="#.">Lorem Ipsum</a></h4>
                <p>Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-file"></i></div>
                <h4><a href="#.">Sed ut perspici</a></h4>
                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-tachometer"></i></div>
                <h4><a href="#.">Magni Dolores</a></h4>
                <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia</p>
              </div>
            </div>

            <div className="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
              <div className="icon-box">
                <div className="icon"><i className="bx bx-layer"></i></div>
                <h4><a href="#.">Nemo Enim</a></h4>
                <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="cta" className="cta">
      <div className="container" data-aos="zoom-in">

        <div className="row">
          <div className="col-lg-9 text-center text-lg-start">
            <h3>Call To Action</h3>
            <p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
          <div className="col-lg-3 cta-btn-container text-center">
            <Link className="cta-btn align-middle" to="/contact">Call To Action</Link>
          </div>
        </div>

      </div>
      </section>

      <section id="portfolio" className="portfolio">
      <div className="container" data-aos="fade-up">

        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
        </div>

        <ul id="portfolio-flters" className="d-flex justify-content-center" data-aos="fade-up" data-aos-delay="100">
          <li data-filter="*" className="filter-active">All</li>
          <li data-filter=".filter-app">App</li>
          <li data-filter=".filter-card">Card</li>
          <li data-filter=".filter-web">Web</li>
        </ul>

        <div className="row portfolio-container" data-aos="fade-up" data-aos-delay="200">

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img src={PortfolioOne} className="img-fluid" alt="Port Img" />
              </div>
            <div className="portfolio-info">
              <h4>App 1</h4>
              <p>App</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 1"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={PortfolioTwo} className="img-fluid" alt="Portfolio Imgs" />
              </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img src={PortfolioThree} className="img-fluid" alt="Portfolio Imgs" />
              </div>
            <div className="portfolio-info">
              <h4>App 2</h4>
              <p>App</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 2"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
              <img src={PortfolioFour} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>Card 2</h4>
              <p>Card</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 2"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={PortfolioFive} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>Web 2</h4>
              <p>Web</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 2"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-app">
            <div className="portfolio-img">
              <img src={PortfolioSix} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>App 3</h4>
              <p>App</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="App 3"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
              <img src={PortfolioSeven} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>Card 1</h4>
              <p>Card</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 1"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-card">
            <div className="portfolio-img">
              <img src={PortfolioEight} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>Card 3</h4>
              <p>Card</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Card 3"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 portfolio-item filter-web">
            <div className="portfolio-img">
              <img src={PortfolioNine} className="img-fluid" alt="Portfolio Imgs" />
            </div>
            <div className="portfolio-info">
              <h4>Web 3</h4>
              <p>Web</p>
              <a href="#." data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Web 3"><i className="bx bx-plus"></i></a>
              <a href="#." className="details-link" title="More Details"><i className="bx bx-link"></i></a>
            </div>
          </div>

        </div>

      </div>
      </section>

      <section id="team" className="team section-bg">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Team</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="row">

            <div className="col-lg-6">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="100">
                <div className="pic">
                  <img src={TeamOne} className="img-fluid" alt="Team" />
                </div>
                <div className="member-info">
                  <h4>Walter White</h4>
                  <span>Chief Executive Officer</span>
                  <p>Explicabo voluptatem mollitia et repellat qui dolorum quasi</p>
                  <div className="social">
                    <a href="#."><i className="ri-twitter-fill"></i></a>
                    <a href="#."><i className="ri-facebook-fill"></i></a>
                    <a href="#."><i className="ri-instagram-fill"></i></a>
                    <a href="#."> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4 mt-lg-0">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="200">
                <div className="pic">
                  <img src={TeamTwo} className="img-fluid" alt="Team" />
                </div>
                <div className="member-info">
                  <h4>Sarah Jhonson</h4>
                  <span>Product Manager</span>
                  <p>Aut maiores voluptates amet et quis praesentium qui senda para</p>
                  <div className="social">
                    <a href="#."><i className="ri-twitter-fill"></i></a>
                    <a href="#."><i className="ri-facebook-fill"></i></a>
                    <a href="#."><i className="ri-instagram-fill"></i></a>
                    <a href="#."> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="300">
                <div className="pic">
                  <img src={TeamThree} className="img-fluid" alt="team" />
                </div>
                <div className="member-info">
                  <h4>William Anderson</h4>
                  <span>CTO</span>
                  <p>Quisquam facilis cum velit laborum corrupti fuga rerum quia</p>
                  <div className="social">
                    <a href="#."><i className="ri-twitter-fill"></i></a>
                    <a href="#."><i className="ri-facebook-fill"></i></a>
                    <a href="#."><i className="ri-instagram-fill"></i></a>
                    <a href="#."> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6 mt-4">
              <div className="member d-flex align-items-start" data-aos="zoom-in" data-aos-delay="400">
                <div className="pic">
                  <img src={TeamFour} className="img-fluid" alt="team" />
                </div>
                <div className="member-info">
                  <h4>Amanda Jepson</h4>
                  <span>Accountant</span>
                  <p>Dolorum tempora officiis odit laborum officiis et et accusamus</p>
                  <div className="social">
                    <a href="#."><i className="ri-twitter-fill"></i></a>
                    <a href="#."><i className="ri-facebook-fill"></i></a>
                    <a href="#."><i className="ri-instagram-fill"></i></a>
                    <a href="#."> <i className="ri-linkedin-box-fill"></i> </a>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section id="faq" className="faq">
        <div className="container" data-aos="fade-up">

          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
          </div>

          <div className="faq-list">
            <ul>
              <li data-aos="fade-up" data-aos-delay="100">
                <i className="bx bx-help-circle icon-help"></i> <a href="#." data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                  <p>
                    Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="200">
                <i className="bx bx-help-circle icon-help"></i> <a href="#." data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="300">
                <i className="bx bx-help-circle icon-help"></i> <a href="#." data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="400">
                <i className="bx bx-help-circle icon-help"></i> <a href="#." data-bs-toggle="collapse" data-bs-target="#faq-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-4" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                  </p>
                </div>
              </li>

              <li data-aos="fade-up" data-aos-delay="500">
                <i className="bx bx-help-circle icon-help"></i> <a href="#." data-bs-toggle="collapse" data-bs-target="#faq-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show"></i><i className="bx bx-chevron-up icon-close"></i></a>
                <div id="faq-list-5" className="collapse" data-bs-parent=".faq-list">
                  <p>
                    Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                  </p>
                </div>
              </li>

            </ul>
          </div>

        </div>
      </section>

    

    </main>

    </>
  )
}

export default Main
