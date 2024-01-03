const express = require('express');
const app = express.Router();

const {
    addvendorledger, 
    getdata, 
    getsingledata,
    deletedata, 
    updatedata
}= require('../../Controller/VendorController/VendorLedgerController')



app.post("/", addvendorledger);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;