const createnote=(req,res)=>{
    res.send("i'm createnote")
}

const editnote=(req,res)=>{
    res.send("i'm editnote")
}

const deletenote=(req,res)=>{
    res.send("i'm deletenote")
}

module.exports={createnote,editnote, deletenote};
