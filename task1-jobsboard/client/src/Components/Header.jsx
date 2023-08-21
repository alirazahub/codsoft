import React, { useState } from 'react';
import { Link, NavLink,useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi'; // You can import the hamburger menu icon from react-icons library
import { FaUser } from 'react-icons/fa';
import { FiLogOut } from 'react-icons/fi';
import { Dropdown, Space } from 'antd';
import { LuLayoutDashboard } from 'react-icons/lu';
import { PiBagSimpleFill } from 'react-icons/pi';
import { FaUsers } from 'react-icons/fa';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isCompany, setIsCompany] = useState(true);
  const [isUser, setIsUser] = useState(false);
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handlelLogout = async() => {}
  const items = [
    {
      key: '1',
      label: 'Profile',
      icon: <LuLayoutDashboard size={20} />,
      onClick: () => navigate('/profile')
    },
    {
      key: '2',
      label: 'Applied Jobs',
      icon: <PiBagSimpleFill size={20} />,
      onClick: () => navigate('/applied-jobs')
    },
    {
      key: '3',
      label: 'Logout',
      icon: <FiLogOut size={20} />,
      onClick: () => handlelLogout()
    },
  ]
  const company = [
    {
      key: '1',
      label: 'Company Profile',
      icon: <LuLayoutDashboard size={20} />,
      onClick: () => navigate('/company-profile')
    },
    {
      key: '2',
      label: 'All Jobs',
      icon: <PiBagSimpleFill size={20} />,
      onClick: () => navigate('/company-jobs')
    },
    {
      key: '3',
      label: 'Candidates',
      icon: <FaUsers size={20} />,
      onClick: () => navigate('/company-candidates')
    },
    {
      key: '4',
      label: 'Logout',
      icon: <FiLogOut size={20} />,
      onClick: () => handlelLogout()
    },
  ]
  return (
    <div className='sticky top-0 z-50 w-[100%] bg-white shadow-lg'>
      <div className='flex justify-between items-center py-3 sm:px-[150px] px-3'>
        <Link to='/' className='font-rubik text-[24px] font-semibold'>Jobs<span className='text-primary'>Board</span></Link>
        <div className='hidden md:flex items-center justify-between'>
          <NavLink to='/' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Home</NavLink>
          <NavLink to='/companies' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Companies</NavLink>
          <NavLink to='/jobs' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Jobs</NavLink>
          <NavLink to='/contact-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Contact Us</NavLink>
          {!isCompany && !isUser && <Link className="mx-3 border-[1px] border-primary py-1 font-bold text-primary hover:text-white transition-all ease-in duration-500 hover:bg-primary px-8 rounded-full">Login</Link>}
          {isCompany && <Dropdown
            menu={{
              items: company,
            }}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space
                className="mx-3 border-[1px] border-primary p-2 font-bold text-primary hover:text-white transition-all ease-in duration-500 hover:bg-primary rounded-full"
              >
                <FaUser />
              </Space>
            </Link>
          </Dropdown>}
          {isCompany && <Link className="mx-3 border-[1px] border-primary py-1 font-bold text-primary hover:text-white transition-all ease-in duration-500 hover:bg-primary px-8 rounded-full">Post Job</Link>}
          {isUser && <Dropdown
            menu={{
              items,
            }}
          >
            <Link onClick={(e) => e.preventDefault()}>
              <Space
                className="mx-3 border-[1px] border-primary p-2 font-bold text-primary hover:text-white transition-all ease-in duration-500 hover:bg-primary rounded-full"
              >
                <FaUser />
              </Space>
            </Link>
          </Dropdown>}
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
          <NavLink to='/companies' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Companies</NavLink>
          <NavLink to='/jobs' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Jobs</NavLink>
          <NavLink to='/contact-us' className={({ isActive }) => isActive ? "nav-active" : "nav-inactive"}>Contact Us</NavLink>
          <Link className="mt-4 border-[1px] border-primary py-1 font-bold text-primary hover:text-white hover:bg-primary px-8 rounded-full">Login</Link>
        </div>
      )}
    </div>
  );
}

export default Header;
