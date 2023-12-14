const mongoose=require('mongoose');
const usershema=mongoose.Schema(
    {
        name:String,
        email:String,
        password:String
    }
);

const User=mongoose.model('User',usershema);


module.exports={User}
