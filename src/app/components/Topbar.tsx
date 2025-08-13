'use client';

import Link from "next/link";
import {  FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

export default function Topbar() {
  return (
    <div className="flex justify-between items-center bg-gray-100 dark:bg-gray-800 px-4 py-2">
        <div className="  text-gray-800 dark:text-gray-200">
            <Link href="tel:+91 99580 97807" className="flex gap-2 items-center"><FaPhoneAlt /> +91 99580 97807</Link>
        </div>
        <div className="flex gap-2 items-center text-gray-800 dark:text-gray-200">
            <Link href="mailto:info@icexpoindia.com" className="flex gap-2 items-center"><FaEnvelope /> info@icexpoindia.com</Link>
        </div>
    </div>
  )
}
