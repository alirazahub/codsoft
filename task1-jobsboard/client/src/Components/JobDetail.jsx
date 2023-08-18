import React from 'react'
import { useLocation } from 'react-router-dom'

const JobDetail = () => {
    const location = useLocation()
    const job = location.state.job
    return (
        <div>
            {job.title}
        </div>
    )
}

export default JobDetail
