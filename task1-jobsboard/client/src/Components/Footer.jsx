import React from 'react'
import { Link } from 'react-router-dom'
import { BsFacebook, BsGithub, BsInstagram, BsLinkedin, BsTwitter } from 'react-icons/bs'

const Footer = () => {
    return (
        <div>
            <div className='bg-[#474747] sm:px-[150px] px-[20px] py-10'>
                <div className='grid sm:grid-cols-3 grid-cols-1 gap-4'>
                    <div>
                        <div className='text-white font-rubik my-2 font-bold text-[30px]'>Jobs<span className='text-primary'>Board</span></div>
                        <div className='text-white'>
                            JobsBoard is a platform where you can find your dream job and apply for it. You can also post a job if you are a company.
                            This is the best platform for job seekers and job providers.
                        </div>
                    </div>
                    <div className='flex sm:justify-center justify-start mt-4 sm:mt-0'>
                        <div>
                            <div className='text-white font-rubik my-2 font-bold text-[20px]'>Quick Links</div>
                            <div className='text-white'>
                                <Link to="/" className='text-white hover:text-primary hover:underline'>Home</Link>
                            </div>
                            <div className='text-white'>
                                <Link to="/" className='text-white hover:text-primary hover:underline'>Jobs</Link>
                            </div>
                            <div className='text-white'>
                                <Link to="/" className='text-white hover:text-primary hover:underline'>Companies</Link>
                            </div>
                            <div className='text-white'>
                                <Link to="/" className='text-white hover:text-primary hover:underline'>About Us</Link>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center sm:justify-end mt-4 sm:mt-0'>
                        <div>
                            <div className='text-white font-rubik my-2 font-bold text-[20px]'>Newsletter</div>
                            <div className='text-white'>
                                Subscribe to our newsletter to get latest updates about jobs and companies.
                            </div>
                            <div className='flex mt-4 sm:mt-2'>
                                <input className='border w-full border-[#474747] px-2 py-1 rounded-l-sm outline-none' placeholder='Enter your email' />
                                <button className='bg-primary px-3 py-1 rounded-r-sm text-white'>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#302f2f] sm:px-[150px] px-[20px] py-2'>
                <div className='mx-auto sm:flex block justify-between items-center'>
                    <div className=''>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'>Terms</Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'>Privacy</Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'>Contact Us</Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'>About Us</Link>
                    </div>
                    <div className='flex'>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'> <BsLinkedin size={20} /> </Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'><BsGithub size={20} /></Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'> <BsFacebook size={20} /> </Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'><BsInstagram size={20} /></Link>
                        <Link to="/" className='mx-3 py-2 px-2 md:px-0 text-white hover:text-primary hover:underline'><BsTwitter size={20} /></Link>
                    </div>
                    <div className='px-3 text-white text-[12px]'>
                        <div>Designed & Developed by <Link className='text-primary  hover:underline' target='_blank' to="https://www.github.com/alirazahub">alirazahub</Link></div>
                        <p className='flex'> <span className='font-bold mr-2'>Jobs Board </span>  ©2023 All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
