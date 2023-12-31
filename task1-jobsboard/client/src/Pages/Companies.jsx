import React, { useState, useEffect } from 'react'
import { PiBagFill } from 'react-icons/pi'
import { FaClipboardList } from 'react-icons/fa'
import { LiaIndustrySolid } from 'react-icons/lia'
import CompanyItem from '../Components/CompanyItem'
import { Link } from 'react-router-dom'
import { HashLoader } from 'react-spinners'
import axios from 'axios'
import { key } from '../key'


const Companies = () => {
    const [loading, setLoading] = useState(false)
    const [companyData, setCompanyData] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(`${key}/api/user/all-companies`)
            setCompanyData(response.data.companieswithJobs)
            setLoading(false)
        }
        fetchData()
        // eslint-disable-next-line
    }, [])

    return (
        <div>
            <div className='detail-banner'>
                <div className='bg-overlay py-[110px]'>
                    <div className='text-center font-bold text-[30px] text-white'>Companies</div>
                    <p className='text-center text-lg text-[20px] text-primary'> Find your dream Company</p>
                    <div className='flex justify-center items-center'>
                        <div className='text-white'>
                            Register your company and hire the best employees
                        </div>
                    </div>
                    <div className='flex justify-center items-center'><Link to="/register-company" className='button-filled'>Register</Link></div>
                </div>
            </div>
            <div className='my-14 sm:mx-[150px] mx-2 bg-background'>
                <div className='grid sm:grid-cols-4 grid-cols-1 sm:gap-10 gap-5 p-4'>
                    <div className='flex items-center bg-white border-[1px]'>
                        <div className='px-2'><PiBagFill color='gray' size={20} /></div>
                        <input type='text' placeholder='Find Companies...' className='w-full bg-[transparent] outline-none border-none' />
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
                            <option value=''>-- Select Industry --</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                            <option value=''>Select Category</option>
                        </select>
                    </div>
                    <div className='button-filled text-center'>Search</div>
                </div>
            </div>
            {loading && <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div>}
            <div className='my-14 sm:mx-[150px] mx-2 grid sm:grid-cols-3 grid-cols-2 sm:gap-10 gap-5'>
                {
                    companyData?.map((item, index) => (
                        <CompanyItem key={index} data={item?.company} jobs={item?.jobs} />
                    ))
                }
            </div>
        </div>
    )
}

export default Companies
