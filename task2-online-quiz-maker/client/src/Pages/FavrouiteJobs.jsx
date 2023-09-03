import React, { useState, useEffect } from 'react'
import FavJobItem from '../Components/FavJobItem'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { key } from '../key'
import { HashLoader } from 'react-spinners'
import { notification } from 'antd'


const FavrouiteJobs = () => {
    const [jobData, setJobData] = useState([])
    const [loading, setLoading] = useState(false)
    const [cookies] = useCookies(['x-auth-token'])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true)
            const response = await axios.get(`${key}/api/user/get-fav-jobs`, {
                headers: {
                    'x-auth-token': cookies['x-auth-token']
                }
            })
            setJobData(response.data.jobs)
            setLoading(false)
        }
        fetchData()
        //eslint-disable-next-line
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.put(`${key}/api/user/remove-job-from-fav`, { jobId: id }, { headers: { 'x-auth-token': cookies['x-auth-token'] } })
            notification.success({ message: 'Job Removed to favourites' })
            setJobData(jobData.filter(item => item._id !== id))
        } catch (error) {
            console.log(error)
            // notification.error({ message: error.response.data.message })
        }
    }
    return (
        <div className='font-rubik sm:px-[150px] px-[20px] py-10'>
            <div className='text-primary my-4 font-bold  text-[30px]'>Your Favourite Jobs</div>
            {loading ? <div className='w-[200px] mx-[auto]'> <HashLoader color="#FF4F6C" /> </div> :
                <div className='grid sm:grid-cols-3 grid-cols-1 sm:gap-10 gap-6 '>
                    {
                        jobData.map((item, index) => (
                            <FavJobItem key={index} data={item} onDelete={handleDelete} />
                        ))
                    }
                </div>}
        </div>
    )
}

export default FavrouiteJobs
