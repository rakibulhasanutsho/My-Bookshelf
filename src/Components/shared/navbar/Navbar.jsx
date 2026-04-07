import React from 'react'
import { NavLink } from 'react-router'

function Navbar() {
  const links = (
    <>
      <li>
        <NavLink className={({isActive}) => `font-medium ${isActive ? "btn  text-green border-green-500":"btn"}`} to={"/"}>Home</NavLink>
        </li>
      <li>
        <NavLink className={({isActive}) => `font-medium ${isActive ? "btn  text-green border-green-500":"btn"}`} to={"/books"}>Listed Books</NavLink>
        </li>
      <li>
        <NavLink className={({isActive}) => `font-medium ${isActive ? "btn  text-green border-green-500":"btn"}`} to={"/wishlist"}>Pages to Read</NavLink>
        </li>
       
    </>
  )
  return (
    
      <div className="navbar bg-base-100 shadow-sm p-2 lg:px-10">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow ">
        {links}
      </ul>
    </div>
    <a className="btn btn-ghost text-2xl lg:text-3xl font-bold">My Bookshelf</a>
  </div>
  <div className="navbar-center hidden lg:flex ">
    <ul className="menu menu-horizontal px-1 space-x-10 text-[16px] font-medium flex items-center">
      {links}
    </ul>
  </div>
  <div className="navbar-end space-x-5">
    <a className="btn bg-green-500">Sing In</a>
    <a className="btn bg-blue-500">Sing Up</a>
  </div>
</div>
    
  )
}

export default Navbar
