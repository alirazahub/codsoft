import React from 'react'
import { BsHeart } from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { key } from '../key.js'
import axios from 'axios'
import { notification } from 'antd'
import { useCookies } from "react-cookie"
import { TiTickOutline } from 'react-icons/ti'
import { ImCross } from 'react-icons/im'


const CompanyCandidate = ({ job }) => {
    console.log(job)
    const navigate = useNavigate()
    const [cookies] = useCookies(["x-auth-token"])

    const handleShortList = async () => {
        try {
            await axios.put(`${key}/api/user/shortlist-candidate`, { jobId: job?.job?._id, candidateId: job?.candidate?._id }, {
                headers: {
                    "x-auth-token": cookies["x-auth-token"]
                }
            })
            notification.success({ message: 'Candidate shortlisted successfully' })
        } catch (error) {
            notification.error({ message: error.response.data.message })
        }
    }

    const handleStatus = async (status) => {
        try {
            await axios.put(`${key}/api/user/change-status`, { status, id: job._id }, {
                headers: {
                    "x-auth-token": cookies["x-auth-token"]
                }
            })
            notification.success({ message: 'Status changed successfully' })
        } catch (error) {
            notification.error({ message: error.response.data.message })
        }
    }
    return (
        <div className='border-[1px] p-3 sm:flex mb-10'>
            <div className='sm:w-[10%] mr-2'>
                <img src={`${key}/images/${job?.candidate?.image}`} alt="" className='w-[100px] ml-2 h-[120px] object-cover' />
            </div>
            <div className='sm:w-[90%] border-t-[1px] sm:border-l-[1px] pl-8'>
                <div className='flex justify-between py-2'>
                    <div className='font-semibold text-[20px]'>{job?.candidate?.name}</div>
                    <div className='font-semibold text-[20px]'>Applied for <span className='text-primary'> {job?.job?.title}</span></div>
                    <div className='flex'>
                        <div onClick={()=>handleStatus("selected")} className='mr-3 w-[35px] h-[35px] flex justify-center items-center hover:text-primary cursor-pointer transition-all ease-in duration-500 text-white text-[24px]  rounded-full hover:bg-white border-[1px] border-primary bg-primary'><TiTickOutline className='mt-[2px]' /></div>
                        <div onClick={()=>handleStatus("rejected")} className='mr-3 w-[35px] h-[35px] flex justify-center items-center hover:text-primary cursor-pointer transition-all ease-in duration-500 text-white text-[24px]  rounded-full hover:bg-white border-[1px] border-primary bg-primary'><ImCross className='mt-[2px]' /></div>
                        <div onClick={handleShortList} className='w-[35px] h-[35px] flex justify-center items-center hover:text-primary cursor-pointer transition-all ease-in duration-500 text-white text-[24px]  rounded-full hover:bg-white border-[1px] border-primary bg-primary'><BsHeart className='mt-[2px]' /></div>
                    </div>
                </div>
                <hr />
                <div className='pt-4'>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Education Level:</div>
                        <div className=''>
                            {job?.candidate?.education?.degree}
                        </div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Experience:</div>
                        <div className=''>
                            {job?.candidate?.experience.map((exp, index) => (
                                <div key={index}>
                                    <div> <span className='font-bold'>{exp?.designation} </span> at <span className='text-primary'> {exp?.company} </span> <span className='ml-3 text-[12px]'> {exp?.duration} </span></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Skills:</div>
                        <div className=''>
                            {job?.candidate?.skills.map((skill, index) => (
                                <span key={index} className='mr-2'>{skill.name}</span>
                            ))}
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='font-semibold'>Cover Letter</div>
                        <div dangerouslySetInnerHTML={{ __html: job?.candidate?.coverLetter }} />
                    </div>
                    <div className='flex justify-end py-2'>
                        <div onClick={() => navigate("/candidate-profile", { state: { candidate: job?.candidate } })} className='button-filled'>View Profile</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCandidate
