const mongoose = require('mongoose');

const certSchema = new mongoose.Schema({
        firstname: String,                
        lastname: String,             
        organization: String,                
        coursename: String,                
        assignedOn: Date,                
        duration:  Number,                
        emailId: String,
                
});
      


//Model 
const certverify = mongoose.model('certverify', certSchema);

module.exports = certverify;
// Schema
// const certSchema = {
//         candidateName: String,         
//         orgName: String,         
//         courseName: String,        
//         expirationDate: Number,         
//         assignDate: Number,         
//         duration: Number,
//         email: String,
// }


// newCert.save((error) => {
//         if(error){
//             console.log("Ooops, something happened ! ");
//         }else {
//             console.log("Date has been saved!!");
//         }
//     });