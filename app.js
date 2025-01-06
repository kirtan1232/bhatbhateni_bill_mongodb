const express = require("express")
const connectDb = require("./config/db")
const bodyParser = require('body-parser');

connectDb();


const app = express();
app.use(bodyParser.json());

// Routes
app.use('/api/bill', require('./routes/billRoutes'))


const port = 3000;
app.listen(port, () => {
    console.log("Connect hudai xa")
});