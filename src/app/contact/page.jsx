'use client'

import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';
import emailjs from '@emailjs/browser';

function Page() {
  
  const form = useRef()

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_7i7k46s', 'template_325zmr6', form.current, {
        publicKey: 'IEk2rKb8gHnHQ8nir',
      })
      .then(
        () => {
          console.log('SUCCESS!');
             form.current.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <div className="container-xxl bg-white p-0">

        {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
          <div className="spinner-grow text-primary" style={{ width: '3rem', height: '3rem' }} role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div> */}

        <div className="container-xxl position-relative p-0">
          <Navbar />
          <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">
                  <h1 className="text-white animated slideInDown">Contact</h1>
                  <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
                  <nav aria-label="breadcrumb">
                    <ol className="breadcrumb justify-content-center">
                      <li className="breadcrumb-item"><a className="text-white" href="/">Home</a></li>
                      <li className="breadcrumb-item"><a className="text-white" href="/projects">Projects</a></li>
                      
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container-xxl py-5">
          <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
              <p className="section-title text-secondary justify-content-center"><span></span>Contact Us<span></span></p>
              <h1 className="text-center mb-5">Contact For Any Query</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <p className="text-center mb-4">Please writes your queries here. Our team will respond as quick as possible.</p>

                  <form ref={form} onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="name" name="user" placeholder="Your Name" />
                          <label htmlFor="name" name='user'>Your Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input type="email" className="form-control" id="email" name="user_mail" placeholder="Your Email" />
                          <label htmlFor="email" name='mail'>Your Email</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input type="text" className="form-control" id="subject" name="sub" placeholder="Subject"  />
                          <label htmlFor="subject" >Subject</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea className="form-control" placeholder="Leave a message here" id="message" name="message" style={{ height: '150px' }}></textarea>
                          <label htmlFor="message" >Message</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Send Message</button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Foot />

        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>

      </div>
    </>
  )
}

export default Page;
