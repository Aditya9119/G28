
const {User}=require('../models/auth')
const login=(req, res)=>{
    res.send("hello i'm login")
}

const logout=(req, res)=>{
    res.send("hello i'm logout")
}

const signup=(req, res)=>{
    const Aditya=new User(
        {
            name:'jaihind',
            email:"abc@gmail.com",
            password:"abc"
        });
    Aditya.save().then(()=>console.log('born'));
    res.send("hello i'm signup")
}

module.exports={login,logout,signup}
