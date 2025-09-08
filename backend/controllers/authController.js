import User from '../models/UserModel.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // 1. Check if user already exists
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'User already exists' });
        }
        user = new User({
            name,
            email,
            password,
        });
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password, salt);
        await user.save();
        const payload = {
            user: {
                id: user.id,
                role: user.role,
            },
        };
        jwt.sign(
            payload,
            process.env.JWT_SECRET,
            { expiresIn: '5d' },
            (err, token) => {
                if (err) throw err;
                res.status(201).json({ token });
            }
        );
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Server error');
    }
};
export const loginUser = async (req, res) => {
const { email, password } = req.body;
try {
let user = await User.findOne({ email });
if (!user) {
return res.status(400).json({ message: 'Invalid credentials' });
}
const isMatch = await bcrypt.compare(password, user.password);
if (!isMatch) {
return res.status(400).json({ message: 'Invalid credentials' });
}
const payload = {user: {
id: user.id,
role: user.role,},
};
jwt.sign(
payload,
process.env.JWT_SECRET,
{ expiresIn: '5d' },
(err, token) => {
if (err) throw err;
res.json({ token });
}
);
} catch (error) {
console.error(error.message);
res.status(500).send('Server error');
}
};
