'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { HiMenu, HiX } from 'react-icons/hi' // or use FaBars and FaTimes from 'react-icons/fa'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className="w-full p-2 bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src="/logo2.png" width={100} height={70} className="w-auto h-16 cursor-pointer" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8">
          <li><Link href="/" className="hover:underline text-gray-800">Home</Link></li>
          <li><Link href="/about" className="hover:underline text-gray-800">About</Link></li>
          <li><Link href="/services" className="hover:underline text-gray-800">Services</Link></li>
          <li><Link href="/contact-us" className="hover:underline text-gray-800">Contact Us</Link></li>
        </ul>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-800 focus:outline-none"
        >
          {menuOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button onClick={() => setMenuOpen(false)}>
            <HiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col items-start p-6 space-y-6 text-lg">
          <li><Link href="/" onClick={() => setMenuOpen(false)} className="text-gray-800">Home</Link></li>
          <li><Link href="/about" onClick={() => setMenuOpen(false)} className="text-gray-800">About</Link></li>
          <li><Link href="/services" onClick={() => setMenuOpen(false)} className="text-gray-800">Services</Link></li>
          <li><Link href="/contact-us" onClick={() => setMenuOpen(false)} className="text-gray-800">Contact Us</Link></li>
        </ul>
      </div>
    </nav>
  )
}
