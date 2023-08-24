import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'

const JobDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const job = location.state.job

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // You can use 'auto' for instant scrolling
          });
    }
    //eslint-disable-next-line
    , [])
    return (
        <div className=''>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <p className='text-center text-lg text-[20px] text-primary'> <span className='text-[30px] text-white font-bold'>{job?.company_name} | </span>{job?.type}</p>
                    <h1 className='text-white text-center text-[40px] font-semibold'>{job?.title}</h1>
                    <p className='text-center text-lg text-[18px] text-primary'> <span className='text-[20px] text-white font-bold'>{job?.location} | </span> Posted on {job?.posted}</p>
                    <div className='flex items-center justify-center mt-6'>
                        <button className='button-filled mr-3'>I'm Interested</button>
                        <button className='button-outlined'>Refer a Frined</button>
                    </div>
                </div>
            </div>
            <div className='sm:px-[150px] px-2 font-rubik'>
                <div className='flex border-b-[1px] items-center  py-2'>
                    <div onClick={() => navigate(-1)} className='text-[16px] hover:underline cursor-pointer'>Jobs Listing</div>
                    <div className='px-2'><FaGreaterThan size={13} /></div>
                    <div className='text-gray-600'>Job Details</div>
                </div>

                <div className='sm:flex block'>
                    <div className='sm:w-[75%] border-r-[1px]'>
                        <div className='text-[20px] font-semibold pt-3'>About {job?.company_name}</div>
                        <div className='py-8'>{job?.company_name} is a leading software development company located in Reston, Virginia. We are committed to develop innovative software solutions for leading enterprises in the world, helping them grow their businesses using latest technology solutions.</div>
                        <div className='text-[20px] font-semibold pt-3'>Job Description</div>
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
                        <div className='text-[20px] font-semibold pt-3'>Job Requiremnets</div>
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
                            <button className='bg-black text-white py-2 px-4 hover:bg-gray-800'>I'm Interested</button>
                        </div>
                    </div>
                    <div className='sm:w-[20%] pl-14'>
                        <div className='text-[20px] font-semibold pt-3'>Job Information</div>
                        <div className='py-4'>
                            <div className='font-semibold'>Industry</div>
                            <div>{job?.category}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Salary</div>
                            <div>{job?.salary}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Work Experience</div>
                            <div>{job?.experience}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Location</div>
                            <div>{job?.location}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Skills</div>
                            <div>{job?.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail
