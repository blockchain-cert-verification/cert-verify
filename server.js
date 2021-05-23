//import npm packages
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// connect to mongoose
mongoose.connect("mongodb+srv://shrutimishra:shruti123@certdb.gcpkg.mongodb.net/BlockchainDB", {useNewUrlParser: true,  useUnifiedTopology: true, useCreateIndex: true})

// require route
app.use("/",require("./routes/api"));

app.listen(3001, function(){
    console.log("\nExpress server is running on port 3001\n\n");
})
// const app = express();
// const PORT = process.env.PORT || 8080;

// const Routes = require('./routes/api');
// //shruti123
// const mongodbURI= 'mongodb+srv://shrutimishra:shruti123@certdb.gcpkg.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

// mongoose.connect(mongodbURI || 'mongodb://localhost/certification', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });

 
// mongoose.connection.on('connected', () => {
//     console.log("Mongoose is connected!!!")
// });

// // Saving Data to our mongo database
// //constant values
// // const data = {
// //     firstName: 'Shruti',
// //     lastName: 'Mishra',
// //     organisationName: 'IGDTUW',
// //     gender: 'Female',
// //     certifiedFor: 'MCA',
// //     duration: 30,
// //     email:'shruti005mca18@igdtuw.ac.in'
// // };

// // const newCert = new certverify(data); //instance of the model

// // newCert.save((error) => {
// //     if(error){
// //         console.log("Ooops, something happened ! ");
// //     }else {
// //         console.log("Date has been saved!!");
// //     }
// // });
// // //




// //HTTP request logger
// app.use(morgan('tiny'));
// app.use('/api',Routes);

// app.listen(PORT, console.log(`Server is starting at ${PORT}`));