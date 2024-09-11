const mongoose = require('mongoose')

const connectDb = async () => {
  try{
    const con = await mongoose.connect(`mongodb+srv://milans:1234@cluster0.twrqg.mongodb.net/schoolmanagement`);
    console.log(`Connect Mongodb ${con.connection.host}`);
  } catch(err){
    console.log(`Error in Mongodb ${err}`);
  } 
}

module.exports = {
    connectDb
}