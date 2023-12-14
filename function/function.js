const myfun=(req,res)=>{
    const name=req.query.name
    res.send("Hello Aditya"+name)
}

module.exports={myfun}