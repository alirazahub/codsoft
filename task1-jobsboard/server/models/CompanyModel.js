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
    company_email: {
        type: String,
    },
    password: {
        type: String,
    },
    company_logo: {
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
    ceo_name: {
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

}, {
    timestamps: true
}
)

const Company = mongoose.model('Company', companyScheme);
export default Company;