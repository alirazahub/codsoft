import mongoose from 'mongoose'
const companyScheme = mongoose.Schema({
    title: {
        type: String,
    },
    category: {
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
    skills: [
        {
            skills: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Skill'
            },
        }
    ],


}, {
    timestamps: true
}
)

const Company = mongoose.model('Company', companyScheme);
export default Company;