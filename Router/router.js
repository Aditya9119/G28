const express=require('express')
const {myfun}=require('../function/function')
const router=express.Router();

const {authrouter}=require('./auth')
const {noterouter}=require('./note')

// router.get('/hello',myfun)
router.get('/hello',(req,res)=>{
    res.send("hello")
})
router.use('/auth',authrouter);
router.use('/note',noterouter);


module.exports={router}