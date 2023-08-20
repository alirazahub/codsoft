import React from 'react'
import { PiBagFill } from 'react-icons/pi'
import { FaClipboardList } from 'react-icons/fa'
import { LiaIndustrySolid } from 'react-icons/lia'
import JobItem from './Home/JobItem'
import meta from "../images/meta.png"
import adobe from "../images/adobe.png"
import google from "../images/google.png"
import micro from "../images/micro.png"
import linkedin from "../images/linkedin.png"
import netsol from "../images/netsol.png"
import netflix from "../images/Netflix.png"

const Jobs = () => {
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
        <div>
            <div className='detail-banner'>
                <div className='bg-overlay py-[140px]'>
                    <div className='text-center font-bold text-[30px] text-white'>Jobs</div>
                    <p className='text-center text-lg text-[20px] text-primary'> Find your dream Job</p>
                </div>
            </div>
            <div className='my-14 sm:mx-[150px] mx-2 bg-background'>
                <div className='grid grid-cols-4 gap-10 p-4'>
                    <div className='flex items-center bg-white border-[1px]'>
                        <div className='px-2'><PiBagFill color='gray' size={20} /></div>
                        <input type='text' placeholder='Find Job...' className='w-full bg-[transparent] outline-none border-none' />
                    </div>
                    <div className='flex items-center bg-white border-[1px]'>
                        <div className='px-2'><FaClipboardList color='gray' size={20} /></div>
                        <select type='text' className='w-full bg-[transparent] outline-none border-none'>
                            <option value=''>-- Select Location --</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                        </select>
                    </div>
                    <div className='flex items-center bg-white border-[1px]'>
                        <div className='px-2'><LiaIndustrySolid color='gray' size={20} /></div>
                        <select type='text' className='w-full bg-[transparent] outline-none border-none'>
                            <option value=''>-- Select Category --</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                        </select>
                    </div>
                    <div className='button-filled text-center'>Search</div>
                </div>
            </div>

            <div className='my-14 sm:mx-[150px] mx-2 grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-5'>
                {
                    jobData.map((item, index) => (
                        <JobItem key={index} data={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default Jobs
