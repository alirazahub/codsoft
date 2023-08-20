import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { LuContact } from 'react-icons/lu'
import { LiaIndustrySolid } from 'react-icons/lia'
import { useNavigate } from 'react-router-dom'


const CompanyItem = ({ data }) => {
    const navigate = useNavigate()
    return (
        <div className='border-[1px] p-2'>
            <img className='w-[300px] h-[100px] mx-[auto]' src='/google.png' alt='company' />
            <div className='text-center'>
                <div className='font-bold text-[20px] py-2'>Company Name</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><HiLocationMarker /> Lahore, Pakistan</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><LiaIndustrySolid /> Industry</div>
                <div className='flex text-[16px] py-2 items-center text-gray-500'><LuContact /> Contact</div>
            </div>
            <div onClick={() => navigate("/company-detail", { state: { company: data } })} className='button-outlined text-center'>View Details</div>
        </div>
    )
}

export default CompanyItem
