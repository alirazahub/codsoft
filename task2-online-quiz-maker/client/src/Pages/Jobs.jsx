import React, { useEffect, useState } from 'react'
import { PiBagFill } from 'react-icons/pi'
import { FaClipboardList } from 'react-icons/fa'
import { LiaIndustrySolid } from 'react-icons/lia'
import JobItem from './Home/JobItem'
import axios from 'axios'
import { key } from '../key'
import { HashLoader } from 'react-spinners'

const Jobs = () => {
    const [jobData, setJobData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(`${key}/api/user/get-jobs`)
            setJobData(response.data.jobs)
            setLoading(false)
        }
        fetchData()
    }, [])

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
                {loading && <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div>}
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
