import mongoose from 'mongoose'
const companyScheme = mongoose.Schema({
    job: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Job'
    },
    status: {
        type: String,
        default: "pending"
    },
    candidate: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
})

const CompanyAppliedJob = mongoose.model('CompanyAppliedJob', companyScheme);
export default CompanyAppliedJob;