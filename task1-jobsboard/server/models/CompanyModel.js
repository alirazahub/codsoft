import mongoose from 'mongoose'
const companyScheme = mongoose.Schema({
    company_name: {
        type: String,
    },
    company_phone: {
        type: String,
    },
    company_overview: {
        type: String,
    },
    company_services: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    logo: {
        type: String,
        default: ""
    },
    industry: {
        type: String,
        default: ""
    },
    ceo_email: {
        type: String,
        default: ""
    },
    ceo_phone: {
        type: String,
        default: ""
    },
    city: {
        type: String,
        default: ""
    },
    country: {
        type: String,
        default: ""
    },
    employees: {
        type: String,
        default: ""
    },
    established_date: {
        type: String,
        default: ""
    },
    website: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    instagram: {
        type: String,
        default: ""
    },
    facebook: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    twitter: {
        type: String,
        default: ""
    },
    jobs: [
        {
            jobId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Job'
            },
            users: [
                {
                    userId: {
                        type: mongoose.Schema.Types.ObjectId,
                        ref: 'User'
                    },
                    status: {
                        type: String,
                        default: "pending"
                    }
                }
            ]
        }
    ],


}, {
    timestamps: true
}
)

const Company = mongoose.model('Company', companyScheme);
export default Company;