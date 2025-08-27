const express=require('express');
const {Blog}=require('../models/blog');
const multer=require('multer');
const path=require('path');
const router=express.Router();
const Comment=require('../models/comment');

//FILE HANDLING USING MULTER
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve(`./public/uploads`));
  },
  filename: function (req, file, cb) {
    const fileName=`${Date.now()}-${file.originalname}`
    cb(null,fileName);
    
  }
});

//MULTER INSTANCE FOR UPLOADS 
const upload=multer({storage});

//SHOW ADD-BLOG FORM
router.get('/add-new',(req,res)=>{
    res.render('addBlog',{
        user:req.user,
    });
});

//ADD NEW BLOG
router.post('/add-new',upload.single('coverImage'), async(req,res)=>{
    const {title,body}=req.body;
    const blog=await Blog.create({
        body,
        title,
        createdBy:req.user._id,
        coverImageUrl:`/uploads/${req.file.filename}`,

    });
   return res.redirect(`/blog/${blog._id}`);
});

//GET BLOG BY BLOG ID
router.get('/:id',async (req,res)=>{
    const blog = await Blog.findById(req.params.id).populate('createdBy');  
    const comments= await Comment.find({blogId:req.params.id}).populate('createdBy');
    console.log("BLOG:", blog);

    return res.render('blog',{
        user:req.user,
        blog,
        comments,
    })  
});

//HANDLING COMMENT ROUTES IN THE SAME FILE-----------------------------------------------------------

router.post('/comment/:blogId',async (req,res)=>{
    const comments=await Comment.create({
        content:req.body.content,
        blogId:req.params.blogId,
        createdBy:req.user._id,
    });
    return res.redirect(`/blog/${req.params.blogId}`)
});



















//ALL EXPORTS OF THIS FILE---------------------------------------------------
module.exports=router;