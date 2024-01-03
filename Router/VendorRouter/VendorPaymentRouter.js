const express = require('express');
const app = express.Router();

const {
    addvendorpayment, 
    getdata, 
    getsingledata,
    deletedata, 
    updatedata
}= require('../../Controller/VendorController/VenderPaymentController')



app.post("/", addvendorpayment);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;


