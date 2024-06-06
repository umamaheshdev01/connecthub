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
            type : item.Categories.name
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

                      
                            <li class="mx-2 active " data-filter="*" onClick={()=>setMe('all')}>All</li>
                            <li class="mx-2 " onClick={()=>setMe('first')} data-filter=".first">Civil</li>
                            <li class="mx-2" onClick={()=>setMe('second')} data-filter=".second">CSE</li>
                            <li class="mx-2" onClick={()=>setMe('third')} data-filter=".third">Mechanical</li>
                            <li class="mx-2" onClick={()=>setMe('fourth')}  data-filter=".fourth">ECE</li>

                        </ul>
                    </div>
    </div>


    <div class="row g-4 portfolio-container">
                  


                    
    {dataSet && dataSet.map((item)=>{
        if(me==='all'){
       return <See  title={item.title} pic={item.pic} type={item.type}></See>}
       else
       {
          if(me===item.classs)
            {
                 return <See  title={item.title} pic={item.pic} type={item.type}></See>
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