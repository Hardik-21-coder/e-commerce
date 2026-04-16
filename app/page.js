"use client";
import React from 'react'
import HomePage from './components/ClientLayout'
import { usePathname } from 'next/navigation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const page = () => {
      const pathname = usePathname();
    
      const hideLayout =
        pathname.includes("/client/login") ||
        pathname.includes("/client/registration");
  return (
    <div>
     {!hideLayout && <Navbar />}
     
          <HomePage />
     
           {!hideLayout && <Footer />}
    </div>
  )
}

export default page
