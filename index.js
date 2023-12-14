
const  express=require('express')
const {router}=require('./Router/router')
const port=process.env.PORT || 3000;
const app=express();
app.use(router)
app.listen(8000,()=>{
    console.log("app started")
})

app.get('/hello',(req,res)=>{
    const name=req.query.name
    res.send ("Hello Aditya"+name)

})