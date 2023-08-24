import jwt from 'jsonwebtoken';
import dotenv from 'dotenv'

dotenv.config()

export const verifyUser = (req, res, next) => {
    const token = req.header('x-auth-token');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
}
export const verifyRegisterUser = (req, res, next) => {
    const token = req.header('x-auth-registration');
    if (!token) {
        return res.status(401).json({ message: 'No token, authorization denied1' });
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = { id: decoded.id };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
}

export const verifyAdmin = (req, res, next) => {
    const admin = req.header('x-auth-admin');
    if (!admin) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
    try {
        const decoded = jwt.verify(admin, process.env.JWT_ADMIN_SECRET);
        req.admin = { id: decoded.id };
        next();
    } catch (error) {
        return res.status(401).json({ message: 'No token, authorization denied' });
    }
}
