const express = require('express');
const app = express.Router();

const {
    addproduct,
    getdata,
    getsingledata,
    deletedata,
    updatedata
} = require('../../Controller/ProductController/ProductController')



app.post("/", addproduct);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);


module.exports = app;