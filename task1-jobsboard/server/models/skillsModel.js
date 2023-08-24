import mongoose from 'mongoose'
const skillScheme = mongoose.Schema({
    skill: {
        type: String,
    },
}, {
    timestamps: true
}
)

const Skill = mongoose.model('Skill', skillScheme);
export default Skill;