import { createClient } from '@supabase/supabase-js'
const supabaseUrl = 'https://hapwlcudtodgzhemtoej.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhhcHdsY3VkdG9kZ3poZW10b2VqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTczMTgxMDYsImV4cCI6MjAzMjg5NDEwNn0.CPD8u7fKRN6WKWK6FrJvqIztBTUK746k6LDZeAwrnQ8';
const supabase = createClient(supabaseUrl, supabaseKey);
import { NextResponse } from "next/server"



export const POST = async(req,res)=>{

    function extractUsername(email) {

        let parts = email.split('@');
        let username = parts[0];

        let capitalizedUsername = username.charAt(0).toUpperCase() + username.slice(1);
    
        return capitalizedUsername;
    }
    
    
    const data1 = await req.json()


    const myemail = data1.data.email_addresses[0].email_address
    const namam = extractUsername(myemail)

    const {data,error} = await supabase.from('Users').insert({email : myemail,name : namam})

    if(error)
    {
        return NextResponse.json({error},{status:500})
    }
    else
    {
        return NextResponse.json({msg:myemail},{status:200})
    }

}




