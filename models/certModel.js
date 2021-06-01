const mongoose = require('mongoose');
const { string } = require('prop-types');

const certSchema = {
    firstname : String,
    lastname : String,
    organization: String,
    coursename: String,
    duration: Number,
    emailId : String,
    assignedOn: Date
}

//model
const certverify = mongoose.model("certverify", certSchema);

module.exports = certverify;