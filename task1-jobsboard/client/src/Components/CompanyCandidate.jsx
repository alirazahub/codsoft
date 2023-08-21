import React from 'react'
import { BsHeart } from 'react-icons/bs'

const CompanyCandidate = () => {
    return (
        <div className='border-[1px] p-3 flex mb-10'>
            <div className='w-[10%] mr-2'>
                <img src="https://via.placeholder.com/150" alt="" className='w-[100px] ml-2 h-[120px] object-cover' />
            </div>
            <div className='w-[90%] border-l-[1px] pl-8'>
                <div className='flex justify-between py-2'>
                    <div className='font-semibold text-[20px]'>Ali Raza</div>
                    <div className='font-semibold text-[20px]'>Applied for <span className='text-primary'> Software Developer</span></div>
                    <div className='w-[35px] h-[35px] flex justify-center items-center hover:text-primary cursor-pointer transition-all ease-in duration-500 text-white text-[24px]  rounded-full hover:bg-white border-[1px] border-primary bg-primary'><BsHeart className='mt-[2px]' /></div>
                </div>
                <hr />
                <div className='pt-4'>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Education Level:</div>
                        <div className=''>
                            alirazadsaa
                        </div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Experience:</div>
                        <div className=''>
                            alirazadsaa
                        </div>
                    </div>
                    <div className='flex justify-between py-2'>
                        <div className='font-semibold'>Skills:</div>
                        <div className=''>
                            alirazadsaa
                        </div>
                    </div>
                    <div className='py-2'>
                        <div className='font-semibold'>Cover Letter</div>
                        <div className=''>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi magnam a ad in praesentium architecto veritatis sint corporis consectetur dolor, maiores dicta quod debitis error cupiditate. Non, nemo? Non, veniam!
                        </div>
                    </div>
                    <div className='flex justify-end py-2'>
                        <div className='button-filled'>View Profile</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyCandidate
