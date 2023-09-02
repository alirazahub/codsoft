import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaLink, FaLinkedin, FaGithub } from 'react-icons/fa';
import { FaGreaterThan } from 'react-icons/fa';
import { Progress } from 'antd';
import { Document, Page } from 'react-pdf';
import { key } from '../key.js'
import { useLocation } from 'react-router-dom';

const CandidateProfile = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const candidate = location.state?.candidate
    console.log(candidate)

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div className='font-rubik'>
            <div className='detail-banner'>
                <div className='bg-overlay py-[50px]'>
                    <div className='border-[1px] p-1 w-[130px] h-[130px] rounded-full mx-auto'>
                        <img src={`${key}/images/${candidate?.image}`} alt="" className='rounded-full' />
                    </div>
                    <div className='text-center text-[25px] font-semibold text-white'>{candidate?.name}</div>
                    <div className='text-center text-[20px] text-white'>{candidate?.experience[0]?.designation}</div>
                    <div className='flex items-center justify-center mt-6'>
                        <Link to={candidate?.portfolio} target='_blank' title='Visit Website' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLink size={20} color='white' />
                        </Link>
                        <Link to={candidate?.linkedin} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaLinkedin size={20} color='white' />
                        </Link>
                        <Link to={candidate?.github} target='_blank' className='mx-2 bg-primary hover:bg-[#eb7676] transition-all ease-in duration-500 h-[33px] w-[33px] flex items-center justify-center rounded-full'>
                            <FaGithub size={20} color='white' />
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
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Cover Letter</div>
                    <div dangerouslySetInnerHTML={{ __html: candidate?.coverLetter }} />
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Education Details</div>
                    <div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Degree</div>
                            <div className=''>{candidate?.education?.degree}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Institute</div>
                            <div className=''>{candidate?.education?.institute}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>Year</div>
                            <div className=''>{candidate?.education?.year}</div>
                        </div>
                        <div className='flex justify-between'>
                            <div className='font-semibold'>CGPA</div>
                            <div className=''>{candidate?.education?.cgpa}</div>
                        </div>
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Experience</div>
                    <div className='grid sm:grid-cols-2 grid-cols-1 gap-10'>
                        {candidate?.experience.map((item, index) => (
                            <div key={index} className='border-[1px] p-4'>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Company</div>
                                    <div className=''>{item?.company}</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Designation</div>
                                    <div className=''>{item?.designation}</div>
                                </div>
                                <div className='flex justify-between'>
                                    <div className='font-semibold'>Duration</div>
                                    <div className=''>{item?.duration}</div>
                                </div>
                                <div>
                                    <div className='font-semibold'>Skills</div>
                                    <div className='flex'>
                                        {item?.skills.map((skill, index) => (
                                            <div key={index} className='bg-primary text-white px-2 py-1 rounded-full text-[12px] mr-2'>{skill}</div>
                                        ))}
                                    </div>

                                </div>
                            </div>))}
                    </div>
                </div>
                <div className='my-4'>
                    <div className='font-semibold text-[20px]'>Skills</div>
                    <div className='grid sm:grid-cols-6 grid-cols-2 gap-10'>
                        {candidate?.skills.map((item, index) => (
                            <div key={index} className="flex flex-col items-center justify-center ">
                                <div className="relative">
                                    <Progress
                                        type="circle"
                                        percent={parseInt(item?.proficiency)}
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
                                        <div className="text-lg font-semibold text-gray-800 mr-1">{item?.proficiency}%</div>
                                        <div className="text-lg font-semibold text-gray-800">{item?.name}</div>
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
                        file={`${key}/images/${candidate?.resume}`}>
                        <Page pageNumber={1} />
                    </Document>
                </div>
            </div>
        </div>
    )
}

export default CandidateProfile
