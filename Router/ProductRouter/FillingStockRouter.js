const express = require('express');
const app = express.Router();

const {
    fillingstock,
    getdata,getsingle,deletedata,updatedata
    
} = require('../../Controller/ProductController/FillingStockController')


app.post("/", fillingstock);

app.get("/", getdata);

app.get("/:id", getsingle);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);


module.exports = app;