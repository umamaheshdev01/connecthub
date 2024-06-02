import React from 'react'

function Navbar() {
  return (
  <>
  
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
                <a href="project.html" className="nav-item nav-link">Projects</a>
                <a href="contact.html" className="nav-item nav-link">Contact</a>
              </div>
              <a href="#" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Sign In</a>
            </div>
          </nav>

  
  
  
  
  
  
  
  
  
  
  </>
  )
}

export default Navbar