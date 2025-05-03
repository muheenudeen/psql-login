import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET

export const token = (user) => {
    return jwt.sign({ id: user.id }, JWT_SECRET, { expiresIn: '1h' });
}