import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { LuContact } from 'react-icons/lu'
import { LiaIndustrySolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'
import { key } from '../key'


const CompanyItem = ({ data, jobs }) => {
    const navigate = useNavigate()
    return (
        <div className='border-[1px] font-rubik p-2'>
            <img className='w-[300px] h-[100px] mx-[auto]' src={`${key}/images/${data?.company_logo}`} alt='company' />
            <div className='text-center'>
                <div className='font-bold text-[20px] py-2'>{data?.company_name}</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><HiLocationMarker /> {data?.city}, {data?.country}</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><LiaIndustrySolid /> {data?.industry}</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><LuContact /> {data?.company_email}</div>
            </div>
            <div onClick={() => navigate("/company-detail", { state: { company: data, jobs: jobs } })} className='button-outlined text-center'>View Details</div>
        </div>
    )
}

export default CompanyItem
