const express = require('express');
const app = express.Router();

const {
    addProductType, getdata, getsingledata, deletedata, updatedata
} = require('../../Controller/ProductController/ProductTypeController')



app.post("/", addProductType);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);


module.exports = app;