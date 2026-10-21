'use client'

import React, {useState} from 'react'
import Link from "next/link";


const Sidebar = () => {
    const [showSidebar, setShowSidebar] = useState(false)

    return (
    <div className="sm:hidden">
      {/* Hamburger icon */}
      <button onClick={() => setShowSidebar(true)} className="text-amber-50">
        ☰
      </button>

      {/* Sidebar */}

      {showSidebar && (
          <div className="fixed inset-0 z-50 bg-amber-950 text-amber-50 p-6">
          <button
            onClick={() => setShowSidebar(false)}
            className="absolute top-5 right-5 text-3xl"
            >
            ×
          </button>

          <ul className="flex flex-col gap-6 mt-12 font-bold text-lg">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/about">About</Link></li>
            <li><Link href="/shorten">Shorten</Link></li>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/github">GitHub</Link></li>
          </ul>
        </div>
        )}

    </div>
  )}
export default Sidebar
