'use client'
import {React,useEffect,useState} from 'react'
import See from './See'

import { createClient } from '@supabase/supabase-js'
import Foot from './components/Foot'
const supabaseUrl = 'https://hapwlcudtodgzhemtoej.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcHdsY3VkdG9kZ3poZW10b2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTgxMDYsImV4cCI6MjAzMjg5NDEwNn0.CPD8u7fKRN6WKWK6FrJvqIztBTUK746k6LDZeAwrnQ8'
const supabase = createClient(supabaseUrl,supabaseKey)

function profile() {

  const [me,setMe] = useState('all')
  const [dataSet,setList]= useState(null)


  useEffect(()=>{

    
    

    const fetchMe = async()=>{

        const {data,error} = await supabase.from('Projects').select("*,Categories(*)")

        const list = []


       data.map((item)=>{
        list.push({
            classs : item.Categories.class,
            title : item.name ,
            pic: item.image,
            type : item.Categories.name,
            id : item.id
        })
       })
   
        console.log(list)

       setList(list);




       
    }


    fetchMe()






  },[])












  return (
    <>
    
    
    <div class="container-xxl py-5">
            <div class="container py-5 px-lg-5">

                 <div class="wow fadeInUp" data-wow-delay="0.1s">
                    <p class="section-title text-secondary justify-content-center"><span></span>Our Projects<span></span></p>
                    <h1 class="text-center mb-5">Recently Completed Projects</h1>
                </div>



 <div class="row mt-n2 wow fadeInUp" data-wow-delay="0.3s">
                    <div class="col-12 text-center">
                        <ul class="list-inline mb-5" id="portfolio-flters">

                      
                            <li className={`mx-2 ${me === 'all' ? 'active' : ''}`} onClick={() => setMe('all')}>All</li>
<li className={`mx-2 ${me === 'first' ? 'active' : ''}`} onClick={() => setMe('first')}>Civil</li>
<li className={`mx-2 ${me === 'second' ? 'active' : ''}`} onClick={() => setMe('second')}>CSE</li>
<li className={`mx-2 ${me === 'third' ? 'active' : ''}`} onClick={() => setMe('third')}>Mechanical</li>
<li className={`mx-2 ${me === 'fourth' ? 'active' : ''}`} onClick={() => setMe('fourth')}>ECE</li>


                        </ul>
                    </div>
    </div>


    <div class="row g-4 portfolio-container">
                  


                    
    {dataSet && dataSet.map((item)=>{
        if(me==='all'){
       return <See  title={item.title} pic={item.pic} id={item.id} type={item.type}></See>}
       else
       {
          if(me===item.classs)
            {
                 return <See  title={item.title} pic={item.pic} id={item.id} type={item.type}></See>
            }
       }
    })}

                     
    <Foot></Foot>

</div>

 

















      </div>
    </div>
                




    
    </>
  )
}

export default profile