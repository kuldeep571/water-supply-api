const express = require('express');
const app = express.Router();

const {
    fillingstock,
    getdata,getsingle,deletedata,updatedata
    
} = require('../../Controller/FillingStockController/FillingStockController')


app.post("/", fillingstock);

app.get("/", getdata);

// singal data get ke liye syntax

app.get("/:id", getsingle);

// delete data ke liye

app.delete("/:id", deletedata);

//update data ke liye 
app.put("/:id", updatedata);


module.exports = app;