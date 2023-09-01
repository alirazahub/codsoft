import mongoose from 'mongoose'
const JobScheme = mongoose.Schema({
    company:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Company'
    },
    title: {
        type: String,
    },
    category: {
        type: String,
    },
    type:{
        type: String,
    },
    city: {
        type: String,
    },
    country: {
        type: String,
    },
    salary: {
        type: String,
    },
    educationLevel: {
        type: String,
    },
    experienceLevel: {
        type: String,
    },
    description: {
        type: String,
    },
    requirements: {
        type: String,
    },
    status:{
        type: String,
        default: "pending"
    },
    skills: Array,
    openPositions: {
        type: String,
    },
}, {
    timestamps: true
}
)

const Job = mongoose.model('Job', JobScheme);
export default Job;