import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { FaGreaterThan } from 'react-icons/fa'
import { key } from '../key'
import axios from 'axios'
import { useCookies } from 'react-cookie'
import { notification } from 'antd'


const JobDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const job = location.state.job
    const [cookies] = useCookies(['x-auth-token'])
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // You can use 'auto' for instant scrolling
        });
    }
        //eslint-disable-next-line
        , [])
    const handleFav = async () => {
        try {
            await axios.put(`${key}/api/user/add-job-to-fav`, { jobId: job._id }, { headers: { 'x-auth-token': cookies['x-auth-token'] } })
            notification.success({ message: 'Job added to favourites' })
        } catch (error) {
            notification.error({ message: error.response.data.message })
        }
    }
    return (
        <div className=''>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <p className='text-center text-lg text-[20px] text-primary'> <span className='text-[30px] text-white font-bold'>{job?.company?.company_name} | </span>{job?.type}</p>
                    <h1 className='text-white text-center text-[40px] font-semibold'>{job?.title}</h1>
                    <p className='text-center text-lg text-[18px] text-primary'> <span className='text-[20px] text-white font-bold'>{job?.city}, {job?.country} | </span> Posted on {new Date(job?.createdAt)?.toLocaleDateString([], { day: '2-digit', month: '2-digit', year: '2-digit' })} {new Date(job?.createdAt)?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</p>
                    <div className='flex items-center justify-center mt-6'>
                        <button className='button-filled mr-3'>I'm Interested</button>
                        <button onClick={handleFav} className='button-outlined'>Add to Favrouite</button>
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
                        <div className='text-[20px] text-primary font-semibold pt-3'>About {job?.company?.company_name}</div>
                        <div className='py-8' dangerouslySetInnerHTML={{ __html: job?.company?.company_overview }} />
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Job Description</div>
                        <div className='py-8'>
                            <div dangerouslySetInnerHTML={{ __html: job?.description }} />
                        </div>
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Job Requiremnets</div>
                        <div className='py-8'>
                            <div dangerouslySetInnerHTML={{ __html: job?.requirements }} />
                        </div>

                        <div className='py-2'>
                            <button className='bg-black text-white py-2 px-4 hover:bg-gray-800'>I'm Interested</button>
                        </div>
                    </div>
                    <div className='sm:w-[20%] pl-14'>
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Job Information</div>
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
                            <div>{job?.experienceLevel}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Location</div>
                            <div>{job?.city}, {job?.country}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Skills</div>
                            <div className='w-full'>
                                {job?.skills.map((item, index) => (
                                    <span key={index} className='bg-gray-400 text-[12px] px-2 py-1 text-white rounded-lg mr-2'>{item}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JobDetail
