'use client'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
// Import useRouter hook
import React from 'react'
import {


  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton

} from '@clerk/nextjs'
import {  currentUser, getAuth } from '@clerk/nextjs/server';


function  Navbar() {
  
  const router = useRouter(); 
  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' }
  ];

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light px-4 px-lg-5 py-3 py-lg-0">
        <Link href="/" className="navbar-brand p-0">
          <h1 className="m-0">Connect Hub</h1>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="fa fa-bars"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav mx-auto py-0">
            {/* Map through navItems array */}
            {navItems.map((item, index) => (
              
               
                <Link key={index} href={item.href} className={`nav-item nav-link ${router.pathname === item.href ? 'active' : ''}`}>
                  {item.label}
                </Link>
              
            ))}
          </div>
          {/* <a className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Sign In</a> */}
         
         
          
          <SignedIn>
          <UserButton  className='p-2 '></UserButton>
          </SignedIn>

          <SignedOut>
          <SignInButton className='btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block'></SignInButton> 
          </SignedOut>
        </div>
      </nav>
    </>
  )
}

export default Navbar;
