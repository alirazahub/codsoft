import React, { useEffect } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FaFacebook, FaGreaterThan, FaInstagram, FaLink, FaLinkedin, FaTwitter } from 'react-icons/fa'
import JobItem from '../Pages/Home/JobItem'

const CompanyDetail = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const company = location.state.company
    const jobs = location.state.jobs
    console.log("company", company)
    console.log("Jobs", jobs)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth' // You can use 'auto' for instant scrolling
        });
        //eslint-disable-next-line
    }, [])
    return (
        <div className=''>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <h1 className='text-white text-center text-[40px] font-semibold'>{company?.company_name}</h1>
                    <p className='text-center text-lg text-[18px] text-primary'> <span className='text-[20px] text-white font-bold'>{company?.city}, {company?.country} | </span> Established in {company?.established_date}</p>
                    <div className='flex items-center justify-center mt-6'>
                        <Link to={company?.website} target='_blank' title='Visit Website' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLink size={25} color='white' />
                        </Link>
                        <Link to={company?.facebook} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaFacebook size={25} color='white' />
                        </Link>
                        <Link to={company?.instagram} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaInstagram size={25} color='white' />
                        </Link>
                        <Link to={company?.twitter} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaTwitter size={25} color='white' />
                        </Link>
                        <Link to={company?.linkedin} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLinkedin size={25} color='white' />
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
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Company Overview</div>
                        <div className='py-8'>
                            <div dangerouslySetInnerHTML={{ __html: company?.company_overview }} />
                        </div>
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Services</div>
                        <div className='py-8'>
                            <div dangerouslySetInnerHTML={{ __html: company?.company_services }} />
                        </div>

                        <div className='py-2'>
                            <div className='text-[20px] font-semibold py-[20px] text-primary'>Option Positions</div>
                            <div className=' px-3 grid sm:grid-cols-2 grid-cols-1 sm:gap-10 gap-6'>
                                {
                                    jobs.map((item, index) => (
                                        <JobItem key={index} data={{...item,company:company}} />
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <div className='sm:w-[25%] pl-10'>
                        <div className='text-[20px] font-semibold pt-3 text-primary'>Company Information</div>
                        <div className='py-4'>
                            <div className='font-semibold'>CEO</div>
                            <div>{company?.ceo_name}</div>
                            <div>{company?.ceo_email}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Industry</div>
                            <div>{company?.industry}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Number of Employees</div>
                            <div>{company?.employees}</div>
                        </div>
                        <div className='py-4'>
                            <div className='font-semibold'>Location</div>
                            <div>{company?.city}, {company?.country}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyDetail
