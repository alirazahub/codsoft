import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // You can import the hamburger menu icon from react-icons library

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <div className='sticky top-0 z-50 w-[100%] bg-white shadow-lg'>
      <div className='flex justify-between items-center py-3 sm:px-[150px] px-3'>
        <Link to='/' className='font-rubik text-[24px] font-semibold'>Jobs<span className='text-primary'>Board</span></Link>
        <div className='hidden md:flex items-center justify-between'>
          <NavLink to='/' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Home</NavLink>
          <NavLink to='/employers' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Employers</NavLink>
          <NavLink to='/candidates' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Candidates</NavLink>
          <NavLink to='/about-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>About Us</NavLink>
          <NavLink to='/contact-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Contact Us</NavLink>
          <Link className="mx-3 border-[1px] border-primary py-1 font-bold text-primary hover:text-white hover:bg-primary px-8 rounded-full">Login</Link>
        </div>
        <div className='md:hidden flex items-center'>
          <GiHamburgerMenu
            className='text-primary cursor-pointer text-2xl'
            onClick={toggleMobileMenu}
          />
        </div>
      </div>
      {mobileMenuOpen && (
        <div className='md:hidden flex flex-col bg-white py-4 px-[150px]'>
          <NavLink to='/' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Home</NavLink>
          <NavLink to='/employers' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Employers</NavLink>
          <NavLink to='/candidates' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Candidates</NavLink>
          <NavLink to='/about-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>About Us</NavLink>
          <NavLink to='/contact-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Contact Us</NavLink>
          <Link className="mt-4 border-[1px] border-primary py-1 font-bold text-primary hover:text-white hover:bg-primary px-8 rounded-full">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
