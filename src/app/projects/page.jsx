import React from 'react';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';
import Portfolio from '../profile';

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
                <h1 className="text-white animated slideInDown">Project</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    <li className="breadcrumb-item">
                      <a className="text-white" href="/">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item">
                      <a className="text-white" href="/contac">
                        Contact
                      </a>
                    </li>
                    <li className="breadcrumb-item text-white active" aria-current="page" href='/projects'>
                      Projects
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Project Start */}
        <Portfolio />

      

        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
        </div>
      </div>

    </>
  );
}

export default Page;
