import React from 'react'
import { LuQuote } from 'react-icons/lu'


const CarouselItem = ({ description, name, rank }) => {
    return (
        <div className='px-10 py-5'>
            <div className='font-roboto text-gray-600'>{description}</div>
            <div className='mt-4 flex'>
                <div>
                    <img src="/cover-image.jpg" alt="client" className='rounded-full w-[50px] h-[50px] mx-[auto]' />
                </div>
                <div className='ml-3'>
                    <div className='font-bold text-[16px] text-primary'>{name}</div>
                    <div className='text-gray-600'>{rank}</div>
                </div>
            </div>
            <div className='text-gray-200 flex justify-end'><LuQuote size={50} /></div>
        </div>
    )
}

export default CarouselItem
