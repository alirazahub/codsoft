import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGreaterThan, FaInstagram, FaLink, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import JobItem from '../Pages/Home/JobItem'
import meta from "../images/meta.png"
import adobe from "../images/adobe.png"
import google from "../images/google.png"
import micro from "../images/micro.png"
import linkedin from "../images/linkedin.png"
import netsol from "../images/netsol.png"
import netflix from "../images/Netflix.png"

const CompanyDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const company = location.state.company

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // You can use 'auto' for instant scrolling
        });
    }
        //eslint-disable-next-line
        , [])
    const jobData = [
        {
            title: "DevOps Engineer",
            location: "San Francisco",
            salary: "$110,000 - $140,000",
            company_image: meta,
            company_name: "Meta",
            type: "Full Time",
            posted: "1 week ago",
            category: "Software Developement",
            experience: "1 to 2 Years",
        },
        {
            title: "Senior Software Engineer",
            location: "New York",
            salary: "$120,000 - $150,000",
            company_image: google,
            company_name: "Google",
            type: "Part Time",
            posted: "2 days ago",
            category: "Software Developement",
            experience: "Fresh Graduates"
        },
        {
            title: "Product Manager",
            location: "Seattle",
            salary: "$110,000 - $140,000",
            company_image: micro,
            company_name: "Microsoft",
            type: "Full Time",
            posted: "1 day ago",
            category: "Product Management",
            experience: "2 to 3 Years"
        },
        {
            title: "UX/UI Designer",
            location: "Cupertino",
            salary: "$100,000 - $130,000",
            company_image: linkedin,
            company_name: "Linkedin",
            type: "Contract",
            posted: "3 days ago",
            category: "Designing",
            experience: "Student"
        },
        {
            title: "DevOps Engineer",
            company: "Meta",
            location: "San Francisco",
            salary: "$110,000 - $140,000",
            company_image: adobe,
            company_name: "Adobe",
            type: "Full Time",
            posted: "1 week ago",
            category: "Software Developement",
            experience: "1 to 2 Years"
        },
        {
            title: "Data Scientist",
            location: "Seattle",
            salary: "$130,000 - $160,000",
            company_image: netsol,
            company_name: "Netsol",
            type: "Remote",
            posted: "4 days ago",
            category: "Data Science",
            experience: "3 to 4 Years"
        },
        {
            title: "Frontend Developer",
            location: "Menlo Park",
            salary: "$110,000 - $140,000",
            company_image: netflix,
            company_name: "Netflix",
            type: "Full Time",
            posted: "5 days ago",
            category: "Software Developement",
            experience: "1 to 1.5 Years"
        },
        {
            title: "Marketing Manager",
            company: "Adobe",
            location: "San Jose",
            salary: "$100,000 - $130,000",
            company_image: adobe,
            company_name: "Adobe",
            type: "Internship",
            posted: "6 days ago",
            category: "Marketing",
            experience: "0 to 1 Years"
        },
        {
            title: "Backend Engineer",
            location: "Los Gatos",
            salary: "$120,000 - $150,000",
            company_image: google,
            company_name: "Google",
            type: "Full Time",
            posted: "1 week ago",
            category: "Software Developement",
            experience: "1 to 2 Years"
        },
        {
            title: "Graphic Designer",
            location: "New York",
            salary: "$90,000 - $120,000",
            company_image: adobe,
            company_name: "Adobe",
            type: "Contract",
            posted: "2 weeks ago",
            category: "Designing",
            experience: "1 to 2 Years"
        },
        {
            title: "Sales Manager",
            location: "San Francisco",
            salary: "$130,000 - $160,000",
            company_image: netflix,
            company_name: "Netflix",
            type: "Full Time",
            posted: "2 weeks ago",
            category: "Sales",
            experience: "1 to 2 Years"
        },
    ];
    return (
        <div className=''>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <h1 className='text-white text-center text-[40px] font-semibold'>{company?.company_name}</h1>
                    <p className='text-center text-lg text-[18px] text-primary'> <span className='text-[20px] text-white font-bold'>{company?.location} | </span> Established in {company?.established}</p>
                    <div className='flex items-center justify-center mt-6'>
                        <Link to="https://alirazahub.tech/" target='_blank' title='Visit Website' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLink size={25} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaFacebook size={25} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaInstagram size={25} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaTwitter size={25} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLinkedin size={25} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaYoutube size={25} color='white' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='sm:px-[150px] px-2 font-rubik'>
                <div className='flex border-b-[1px] items-center  py-2'>
                    <div onClick={() => navigate(-1)} className='text-[16px] hover:underline cursor-pointer'>Companies</div>
                    <div className='px-2'><FaGreaterThan size={13} /></div>
                    <div className='text-gray-600'>Company Details</div>
                </div>

                <div className='sm:flex block'>
                    <div className='sm:w-[75%] border-r-[1px]'>
                        <div className='text-[20px] font-semibold pt-3'>Company Overview</div>
                        <div className='py-8'>
                            <ul className='list-disc list-inside'>
                                <li>Design, develop, test, and deploy software solutions.</li>
                                <li>Work in a fast-paced environment in agile methodology.</li>
                                <li>Work with other developers and designers to develop software solutions.</li>
                                <li>Interact with clients to gather requirements and scope the project.</li>
                                <li>Work with project manager to plan the project.</li>
                                <li>Work with QA team to ensure quality of the product.</li>
                            </ul>
                        </div>
                        <div className='text-[20px] font-semibold pt-3'>Services</div>
                        <div className='py-8'>
                            <ul className='list-disc list-inside'>
                                <li>Design, develop, test, and deploy software solutions.</li>
                                <li>Work in a fast-paced environment in agile methodology.</li>
                                <li>Work with other developers and designers to develop software solutions.</li>
                                <li>Interact with clients to gather requirements and scope the project.</li>
                                <li>Work with project manager to plan the project.</li>
                                <li>Work with QA team to ensure quality of the product.</li>
                            </ul>
                        </div>

                        <div className='py-2'>
                            <div className='text-[20px] font-semibold py-[20px]'>Option Positions</div>
                            <div className=' px-3 grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-6'>
                                {
                                    jobData.map((item, index) => (
                                        <JobItem key={index} data={item} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[25%] pl-10'>
                        <div className='text-[20px] font-semibold pt-3'>Company Information</div>
                        <div className='py-4'>
                            <div className='font-semibold'>CEO</div>
                            <div>{company?.ceo}</div>
                            <div>{company?.ceoEmail}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Industry</div>
                            <div>{company?.industry}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Number of Employees</div>
                            <div>{company?.totalEmployees}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Location</div>
                            <div>{company?.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail
