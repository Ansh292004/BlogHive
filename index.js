const express=require('express');
const userRouter=require('./routes/user');
const blogRouter=require('./routes/blog');
const cookieParser=require('cookie-parser');
const {Blog}=require('./models/blog');


//CREATE AND EXPRESS APPLICATION INSTANCE
const app=express();
const path=require('path');
const { checkForAuthenticationCookie } = require('./middlewares/authentication');
const { rmSync } = require('fs');

//MIDDLEWARE TO PARSE INCOMING REQUESTS WITH JSON PAYLOADS
app.use(express.json());

//MIDDELWARE TO PARSE INCOMING FORM DATA
app.use(express.urlencoded({extended:false}));

//SERVERS STATIC FILES TO EXPRESS APP
app.use(express.static(path.resolve('./public')));
app.use('/images', express.static(path.join(__dirname, 'images')));


//COOKIE PARSER
app.use(cookieParser());

//SOFT AUTHENTIACTION
app.use(checkForAuthenticationCookie("token"));

//SETTING EJS AS A TEMPLATE ENGINE
app.set('view engine','ejs');

//SETTING THE DICTIONARY WHERE TEMPLATE FILES ARE LOCATED
app.set('views',path.resolve('./views'));

//ALL MOUNT ROUTES
app.use('/user',userRouter);
app.use('/blog',blogRouter);

app.get('/',async(req,res)=>{
    const allBlogs=await Blog.find({});
    res.render('home',{
        user:req.user,
        blogs:allBlogs
    });
});


    
    














//ALL EXPORTS OF THIS FILE------------------------------------------------
module.exports=app;