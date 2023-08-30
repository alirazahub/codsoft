import mongoose from 'mongoose'
const userScheme = mongoose.Schema({
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    image: {
        type: String,
        default: ""
    },
    dob:{
        type: String,
        default: ""
    },
    resume: {
        type: String,
        default: ""
    },
    coverLetter: {
        type: String,
        default: ""
    },
    phone: {
        type: String,
        default: ""
    },
    portfolio: {
        type: String,
        default: ""
    },
    github: {
        type: String,
        default: ""
    },
    linkedin: {
        type: String,
        default: ""
    },
    skills: [
        {
            name: {
                type: String,
            },
            proficiency: {
                type: String
            }
        }
    ],
    education:
    {
        degree: {
            type: String
        },
        institute: {
            type: String
        },
        year: {
            type: String
        },
        cgpa: {
            type: String
        }
    },
    experience: [
        {
            company: {
                type: String
            },
            designation: {
                type: String
            },
            duration: {
                type: String
            },
            skills: {
                type: Array
            }
        },
    ],
    appliedJobs: [
        {
            jobId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Job'
            },
            status: {
                type: String,
                default: "pending"
            }
        }
    ],
    savedJobs: [
        {
            jobId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Job'
            }
        }
    ],


}, {
    timestamps: true
}
)

const User = mongoose.model('User', userScheme);
export default User;