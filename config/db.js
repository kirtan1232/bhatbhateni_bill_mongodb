const mongoose = require("mongoose")

const connectDb = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/bhat_bhateni")
        console.log("Connect")
    }
    catch {
        console.error("Cannot connect")
    }
}

module.exports = connectDb;