import React, { useState } from 'react';
import Link from '../Link/Link';
import { RiMenu2Fill } from "react-icons/ri";
import { MdOutlineClose } from "react-icons/md";


const Navbar = () => {
 const [open, setOpen] = useState(false)

 const routes = [
  { id: 1, path: '/', name: 'Home' },
  { id: 2, path: '/about', name: 'About' },
  { id: 3, path: '/services', name: 'Services' },
  { id: 4, path: '/contact', name: 'Contact' },
  { id: 5, path: '*', name: 'NotFound' },
 ];

 return (
  <nav>
   <div onClick={() => setOpen(!open)} className='md:hidden text-3xl'>
    {
     open===true?  <RiMenu2Fill></RiMenu2Fill>:<MdOutlineClose></MdOutlineClose>
    }
    
   
   </div>

   <ul className='md:flex'>
    {
     routes.map(route => <Link key={route.id} route={route}></Link>)
    }
   </ul>

  </nav>
 );
};

export default Navbar;