import React from 'react'
import { HiLocationMarker } from 'react-icons/hi'
import { IoBagRemove } from 'react-icons/io5'
import { LiaMoneyCheckAltSolid } from 'react-icons/lia'
import { BsArrowRight } from 'react-icons/bs'
import { AiOutlineHeart } from 'react-icons/ai'

const JobItem = ({ data }) => {
    return (
        <div className='border-[1px] p-4 hover:bg-secondary transition-all ease-in duration-500 cursor-pointer rounded-lg'>
            <div className='flex justify-between'>
                <img className='w-[130px] h-[60px] object-contain' src={data.image} alt="comp logo" />
                <div>
                    <h1 className='text-lg text-primary font-bold'>{data.title}</h1>
                    <p className='text-sm text-gray-400'>{data.category}</p>
                </div>
            </div>
            <div className='my-4'>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><HiLocationMarker className='mr-3' /> {data.location} </div>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><IoBagRemove className='mr-3' /> {data.experience} </div>
                <div className='flex my-3 text-[15px] text-gray-500 items-center'><LiaMoneyCheckAltSolid className='mr-3' /> {data.salary} </div>
            </div>
            <hr />
            <div className='flex justify-between my-4'>
                <div className={`text-white font-bold w-[100px] text-center rounded-sm ${data.type === "Full Time" ? "bg-green-600" : data.type === "Part Time" ? "bg-blue-600" : data.type === "Internship" ? "bg-orange-600": data.type === "Contract" ? "bg-pink-600":"bg-purple-600"}`}>{data.type}</div>
                <div className='text-gray-400'>{data.posted}</div>
            </div>
            <hr />
            <div className='mt-3 flex justify-between'>
                <button className='border-[1px] rounded-full p-2 border-red-600 hover:text-white hover:bg-red-600 transition-all ease-in duration-500 text-red-600  flex justify-center '> <AiOutlineHeart size={20} /></button>
                <button className='border-[1px] rounded-full p-2 border-green-600 hover:text-white hover:bg-green-600 transition-all ease-in duration-500 text-green-600  flex justify-center '> <BsArrowRight size={20} /></button>
            </div>
        </div>
    )
}

export default JobItem
