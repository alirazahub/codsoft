import React, { useEffect, useState } from 'react'
import CompanyCandidate from '../Components/CompanyCandidate'
import axios from 'axios'
import { key } from '../key.js'
import { useCookies } from "react-cookie"
import { HashLoader } from "react-spinners"

const Candidates = () => {
    const [jobs, setJobs] = useState([])
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(["x-auth-token"])

    useEffect(() => {
        const getJobs = async () => {
            setLoading(true)
            try {
                const res = await axios.get(`${key}/api/user/company-applied-job`, {
                    headers: {
                        "x-auth-token": cookies["x-auth-token"]
                    }
                })
                setJobs(res.data.jobs)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        getJobs()
        // eslint-disable-next-line
    }, [])

    return (
        <div className='font-rubik'>
            <div className='bg-background my-3'>
                <div className='sm:px-[150px] px-3 flex justify-between p-3'>
                    <div className='font-bold text-[30px]'>Candidates who Applied</div>
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
            {loading && <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div>}
            <div className='sm:px-[150px] px-3 '>
                {
                    jobs.map((job, index) => (
                        <CompanyCandidate key={index} job={job} />
                    ))
                }
            </div>
        </div>
    )
}

export default Candidates
