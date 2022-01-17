const mongoose= require("mongoose");
mongoose.connect('mongodb://localhost:27017/call',{useNewUrlParser: true},(err)=>{
if(!err)
console.log('MongoDb connection succeeded');
else
console.log('error in db connection:'+ JSON.stringify(err,undefined,2));

});
module.exports=mongoose;