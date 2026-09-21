import jwt from "jsonwebtoken";

function authenticate(req, res, next){
    
    const token = req.cookies.token

    if (!token){
        return res.status(401).json({message: "access denied : no token provided"})
    }
    
    try{
        const verification = jwt.verify(token, process.env.SECRET_KEY || "secret_key");
        req.user = verification;

        next();
    }
    catch(error){
        res.status(403).json({message:"invalid: expired token"})
    }
}

export { authenticate }