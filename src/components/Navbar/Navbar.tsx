import React from 'react'
import { GoPlus } from "react-icons/go";
import { BiSearchAlt2,BiSolidUserCircle } from "react-icons/bi";
import Link from 'next/link';
import logo from "@/assets/logo3.png";
import Image from "next/image";
import './Navbar.css';
const Navbar = () => {
  return (
   <nav className='navbar'>
    <div className='navbar-left'>
      <Link href="/pages/profile" className='link'>
      <BiSolidUserCircle className='icon'/>
      </Link>
      <Link href="/pages/addblog" >
      <GoPlus className='icon'/>
      </Link>
      <Link href="/search">
      <BiSearchAlt2 className='icon'/>
      </Link>
    </div>
    <div className='navbar-middle'>
      <Image className="logo" src={logo} alt="Company logo"/>
    </div>
    <div className='navbar-right'>
      <Link href="/">Home</Link>
      <Link href="/pages/about">About</Link>
      <Link href="/pages/contact">Contact</Link>
    </div>
   </nav>
  )
}

export default Navbar
