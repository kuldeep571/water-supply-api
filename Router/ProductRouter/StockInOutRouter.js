const express = require('express');
const app = express.Router();

const {
    stockinout,
    getdata,
    getsingledata,
    deletedata,
    updatedata,
   

}= require('../../Controller/ProductController/StockInOutController')


app.post("/", stockinout);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);


module.exports = app;



