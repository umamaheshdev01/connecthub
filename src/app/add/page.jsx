'use client';

import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';
import { createClient } from '@supabase/supabase-js';
import { useUser } from '@clerk/nextjs';

const supabaseUrl = 'https://hapwlcudtodgzhemtoej.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcHdsY3VkdG9kZ3poZW10b2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTgxMDYsImV4cCI6MjAzMjg5NDEwNn0.CPD8u7fKRN6WKWK6FrJvqIztBTUK746k6LDZeAwrnQ8';
const supabase = createClient(supabaseUrl, supabaseKey);

function Page() {
  const { user } = useUser();
  const [projectName, setProjectName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState(null);

  const handleImageUpload = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    

    const usermail = user.emailAddresses[0].emailAddress

    const {data,error} = await supabase.from('Users').select('*').eq('email',usermail)
    
    const iduser = data[0].id

    let imageUrl = '';

    if (image) {
      const { data, error } = await supabase
        .storage
        .from('fun')
        .upload(`uma/${image.name}`, image, {
          cacheControl: '3600',
          upsert: false
        });

      if (error) {
        console.error('Error uploading image:', error);
        return;
      }

      imageUrl = `https://hapwlcudtodgzhemtoej.supabase.co/storage/v1/object/public/fun/uma/${image.name}`;
    //   console.log('Image uploaded successfully:', data);
    }

    const { data: insertData, error: insertError } = await supabase
      .from('Projects')
      .insert([
        {
          user : iduser,
          name: projectName,
          cost: price,
          cat: parseInt(category),
          description: description,
          image: imageUrl
        }
      ]);


      console.log('Done')

    // if (insertError) {
    //   console.error('Error inserting project:', insertError);
    //   return;
    // }

    // console.log('Project inserted successfully:', insertData);

    // Clear form
    setProjectName('');
    setPrice('');
    setCategory('');
    setDescription('');
    setImage(null);
  };

  return (
    <>
      <div className="container-xxl bg-white p-0">
        <div className="container-xxl position-relative p-0">
          <Navbar />
          <div className="container-xxl py-5 bg-primary hero-header">
            <div className="container my-5 py-5 px-lg-5">
              <div className="row g-5 py-5">
                <div className="col-12 text-center">
                  <h1 className="text-white animated slideInDown">Add Project</h1>
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
              <p className="section-title text-secondary justify-content-center"><span></span>Add Project<span></span></p>
              <h1 className="text-center mb-5">Add your Project here</h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-7">
                <div className="wow fadeInUp" data-wow-delay="0.3s">
                  <p className="text-center mb-4">Innovation and Imaginations have no limits so dear friend add your projects here and make it public.</p>

                  <form onSubmit={handleSubmit}>
                    <div className="row g-3">
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="user"
                            placeholder="Project Name"
                            value={projectName}
                            onChange={(e) => setProjectName(e.target.value)}
                          />
                          <label htmlFor="name">Project Name</label>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-floating">
                          <input
                            type="number"
                            className="form-control"
                            id="price"
                            name="price"
                            placeholder="Price"
                            value={price}
                            onChange={(e) => setPrice(e.target.value)}
                          />
                          <label htmlFor="price">Price</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <select
                            className="form-control"
                            id="category"
                            name="category"
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                          >
                            <option value="" disabled>Select Category</option>
                            <option value='4'>ECE</option>
                            <option value='2'>CSE</option>
                            <option value="1">Civil</option>
                            <option value="3">Mechanical</option>
                          </select>
                          <label htmlFor="category">Category</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <textarea
                            className="form-control"
                            placeholder="Leave a message here"
                            id="description"
                            name="description"
                            style={{ height: '150px' }}
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                          ></textarea>
                          <label htmlFor="description">Description</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-floating">
                          <input
                            type="file"
                            className="form-control"
                            id="images"
                            name="images"
                            onChange={handleImageUpload}
                          />
                          <label htmlFor="images">Upload Image</label>
                        </div>
                      </div>
                      <div className="col-12">
                        <button className="btn btn-primary w-100 py-3" type="submit">Add Project</button>
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
  );
}

export default Page;
