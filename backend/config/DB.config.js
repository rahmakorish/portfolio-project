const mongoose = require('mongoose');
// const { error } = require('winston');

const connectDB = async()=>{
    try{
        const conn = await mongoose.connect(process.env.MONGO_URI)
        console.log(process.env.MONGO_URI);
        
        console.log(`mongo connected at :${conn.connection.host}`);

    }
    catch(err){
        console.log(`${err.message}`);
        
        process.exit(1);
    }
}
module.exports = connectDB
