const JWT=require('jsonwebtoken');
const User=require('../models/user');

const secret=process.env.MY_SECRETKEY;

function createToken(user){
    const payload={
        _id:user._id,
        email:user.email,
        profileImageUrl:user.profileImageUrl,
        role:user.role,
    };
    
    const token=JWT.sign(payload,secret);
    return token;
};

function verifyToken(token){
    try{
        return JWT.verify(token,secret);
    }catch (err){
        return null;
    }
}

//ALL EXPORTS OF THIS FILE-------------------------------------

module.exports={
    createToken,
    verifyToken,
};