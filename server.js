const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());

// connect mongoose
mongoose.connect("mongodb+srv://shrutimishra:shruti123@certdb.gcpkg.mongodb.net/BlockchainDB", {useNewUrlParser: true,useUnifiedTopology: true })

mongoose.connection.on('connected', () =>{
    console.log("Mongoose is connected !!");
});
// connect routes
app.use("/", require("./routes/api"));

app.listen(3001, function() {
    console.log("Express server is running on port 3001");
})