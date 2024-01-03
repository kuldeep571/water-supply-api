const express = require('express');
const app = express.Router();

const {
    addemployee, 
    getdata, 
    getsingledata,
    deletedata, 
    updatedata
}= require('../../Controller/CustumerController/ProductPriceCtrl')

app.post("/", addemployee);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;