const express = require('express');
const app = express.Router();

const {
    addvendor, 
    getdata, 
    getsingledata,
    deletedata, 
    updatedata
}= require('../../Controller/VendorController/VendorController')



app.post("/", addvendor);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;








module.exports = app;