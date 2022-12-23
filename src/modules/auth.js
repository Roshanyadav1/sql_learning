import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// Hash password before saving to database
export const comparePassword = async (password, hash) => {
    return await bcrypt.compare(password, hash);
};


export const hashPassword = async (password) => {
    // salt = 10 is recommended by bcrypt
    return await bcrypt.hash(password, 10);
};


export const createJWT = (user) => {
    const token = jwt.sign(
        { id: user.id, username: user.username },
        process.env.JWT_SECRET || "secret",
    );
    return token;
};

export const protect = (req, res, next) => {
    const bearer = req.headers.authorization;
    if (!bearer) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const token = bearer.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Not a valid token" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "secret");
        req.user = decoded;
        next()
    } catch (error) {
        return res.status(401).json({ message: "Not a valid token" });
    }
}

