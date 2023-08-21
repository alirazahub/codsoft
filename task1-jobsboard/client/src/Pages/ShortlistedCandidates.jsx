import React from 'react'
import CompanyShortlistedCandidate from '../Components/CompanyShortlistedCandidate'

const Candidates = () => {
    return (
        <div className='font-rubik'>
            <div className='bg-background my-3'>
                <div className='sm:px-[150px] px-3 flex justify-between p-3'>
                    <div className='font-bold text-[30px]'>All Shortlisted Candidates</div>
                    <div className='flex'>
                        <div className='mr-3'>
                            <select className='w-[200px] py-2 cursor-pointer outline-none border-[1px]'>
                                <option>-- All --</option>
                                <option>-- Job 1 --</option>
                                <option>-- Job 2 --</option>
                                <option>-- Job 3 --</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className='sm:px-[150px] px-3 '>
                <CompanyShortlistedCandidate />
                <CompanyShortlistedCandidate />
                <CompanyShortlistedCandidate />
                <CompanyShortlistedCandidate />
                <CompanyShortlistedCandidate />
            </div>
        </div>
    )
}

export default Candidates
