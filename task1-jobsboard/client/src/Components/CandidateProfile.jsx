import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLink, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { Progress } from 'antd';
import { Document, Page } from 'react-pdf';

const CandidateProfile = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='font-rubik'>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <div className='border-[1px] p-1 w-[130px] h-[130px] rounded-full mx-auto'>
                        <img src="https://via.placeholder.com/130" alt="" className='rounded-full' />
                    </div>
                    <div className='text-center text-[25px] font-semibold text-white'>Ali Raza</div>
                    <div className='text-center text-[20px] text-white'>Web Developer</div>
                    <div className='flex items-center justify-center mt-6'>
                        <Link to="https://alirazahub.tech/" target='_blank' title='Visit Website' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLink size={20} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaFacebook size={20} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaInstagram size={20} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaTwitter size={20} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLinkedin size={20} color='white' />
                        </Link>
                        <Link to="https://facebook.com/" target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaYoutube size={20} color='white' />
                        </Link>
                    </div>
                </div>
            </div>
            <div className='sm:px-[150px] px-2 '>
                <div className='flex border-b-[1px] items-center  py-2'>
                    <div onClick={() => navigate(-1)} className='text-[16px] hover:underline cursor-pointer'>Candidates</div>
                    <div className='px-2'><FaGreaterThan size={13} /></div>
                    <div className='text-gray-600'>Candidate Details</div>
                </div>
                <div className='flex justify-between items-center py-2'>
                    <div className='font-semibold text-[28px]'>Candidate Details</div>
                    <div className='font-semibold text-[20px]'>Applied For <span className='text-primary'>Developer</span></div>
                    <div className='flex items-center'>
                        <div className='text-gray-600 text-[14px]'>Share Profile</div>
                        <div className='flex items-center cursor-pointer justify-center ml-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] rounded-full'>
                            <FaLink size={20} color='white' />
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Cover Letter</div>
                    <div>This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate This is the cover letter of the candidate
                        This is the cover letter of the candidateThis is the cover letter of the candidateThis is the cover letter of the candidateThis is the cover letter of the candidate
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Education Details</div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Degree</div>
                            <div className=''>BSCS</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Institute</div>
                            <div className=''>UET Lahore</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Year</div>
                            <div className=''>2018</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>CGPA</div>
                            <div className=''>3.23</div>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Experience</div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
                        {[1, 2].map((item, index) => (
                            <div key={index} className='border-[1px] p-4'>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Company</div>
                                    <div className=''>UET Lahore</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Designation</div>
                                    <div className=''>Web Developer</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Duration</div>
                                    <div className=''>2018-2020</div>
                                </div>
                                <div>
                                    <div className='font-semibold'>Skills</div>
                                    <div className='flex'>
                                        <div className='bg-primary text-white px-2 py-1 rounded-full text-[12px]'>HTML</div>
                                        <div className='bg-primary text-white px-2 py-1 rounded-full text-[12px] ml-2'>CSS</div>
                                        <div className='bg-primary text-white px-2 py-1 rounded-full text-[12px] ml-2'>JS</div>
                                        <div className='bg-primary text-white px-2 py-1 rounded-full text-[12px] ml-2'>React</div>
                                    </div>

                                </div>
                            </div>))}
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Skills</div>
                    <div className='grid sm:grid-cols-6 grid-cols-2 gap-10'>
                        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center ">
                                <div className="relative">
                                    <Progress
                                        type="circle"
                                        percent={80}
                                        width={150}
                                        strokeWidth={10}
                                        strokeLinecap="round"
                                        format={() => ''}
                                        strokeColor={{
                                            '0%': '#E2E8F0',
                                            '100%': '#FF4F6C',
                                        }}
                                    />
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-lg font-semibold text-gray-800 mr-1">80%</div>
                                        <div className="text-lg font-semibold text-gray-800">CSS</div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Resume</div>
                    <Document
                        className="w-full h-full object-contain rounded-lg"
                        file={""}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </div>
    )
}

export default CandidateProfile
