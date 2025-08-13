'use client';
import Image from 'next/image';
import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
export default function Footer() {
  return (
    <footer className="bg-[url('/footer-bg2.jpg')] bg-cover  text-gray-100 pt-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Us */}
        <div>
          
          <p className="text-gray-100 text-sm">
            <Image width={100} height={70}  src='/logo2.png' className="w-auto h-20 invert brightness-0" alt="logo" />
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm text-gray-100">
            <li><Link href="/" className="hover:underline">Home</Link></li>
            <li><Link href="/about" className="hover:underline">About</Link></li>
            <li><Link href="/services" className="hover:underline">Services</Link></li>
            <li><Link href="/contact-us" className="hover:underline">Contact</Link></li>
            <li><Link href="/downloads" className="hover:underline">Downloads</Link></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
           <Link
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 p-3 rounded-full text-white hover:bg-orange-500 transition-transform transform hover:scale-110"
    >
      <FaFacebookF />
    </Link>
    <Link
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 p-3 rounded-full text-white hover:bg-orange-500 transition-transform transform hover:scale-110"
    >
      <FaTwitter />
    </Link>
    <Link
      href="https://instagram.com"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 p-3 rounded-full text-white hover:bg-orange-500 transition-transform transform hover:scale-110"
    >
      <FaInstagram />
    </Link>
    <Link
      href="https://www.linkedin.com/company/icexpo-india/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-400 p-3 rounded-full text-white hover:bg-orange-500 transition-transform transform hover:scale-110"
    >
      <FaLinkedinIn />
    </Link>
          </div>
        </div>
        
      </div>
      <div className='text-center py-4 bg-blue-950 mt-4'>
        <p className='text-white'>&copy; ICEXPO CONSULTS PVT LTD. All rights reserved</p>
      </div>
    </footer>
  );
}
