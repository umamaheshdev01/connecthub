import React from 'react'

function About() {
  return (
    <>
    
    
    
    
    
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
                <h1 className="mb-5">Bridging Innovation and Collaboration for a Smarter Future.</h1>
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
                    <p className="mb-2">Customer Engagement</p>
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
    
    
    
    
    
    
    </>
  )
}

export default About