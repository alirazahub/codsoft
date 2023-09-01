import asyncHandler from 'express-async-handler'
import jwt from 'jsonwebtoken'
import User from '../models/userModel.js';
import Company from '../models/CompanyModel.js';
import Skills from '../models/skillsModel.js';
import Jobs from '../models/JobsModel.js';
import CompanyAppliedJob from '../models/CompanyAppliedJob.js';
import bcrypt from 'bcryptjs'



export const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    try {
        const user = await User.findOne({ email })
        const company = await Company.findOne({ company_email: email })

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign({ id: user._id, role: "user" }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
            res.cookie('x-auth-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            res.status(201).json({ user, token })

        } else if (company && (await bcrypt.compare(password, company.password))) {
            const token = jwt.sign({ id: company._id, role: "company" }, process.env.JWT_SECRET, {
                expiresIn: '30d'
            })
            res.cookie('x-auth-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'none'
            })
            res.status(201).json({ user: company, token })
        }
        else {
            res.status(400).json({ message: "Invalid Email or Password!" })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})
export const registerUser = asyncHandler(async (req, res) => {
    const { name, email, phone, password } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    try {
        const prev = await User.findOne({ email })
        if (prev) {
            res.status(400).json({ message: "User Already Exists!" })
        } else {
            const user = await User.create({
                name,
                email,
                phone,
                password: hashedPassword
            })
            await user.save();
            res.status(201).json({ message: "User Created Successfully!", success: true })
        }
    } catch (error) {
        res.status(500).json({ error })
    }
})
export const verifyProfile = asyncHandler(async (req, res) => {
    try {
        if (req.user.role === "user") {
            const user = await User.findById(req.user.id)
            res.status(200).json({ user, success: true, role: "user" })
        } else if (req.user.role === "company") {
            const company = await Company.findById(req.user.id)
            res.status(200).json({ user: company, success: true, role: "company" })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const addSkills = asyncHandler(async (req, res) => {
    const skills = [
        "Programming Languages",
        "Algorithm Design and Analysis",
        "Data Structures",
        "Object-Oriented Programming (OOP)",
        "Functional Programming",
        "Database Management",
        "SQL",
        "NoSQL",
        "Web Development",
        "HTML",
        "CSS",
        "JavaScript",
        "Front-End Frameworks (e.g., React, Angular)",
        "Back-End Development",
        "API Design and Development",
        "Version Control (e.g., Git)",
        "Continuous Integration and Deployment",
        "Containerization (e.g., Docker)",
        "Cloud Computing (e.g., AWS, Azure, GCP)",
        "Networking",
        "Operating Systems",
        "Cybersecurity",
        "Cryptography",
        "Artificial Intelligence (AI)",
        "Machine Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Big Data Technologies",
        "Data Analysis",
        "Data Visualization",
        "Software Testing and QA",
        "Agile Methodologies",
        "Scrum"
    ]

    try {
        skills.forEach(async (skill) => {
            await Skills.create({ skill })
        })
        res.status(200).json({ success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
})

export const registerCompany = asyncHandler(async (req, res) => {
    const { company_name, company_phone, company_overview, company_services, company_email, facebook, twitter, password, company_logo, industry, ceo_email, ceo_phone, city, country, employees, established_date, website, linkedin, instagram } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)

    try {
        const company = await Company.findOne({ company_email })
        if (company) {
            res.status(400).json({ message: "Email Already Exists!" })
        } else {
            const newCompany = await Company.create({
                company_name,
                company_phone,
                company_overview,
                company_services,
                company_email,
                password: hashedPassword,
                company_logo,
                industry,
                ceo_email,
                ceo_phone,
                city,
                country,
                employees,
                established_date,
                website,
                instagram,
                facebook,
                twitter,
                linkedin
            })
            await newCompany.save();
            res.status(201).json({ message: "Company Created Successfully!", success: true })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const postJob = asyncHandler(async (req, res) => {
    const { title, category, type,openPositions, city, country, salary, educationLevel, experienceLevel, description, requirements, skills } = req.body;
    try {
        const job = await Jobs.create({
            company: req.user.id,
            title,
            category,
            type,
            city,
            country,
            salary,
            educationLevel,
            experienceLevel,
            description,
            requirements,
            openPositions
        })
        skills.forEach(async (skill) => {
            await job.skills.push(skill)
        })
        await job.save();
        res.status(201).json({ message: "Job Posted Successfully!", success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const getSkilss = asyncHandler(async (req, res) => {
    try {
        const skills = await Skills.find({})
        res.status(200).json({ skills, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
}
)
export const companyDetails = asyncHandler(async (req, res) => {
    try {
        const company = await Company.findById(req.user.id)
        res.status(200).json({ company, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
}
)
export const userProfile = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        res.status(200).json({ user, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
}
)

export const updateUserProfile = asyncHandler(async (req, res) => {
    const { name, email, image, dob, phone, portfolio, linkedin, resume, github, facebook, degree, institute, graduation_date, cgpa, cover_letter, skills, experiences } = req.body;

    try {
        const user = await User.findById(req.user.id)
        user.name = name || user.name
        user.email = email || user.email
        user.image = image || user.image
        user.dob = dob || user.dob
        user.resume = resume || user.resume
        user.phone = phone || user.phone
        user.portfolio = portfolio || user.portfolio
        user.linkedin = linkedin || user.linkedin
        user.github = github || user.github
        user.facebook = facebook || user.facebook
        user.coverLetter = cover_letter || user.coverLetter
        user.skills = skills || user.skills
        user.experience = experiences || user.experience
        user.education.degree = degree || user.education.degree
        user.education.institute = institute || user.education.institute
        user.education.year = graduation_date || user.education.year
        user.education.cgpa = cgpa || user.education.cgpa
        await user.save();
        res.status(200).json({ user, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});

export const getJobs = asyncHandler(async (req, res) => {
    try {
        const jobs = await Jobs.find({}).populate('company').sort({ createdAt: -1 })
        res.status(200).json({ jobs, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const addJobToFav = asyncHandler(async (req, res) => {
    const { jobId } = req.body;
    let flag = false;
    try {
        if (req.user.role === "user") {
            const user = await User.findById(req.user.id)
            user.savedJobs.forEach(async (job) => {
                if (job.jobId.toString() === jobId.toString()) {
                    flag = true;
                }
            })
            if (flag) {
                res.status(400).json({ message: "Job Already Added to Favourites!" })
            } else {
                await user.savedJobs.push({ jobId })
                await user.save();
                res.status(200).json({ message: "Job Added to Favourites Successfully!", success: true })
            }
        } else {
            res.status(400).json({ message: "You are not allowed to perform this action!" })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const removeJobFromFav = asyncHandler(async (req, res) => {
    const { jobId } = req.body;
    let flag = false;
    try {
        if (req.user.role === "user") {
            const user = await User.findById(req.user.id)
            user.savedJobs.forEach(async (job) => {
                if (job.jobId.toString() === jobId.toString()) {
                    flag = true;
                }
            })
            if (!flag) {
                res.status(400).json({ message: "Job Already Removed from Favourites!" })
            } else {
                await user.savedJobs.pull({ jobId })
                await user.save();
                res.status(200).json({ message: "Job Removed from Favourites Successfully!", success: true })
            }
        } else {
            res.status(400).json({ message: "You are not allowed to perform this action!" })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
}
);

export const getFavJob = asyncHandler(async (req, res) => {
    try {
        const user = await User.findById(req.user.id)
        const jobPromises = user.savedJobs.map(async (job) => {
            const jobDetails = await Jobs.findById(job.jobId).populate('company');
            return jobDetails;
        });

        const jobs = await Promise.all(jobPromises);
        res.status(200).json({ jobs, success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const applyInJob = asyncHandler(async (req, res) => {
    const { jobId } = req.body;

    try {
        const job = await CompanyAppliedJob.findOne({ job: jobId, candidate: req.user.id })
        if (job) {
            res.status(400).json({ message: "You have already applied for this job!" })
        } else {
            await CompanyAppliedJob.create({
                job: jobId,
                candidate: req.user.id
            })
            res.status(200).json({ message: "Applied Successfully!", success: true })
        }
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const changeStatus = asyncHandler(async (req, res) => {
    const { status, id } = req.body;

    try {
        await CompanyAppliedJob.findByIdAndUpdate(id, { status })
        res.status(200).json({ message: "Status Changed Successfully!", success: true })
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});

export const getAppliedJobs = asyncHandler(async (req, res) => {
    try {
        const jobs = await CompanyAppliedJob.find({ candidate: req.user.id }).populate('job').sort({ createdAt: -1 })
        let allJobs = []

        // Use map to create an array of promises
        const companyPromises = jobs.map(async (job) => {
            const company = await Company.findById(job.job.company);
            return { company, job };
        });

        // Wait for all promises to resolve
        allJobs = await Promise.all(companyPromises);

        // Send the response with allJobs when the loop is completed
        res.status(200).json({ success: true, jobs: allJobs });
    } catch (error) {
        res.status(500).json({ error, success: false })
    }
});
export const updateCompanyProfile = asyncHandler(async (req, res) => {
    const { company_name, company_phone, company_overview, company_services, company_email, facebook, twitter, company_logo, industry, ceo_email, ceo_name, city, country, employees, established_date, website, linkedin, instagram } = req.body;

    try {
        const company = await Company.findById(req.user.id)
        company.company_name = company_name || company.company_name
        company.company_phone = company_phone || company.company_phone
        company.company_overview = company_overview || company.company_overview
        company.company_services = company_services || company.company_services
        company.company_email = company_email || company.company_email
        company.facebook = facebook || company.facebook
        company.twitter = twitter || company.twitter
        company.company_logo = company_logo || company.company_logo
        company.industry = industry || company.industry
        company.ceo_email = ceo_email || company.ceo_email
        company.ceo_name = ceo_name || company.ceo_name
        company.city = city || company.city
        company.country = country || company.country
        company.employees = employees || company.employees
        company.established_date = established_date || company.established_date
        company.website = website || company.website
        company.linkedin = linkedin || company.linkedin
        company.instagram = instagram || company.instagram
        await company.save();
        res.status(200).json({ company, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});

export const getCompanyActiveJobs = asyncHandler(async (req, res) => {
    try {
        const jobs = await Jobs.find({ company: req.user.id, status: "Active" }).sort({ createdAt: -1 });
        res.status(200).json({ jobs, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});
export const getInCompanyJobs = asyncHandler(async (req, res) => {
    try {
        const jobs = await Jobs.find({ company: req.user.id }).sort({ createdAt: -1 })
        res.status(200).json({ jobs, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});

export const deleteCompanyJob = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        await Jobs.findByIdAndDelete(id)
        res.status(200).json({ message: "Job Deleted Successfully!", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});
export const UpdateCompanyJob = asyncHandler(async (req, res) => {
    const { title, category, type, city, country,openPositions,status, salary, educationLevel, experienceLevel, description, requirements, skills } = req.body;
    try {
        const job = await Jobs.findById(req.params.id)
        job.title = title || job.title
        job.category = category || job.category
        job.type = type || job.type
        job.city = city || job.city
        job.country = country || job.country
        job.salary = salary || job.salary
        job.educationLevel = educationLevel || job.educationLevel
        job.experienceLevel = experienceLevel || job.experienceLevel
        job.description = description || job.description
        job.requirements = requirements || job.requirements
        job.skills = skills || job.skills
        job.openPositions = openPositions || job.openPositions
        job.status = status || job.status
        await job.save();
        res.status(200).json({ message: "Job Updated Successfully!", success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
});

export const getCompanyAppliedJobs = asyncHandler(async (req, res) => {
    try {
        const jobs = await CompanyAppliedJob.find({ company: req.user.id }).populate('candidate').populate('job').sort({ createdAt: -1 })
        res.status(200).json({ jobs, success: true })
    } catch (error) {
        console.log(error)
        res.status(500).json({ error, success: false })
    }
})