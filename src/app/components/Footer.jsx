import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>

   <div className="container-xxl bg-dark text-light footer wow fadeIn" data-wow-delay="0.1s">
          <div className="container py-5 px-lg-5">
            <div className="row g-5">
              <div className="col-md-6 col-lg-4">
                <div className="bg-primary rounded p-4">
                  <a href="index.html">
                    <h1 className="text-white text-uppercase mb-3">Connect Hub</h1>
                  </a>
                  <p className="text-white mb-0">
                    serach for the projects and get the projects under budget.You can also get the develpoer details.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-light mb-4">Address</h5>
                <p><i className="fa fa-map-marker-alt me-3"></i>cmrit-hyderabad, kandlakoya-medchal, INDIA</p>
                <p><i className="fa fa-phone-alt me-3"></i>+919492755895</p>
                <p><i className="fa fa-envelope me-3"></i>connecthub@gmail.com</p>
                <div className="d-flex pt-2">
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-twitter"></i></a>
                                   <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-1" href=""><i className="fab fa-youtube"></i></a>
                  <a className="btn btn-square btn-outline-light rounded-circle me-0" href=""><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <h5 className="text-light mb-4">Quick Links</h5>
                <Link className="btn btn-link" href="/about">About Us</Link>
                <Link className="btn btn-link" href="/contact">Contact Us</Link>
                <Link className="btn btn-link" href="/projects">Our Services</Link>
              </div>
              <div className="col-md-6 col-lg-2">
                <h5 className="text-light mb-4">Popular Links</h5>
                <Link className="btn btn-link" href="/">Home</Link>
                <Link className="btn btn-link" href="/about">About Us</Link>
                <Link className="btn btn-link" href="/contact">Contact Us</Link>
                <Link className="btn btn-link" href="/projects">Our Services</Link>
                
              </div>
            </div>
          </div>
          <div className="container px-lg-5">
            <div className="copyright">
              <div className="row">
                <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                  &copy; <a className="border-bottom" href="/">Connect Hub</a>, All Right Reserved.

                  {/* <!-- This template is free to use as long as you don't remove the backlink to FreeHtml5.co --> */}
                  Designed By connect hub team
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
    

    </div>
  )
}

export default Footer