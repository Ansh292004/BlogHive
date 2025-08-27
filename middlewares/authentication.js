const {verifyToken}=require('../service/auth');

function checkForAuthenticationCookie(cookieName){
    return (req,res,next)=>{
        const tokenCookieValue=req.cookies?.[cookieName]
        if(!tokenCookieValue){
            next();
            return;
        }

        try{
        const userPayload=verifyToken(tokenCookieValue);
        req.user=userPayload;
        }catch (err){

        }
        next();
    };
}

//ALL EXPORTS OF THIS FILE----------------------------------------

module.exports={
    checkForAuthenticationCookie,
}