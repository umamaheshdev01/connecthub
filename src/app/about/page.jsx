import React from 'react';
import About from '../components/About';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';

function Page() {
  return (
    <>
      <div className="container-xxl bg-white p-0">
        {/* <div
          id="spinner"
          className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
        >
          <div
            className="spinner-grow text-primary"
            style={{ width: '3rem', height: '3rem' }}
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

        <div className="container-xxl position-relative p-0">
          <Navbar />
          <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">
                  <h1 className="text-white animated slideInDown">About Us</h1>
                  <hr
                    className="bg-white mx-auto mt-0"
                    style={{ width: '90px' }}
                  />
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Home
                        </a>
                      </li>
                      <li className="breadcrumb-item">
                        <a className="text-white" href="#">
                          Pages
                        </a>
                      </li>
                      <li
                        className="breadcrumb-item text-white active"
                        aria-current="page"
                      >
                        About
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <About />

        {/* Team Start */}
       <div className="container-xxl py-5">
  <div className="container py-5 px-lg-5">
    <div className="wow fadeInUp" data-wow-delay="0.1s">
      <p className="section-title text-secondary justify-content-center">
        <span></span>Our Team<span></span>
      </p>
      <h1 className="text-center mb-5">Our Team Members</h1>
    </div>
    <div className="row g-4">
      {/* <!-- Team Member 1 --> */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img className="img-fluid rounded-circle mb-4" src="img/team-1.jpg" alt="" />
            <h5>Shiak Sumaiya</h5>
            <span>Team Lead</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Team Member 2 --> */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img className="img-fluid rounded-circle mb-4" src="img/team-2.jpg" alt="" />
            <h5>Rakshita Goud</h5>
            <span>kali</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Team Member 3 --> */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img className="img-fluid rounded-circle mb-4" src="img/team-3.jpg" alt="" />
            <h5>T.Dilip</h5>
            <span>kali</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
      {/* <!-- Duplicate Team Member 3 --> */}
      <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.7s">
        <div className="team-item bg-light rounded">
          <div className="text-center border-bottom p-4">
            <img className="img-fluid rounded-circle mb-4" src="img/team-3.jpg" alt="" />
            <h5>R.Madhu sai</h5>
            <span>Developer</span>
          </div>
          <div className="d-flex justify-content-center p-4">
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-twitter"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-instagram"></i>
            </a>
            <a className="btn btn-square mx-1" href="">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

        {/* Team End */}

       <Foot></Foot>

        <a
          href="#"
          className="btn btn-lg btn-secondary btn-lg-square back-to-top"
        >
          <i className="bi bi-arrow-up"></i>
        </a>
      </div>
    </>
  );
}

export default Page;
