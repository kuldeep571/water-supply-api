const express = require('express');
const app = express.Router();

const {
    addarea,
    getdata,
    getemployeename,
    getsingledata,
    deletedata,
    updatedata
  
}= require('../../Controller/EmployeeController/AreaAssingEmployeeController')



app.post("/", addarea);

app.get("/", getdata);

app.get("/name", getemployeename);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;