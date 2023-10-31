import React from 'react'
import { Link } from "react-router-dom";


const Navbar = () => {
  return (
    <div>
    <nav class="flex items-center bg-gray-900 text-white justify-between p-5 shadow-lg text-sm font-medium">
   
    <ul class="flex gap-3 items-center">
      <li>
        <Link to="/">
          <button class="px-4 py-2 hover:bg-gray-800 transition-colors rounded-lg">
            Home
          </button>
        </Link>
      </li>
      <li>
        <Link to="/about">
          <button class="px-4 py-2 hover:bg-gray-800 transition-colors rounded-lg">
            About
          </button>
        </Link>
      </li>
      <li>
        <Link to="/headandtail">
          <button class="px-4 py-2 hover:bg-gray-800 transition-colors rounded-lg">
            Head and Tail
          </button>
        </Link>
      </li>
     
    </ul>
    <ul class="flex items-center gap-3">
      
     
    </ul>
  </nav>
    
    
    </div>
  )
}

export default Navbar