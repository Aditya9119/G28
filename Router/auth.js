const express=require('express')
const authrouter=express.Router()
const{login,logout,signup}=require('../function/auth')

authrouter.get('/login',login)
authrouter.get('/logout',logout)
authrouter.get('/signup',signup)

module.exports={authrouter};

