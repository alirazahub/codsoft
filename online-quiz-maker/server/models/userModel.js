import mongoose from 'mongoose'
const userScheme = mongoose.Schema({
}, {
    timestamps: true
}
)

const User = mongoose.model('User', userScheme);
export default User;