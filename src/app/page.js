import React from 'react';

function Page() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
          <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
            <a href="#" className="navbar-brand p-0">
              <h1 className="m-0">Connect Hub</h1>
              {/* <!-- <img src="img/logo.png" alt="Logo"> --> */}
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span className="fa fa-bars"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav mx-auto py-0">
                <a href="index.html" className="nav-item nav-link active">Home</a>
                <a href="about.html" className="nav-item nav-link">About</a>
                <a href="service.html" className="nav-item nav-link">Service</a>
                <a href="project.html" className="nav-item nav-link">Projects</a>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href="#" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Sign In</a>
            </div>
          </nav>

          <div className="container-xxl bg-primary hero-header">
            <div className="container px-lg-5">
              <div className="row g-5 align-items-end">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">Where projects meet its potential</h1>
                  <p className="text-white pb-3 animated slideInDown">Connet-Hub is a open platform for sale and purchase of various kind of project related to technical and non technical field. Here user get benefitted to list there work and sale all around the world.</p>
                  <a href="#" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Add Project</a>
                  <a href="#" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Projects</a>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                  <img className="img-fluid animated zoomIn" src="img/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}

        {/* <!-- Feature Start --> */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                  <h5 className="mb-3">Project Marketing</h5>
                  <p className="m-0">You can sell your projects here or help others by sharing with your experience and you can help the needy people by giving the project details.</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-search text-primary mb-4"></i>
                  <h5 className="mb-3">Accessibility and Reach</h5>
                  <p className="m-0">Websites allow businesses, organizations, and individuals to reach a global audience. They are accessible 24/7, providing users with information.</p>
                </div>
              </div>
              <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                <div className="feature-item bg-light rounded text-center p-4">
                  <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                  <h5 className="mb-3">Customer Engagement</h5>
                  <p className="m-0">Websites provide a platform for engaging with customers through various means such as blogs, contact forms, live chats, and social media integration. </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Feature End --> */}

        {/* <!-- About Start --> */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
              <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary">About Us<span></span></p>
                <h1 className="mb-5">#1 Digital solution with 10 years of experience</h1>
                <p className="mb-4">At connect hub, we are passionate about choosing porjects . Founded in 2024, our mission is to give people projects at min cost. Over the years, we have grown and evolved, but our commitment to customer promise has remained steadfast.</p>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Project Marketing</p>
                    <p className="mb-2">85%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-primary" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Accessibility and Reach</p>
                    <p className="mb-2">90%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-secondary" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <div className="skill mb-4">
                  <div className="d-flex justify-content-between">
                    <p className="mb-2">Design & Development</p>
                    <p className="mb-2">95%</p>
                  </div>
                  <div className="progress">
                    <div className="progress-bar bg-dark" role="progressbar" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                </div>
                <a href="#" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
              </div>
              <div className="col-lg-6">
                <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src="img/about.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        {/* <!-- About End --> */}

        {/* <!-- Facts Start --> */}
        <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
          <div className="container py-5 px-lg-5">
            <div className="row g-4">
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                            <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Projects Completed</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Happy Clients</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                <i className="fa fa-award fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Awards Win</p>
              </div>
              <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                <p className="text-white mb-0">Team Members</p>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Facts End --> */}

        {/* <!-- Service Start --> */}
        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <p className="section-title text-secondary text-center">Our Services<span></span></p>
            <h1 className="text-center mb-5">What Solutions We Provide</h1>
            <div className="row g-4">
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-1.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-5.png" alt="Icon" />
                    <h3 className="mb-3">Digital Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-2.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-1.png" alt="Icon" />
                    <h3 className="mb-3">Internet Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-3.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-6.png" alt="Icon" />
                    <h3 className="mb-3">Content Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-4.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-3.png" alt="Icon" />
                    <h3 className="mb-3">Social Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-5.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-8.png" alt="Icon" />
                    <h3 className="mb-3">B2B Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                <div className="service-item d-flex position-relative text-center h-100">
                  <img className="bg-img" src="img/service-6.jpg" alt="" />
                  <div className="service-text p-5">
                    <img className="mb-4" src="img/icons/icon-9.png" alt="Icon" />
                    <h3 className="mb-3">E-mail Marketing</h3>
                    <p className="mb-4">Tempor rebum no at dolore lorem clita rebum rebum ipsum rebum stet dolor sed justo kasd</p>
                    <a className="btn" href="">
                      <i className="fa fa-plus text-primary me-3"></i>Read More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Service End --> */}

        {/* <!-- Footer Start --> */}
        <div className="container-xxl bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5 px-lg-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="bg-primary rounded p-4">
                  <a href="index.html">
                    <h1 className="text-white text-uppercase mb-3">DGital</h1>
                  </a>
                  <p className="text-white mb-0">
                    Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo magna dolore erat amet
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-light mb-4">Address</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                <p><i className="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                   <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-light mb-4">Quick Links</h5>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Our Services</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Support</a>
              </div>
              <div className="col-md-6 col-lg-2">
                <h5 className="text-light mb-4">Popular Links</h5>
                <a className="btn btn-link" href="">About Us</a>
                <a className="btn btn-link" href="">Contact Us</a>
                <a className="btn btn-link" href="">Our Services</a>
                <a className="btn btn-link" href="">Terms & Condition</a>
                <a className="btn btn-link" href="">Support</a>
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                  {/* <!-- This template is free to use as long as you don't remove the backlink to FreeHtml5.co --> */}
                  Designed By <a className="border-bottom" href="https://freehtml5.co">FreeHtml5.co</a>
                </div>
                <div className="col-md-6 text-center text-md-end">
                  <div className="footer-menu">
                    <a href="">Home</a>
                    <a href="">Cookies</a>
                    <a href="">Help</a>
                    <a href="">FQAs</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Footer End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </>
  );
}

export default Page;


