import React from 'react'

function See({pic,title,type}) {
  return (
  <div className={`col-lg-4 col-md-6 portfolio-item wow fadeInUp`} data-wow-delay="0.1s">
      <div className="rounded overflow-hidden">
        <div className="position-relative overflow-hidden">
          <img className="img-fluid w-100 "  style={{height : '15rem'}} src={pic} alt="" />
          <div className="portfolio-overlay">
            <a className="btn btn-square btn-outline-light mx-1" href={pic} data-lightbox="portfolio">
              <i className="fa fa-eye"></i>
            </a>
            <a className="btn btn-square btn-outline-light mx-1" href="">
              <i className="fa fa-link"></i>
            </a>
          </div>
        </div>
        <div className="bg-light p-4">
          <p className="text-primary fw-medium mb-2">{title}</p>
          <h5 className="lh-base mb-0">{type}</h5>
        </div>
      </div>
    </div>
  )
}

export default See