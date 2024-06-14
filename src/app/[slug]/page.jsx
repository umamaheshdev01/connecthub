'use client'
import React, { useState,useEffect } from 'react';
import Navbar from '../components/Navbar';

import Portfolio from '../profile';

import { createClient } from '@supabase/supabase-js'
import Foot from '../components/Foot'
const supabaseUrl = 'https://hapwlcudtodgzhemtoej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcHdsY3VkdG9kZ3poZW10b2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTgxMDYsImV4cCI6MjAzMjg5NDEwNn0.CPD8u7fKRN6WKWK6FrJvqIztBTUK746k6LDZeAwrnQ8'
const supabase = createClient(supabaseUrl,supabaseKey)

function Page({params}) {
  
    const [dataSet,setBro] = useState({
        title  : 'Project' ,
        owner : 'Owner' ,
        cost : 1,
        description : 'Hi friends',
        mail : 'email',
        img : 'img/about.png'
    })



     useEffect(()=>{

    
    

    const fetchMe = async()=>{

        const {data,error} = await supabase.from('Projects').select("*,Users(*)").eq('id',params.slug)

        const dum = data[0]

        setBro({

             title  : dum.name ,
        owner : dum.Users.name ,
        cost : dum.cost,
        description : dum.description,
        mail : dum.Users.email,
        img : dum.image

        })

          


       
    }


    fetchMe()






  },[])






  return (
    <>
      <div className="container-xxl bg-white p-0">
       

<div className="container-xxl position-relative p-0">
        <Navbar />

        <div className="container-xxl py-5 bg-primary hero-header">
          <div className="container my-5 py-5 px-lg-5">
            <div className="row g-5 py-5">
              <div className="col-12 text-center">
                <h1 className="text-white animated slideInDown">{dataSet.title}</h1>
                <hr className="bg-white mx-auto mt-0" style={{ width: '90px' }} />
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb justify-content-center">
                    
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>

        {/* Project Start */}

         <div class="container-xxl py-5">
            <div class="container py-5 px-lg-5">
                <div class="row g-5 align-items-center">
                    <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                        <p class="section-title text-secondary">{dataSet.owner}<span></span></p>
                        <h1 class="mb-5">{dataSet.title}</h1>
                     
                        <p class="mb-4">{dataSet.description}</p>
                        

                        
                          <h3 class="mb-5">Price : {dataSet.cost}</h3>
                        <a href={`mailto:${dataSet.mail}`} class="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Contact Owner</a>
                    </div>
                    <div class="col-lg-6">
                        <img class="img-fluid wow zoomIn"   data-wow-delay="0.5s" src={dataSet.img}/>
                    </div>
                </div>
            </div>
        </div>
        
    
    <Foot></Foot>

      

        <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top">
          <i className="bi bi-arrow-up"></i>
        </a>
        </div>
      </div>

    </>
  );
}

export default Page;
