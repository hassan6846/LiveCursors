const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    displayname: {
        type: String,
        unique: [true, 'Name is Already Taken']
    },
    firstname: {

    },
    lastname: {

    },
    email: {
      required:[true,"Email is Being required"],
      
    },
    password: {

    },
    avatar:{
      
    }

}, { timestamps: true })

