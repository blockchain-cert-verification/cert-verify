const express = require('express');
const router = express.Router();
const certverify = require('../models/certmodel');
//const toJSON = require('../models/certmodel');

//Routes to get and send data 

router.route("/issuecert").post((req,res) => {
    const firstname = req.body.firstname;
    const lastname = req.body.lastname;
    const organization = req.body.organization;
    const coursename = req.body.coursename;
    const assignedOn = req.body.assignedOn;
    const duration = req.body.duration;
    const emailId = req.body.emailId;
    const newCert = new certverify({
        firstname,
        lastname,
        organization,
        coursename,
        assignedOn,
        duration,
        emailId,
    });
   //newCert.save();
    newCert.save((error) => {
        if(error){
            console.log("Ooops, something happened ! ");
        }else {
            console.log("Date has been saved!!");
        }

    });

})

//view page route
router.route("/view").get((req,res) => {
    certverify.find()
        .then(foundCert => res.json(foundCert))
})
module.exports = router;

//     certSchema.methods.toJSON = function() {
//         const data = this;
//         const obj = data.toObject();
        
//         return {
//         ...obj,
//         certificateId: obj._id.toString(),
//         _id: undefined,
//         __v: undefined
//         };
//         console.log(data, certificateId);
// };

    // router.post('/save', (req,res) => {
    //         console.log("Body : ", req.body);
    //         res.json({
    //             msg: 'We have successfully recieved your data !!! '
    //         });
    //     });
        




// //Routes
// router.get('/', (req, res) => {
//     certverify.find({    })
//         .then((data) => {
//             console.log('Data : ', data);
//             res.json(data);
//         })
//         .catch((error) =>{
//             console.log('error : ', error);
//         });
// });

// router.post('/save', (req,res) => {
//     console.log("Body : ", req.body);
//     res.json({
//         msg: 'We have successfully recieved your data !!! '
//     });
// });



// router.get('/name', (req,res) => {
//     const data = {
//         username : 'peterson',
//         age : 5
//     };
//     res.json(data);
// });


