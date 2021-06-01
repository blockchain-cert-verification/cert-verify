const express = require("express");
const router = express.Router();
const certverify = require("../models/certModel");

//database to frontend

router.route("/create").post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const organization= req.body.organization;
    const coursename= req.body.coursename;
    const duration= req.body.duration;
    const emailId = req.body.emailId;
    const assignedOn= req.body.assignedOn;
    const newCert = new certverify({
        firstname,
        lastname,// : String,
        organization,// String,
        coursename,//: String,
        duration,//: Number,
        emailId ,//: String,
        assignedOn //: Date
    })

    //newCert.save();
    newCert.save((error) => {
        if (error) {
            console.log('Sorry, internal server errors' );
        }else {
            console.log('Data has been saved !!' );
        }        
    });

});

router.route("/cert").get((req,res) => {
    certverify.find()
        .then(foundCert => res.json(foundCert))
})

router.route('/display/:id').get((req, res) => {
    certverify.findById(req.params.id, (error, data) => {
        if (error) {
            console.log("cannot find data by this id")
        } else {
            res.json(data)
        }
    })
})

module.exports = router;