const { default: mongoose } = require("mongoose");
const mogoose = require("mongoose");

const connectDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("MongoDB Connected...");
    }catch (err) {
        console.error("MongoDb Connection failed : ", err.message);
        process.exit(1);
    }
};

module.exports = connectDb;