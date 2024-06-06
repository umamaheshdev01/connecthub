import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import About from './components/About';
import Link from 'next/link';


function Page() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}
        {/* <!-- Spinner End --> */}

        {/* <!-- Navbar & Hero Start --> */}
        <div className="container-xxl position-relative p-0">
          
       <Navbar></Navbar>



          <div className="container-xxl bg-primary hero-header">
            <div className="container px-lg-5">
              <div className="row g-5 align-items-end">
                <div className="col-lg-6 text-center text-lg-start">
                  <h1 className="text-white mb-4 animated slideInDown">Where projects meet its potential</h1>
                  <p className="text-white pb-3 animated slideInDown">Connet-Hub is a open platform for sale and purchase of various kind of project related to technical and non technical field. Here user get benefitted to list there work and sale all around the world.</p>
                  <a href="#" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Add Project</a>
                  <Link href="/projects" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Projects</Link>
                </div>
                <div className="col-lg-6 text-center text-lg-start">
                  <img className="img-fluid animated zoomIn" src="img/hero.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Navbar & Hero End --> */}
    
      <About></About>
        

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
                       <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                  
                    <h3 className="mb-3">Project Marketing</h3>
                    <p className="mb-4">you can sell the projects by providing the details of the projects</p>
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
                      <i className="fa fa-3x fa-search text-primary mb-4"></i>
                    <h3 className="mb-3">Free Projects</h3>
                    <p className="mb-4">you can get free projects here......</p>
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
                <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                    <h3 className="mb-3">Templates</h3>
                    <p className="mb-4">You can get the templates from te project owners or he sellers.</p>
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
        <Footer></Footer>
        

        {/* <!-- Footer End --> */}

        {/* <!-- Back to Top --> */}
        <a href="#" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
      </div>
    </>
  );
}

export default Page;


