"use client";
import React from 'react'
import Image from "next/image"
import Link from "next/link"
import Logo from "@/assets/ratking.jpeg"
import {AiOutlineMenu,AiOutlineClose,AiOutlineInstagram, AiOutlineFacebook,AiOutlineTwitter} from "react-icons/ai"
import { useState } from "react"

const Navbar = () => {
  const [menuOpen,setMenuOpen] = useState(false);
  const handleNav = () => 
  {
    setMenuOpen(!menuOpen);
  }
  return (
    <nav className='fixed w-full h-24 shadow-xl bg-black'>
      <div className='flex justify-between item-center h-full w-full px-4 2xl:px-16'>
        <Image
        src={Logo}
        alt="logo"
        width="205"
        height="75"
        className='cursor-pointer'
        priority
        />
        <div >
          <ul className='hidden sm:flex'>
            <Link href="/About">
              <li className='ml-10 uppercase hover:border-b text-xl'>About</li>
            </Link>
            <Link href="/Contact">
            <li className='ml-10 uppercase hover:border-b text-xl'>Contact</li>
            </Link>
            <Link href="/Books">
            <li className='ml-10 uppercase hover:border-b text-xl'>Books</li>
            </Link>
            <Link href="/Bookmarks">
            <li className='mx-10 uppercase hover:border-b text-xl'>Bookmarks</li>
            </Link>
          </ul>
        </div>
        <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
          <AiOutlineMenu size={25}/>

      </div>
    </div>
    <div className={
      menuOpen
      ? "fixed left-0 top-0 w-[65%] sm:hidden h-screen bg-[#ecf0f3] p-10 ease-in duration=-500"
      : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
    }>
      <div className='flex w-full items-center justify-end'>
        <div onClick={handleNav} className='cursor-pointer'>
        <AiOutlineClose size={25} color='black'/>
        </div>
        </div>

        <div className='flex-col py-4'>
          <ul>
            <Link href="/About">
            <li onClick={() => setMenuOpen(false)}
              className='py-4 cursor-pointer text-black'>About</li>
              </Link>
              <Link href="/Contact">
            <li onClick={() => setMenuOpen(false)}
              className='py-4 cursor-pointer text-black '>Constact</li>
              </Link>
              <Link href="/Books">
            <li onClick={() => setMenuOpen(false)}
              className='py-4 cursor-pointer text-black'>Books</li>
              </Link>
              <Link href="/Bookmarks">
            <li onClick={() => setMenuOpen(false)}
              className='py-4 cursor-pointer text-black'>Bookmarks</li>
              </Link>
          </ul>

      </div>
      <div className='flex flex-row justify-around pt-10 item-center'>
        <AiOutlineInstagram size={30} color='black' className='cursor-pointer' />
        <AiOutlineFacebook size={30} color='black' className='cursor-pointer' />
        <AiOutlineTwitter size={30} color='black' className='cursor-pointer' />
      </div>
    </div>

        
    </nav>
  )
}
export default Navbar