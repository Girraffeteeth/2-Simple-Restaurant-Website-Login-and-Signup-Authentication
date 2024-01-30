const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://localhost:27017/auth");  

connect.then(() => {
    console.log("Database connection established");
})
.catch(() => {
    console.log("Database call failed");
});

const LoginSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});

const collection = new mongoose.model("users",LoginSchema);

module.exports = collection;
