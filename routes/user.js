const express=require('express');
const User=require('../models/user');
const router=express.Router();

/*  TO KEEP CODE SIMPLE I'LL BE DEFINING ALL ROUTER FUNCTIONS HERE 
    RATHER THAN SEGREGATING THEM IN A SEPERATE CONTROLLER FOLDER */

//SHOW SIGNIN FORM---------------------------------------------------
router.get('/signin',(req,res)=>{   
    res.render('signin');
});


//HANDLING USER SIGNUP-----------------------------------------------
router.post('/signup',async (req,res)=>{
    const {fullName,email,password}=req.body;
    await User.create({
        fullName,
        email,
        password,
    });
    return res.redirect('/');
});

//HANDLING USER SIGNIN-----------------------------------------------
router.post('/signin',async (req,res)=>{
    const {email,password}=req.body;
    try{
    const token= await User.matchPassword(email,password);

    return res.cookie('token',token).redirect('/');
    }catch (err){
        res.render('signin',
            {error:'Incorrect email and pasword'});
    }
});

//HANDLES USER LOGOUT
router.get('/logout', (req, res) => {
    res.clearCookie('token').redirect('/'); 

  });





//ALL EXPORTS OF THIS FILE------------------------------------------
module.exports=router;