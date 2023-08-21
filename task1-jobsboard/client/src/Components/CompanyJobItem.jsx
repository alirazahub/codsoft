import React from 'react'
import { MdDelete } from 'react-icons/md';
import { FaEdit } from 'react-icons/fa';
import { BsEyeFill } from 'react-icons/bs';

const CompanyJobItem = ({ jobDetail }) => {
    return (
        <div className='border-[1px] p-4'>
            <div className='flex justify-between items-center'>
                <div className='text-[25px] font-semibold'>{jobDetail?.name}</div>
                <div>
                    <button className="mr-3 text-gray-500"><BsEyeFill size={25} /></button>
                    <button className="mr-3 text-blue-500"><FaEdit size={25} /></button>
                    <button className="text-primary"><MdDelete size={25} /></button>
                </div>
            </div>
            <hr />
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Job Type:</div>
                <div className=''>{jobDetail?.type}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>No of Employees:</div>
                <div className=''>{jobDetail?.employees}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Location:</div>
                <div className=''>{jobDetail?.location}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Salary:</div>
                <div className=''>{jobDetail?.salary}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Education Level:</div>
                <div className=''>{jobDetail?.education}</div>
            </div>
            <div className='flex justify-between my-2'>
                <div className='font-semibold'>Status:</div>
                <div className={`${jobDetail?.status === "active" ? "bg-green-500" : "bg-primary"} text-center w-[100px] font-bold text-white`}>{jobDetail?.status}</div>
            </div>
        </div>
    )
}

export default CompanyJobItem
