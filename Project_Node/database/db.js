const mongoose = require('mongoose');
mongoose.set("strictQuery", false);
mongoose.connect("mongodb://127.0.0.1:27017/FullStackProject")
.then(()=>console.log("connection sucessfull"))
.catch((err)=>console.log(err))
