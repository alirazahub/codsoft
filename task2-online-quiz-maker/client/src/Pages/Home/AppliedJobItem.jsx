import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { IoBagRemove } from 'react-icons/io5'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { key } from '../../key'

const AppliedJobItem = ({ data }) => {

    return (
        <div className='border-[1px] p-4 hover:bg-white transition-all ease-in duration-500 rounded-lg'>
            <div className='flex justify-between'>
                <img className='w-[130px] h-[60px] object-contain' src={`${key}/images/${data?.company?.company_logo}`} alt="comp logo" />
                <div>
                    <h1 className='text-lg text-primary font-bold'>{data?.job?.job?.title}</h1>
                    <p className='text-sm text-gray-400'>{data?.job?.job?.category}</p>
                </div>
            </div>
            <div className='my-4'>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><HiLocationMarker className='mr-3' /> {data?.job?.job?.city}, {data?.job?.job?.country} </div>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><IoBagRemove className='mr-3' /> {data?.job?.job?.experienceLevel} </div>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><LiaMoneyCheckAltSolid className='mr-3' /> {data?.job?.job?.salary} </div>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <div className={`text-white font-bold w-[100px] flex items-center p-[1px] pl-2 text-center rounded-r-xl ${data?.job?.job?.type === "Full Time" ? "bg-green-600" : data?.job?.job?.type === "Part Time" ? "bg-blue-600" : data?.job?.job?.type === "Internship" ? "bg-orange-600" : data?.job?.job?.type === "Contract" ? "bg-pink-600" : "bg-purple-600"}`}>{data?.job?.job?.type}</div>
                <div className={`text-white font-bold w-[100px] flex items-center p-[1px] pr-2 justify-end rounded-l-xl capitalize ${data?.job?.status === "selected" ? "bg-green-500" : data?.job?.status === "rejected" ? "bg-red-600" : "bg-yellow-400"}`}>{data?.job?.status}</div>
            </div>
        </div>
    )
}

export default AppliedJobItem
