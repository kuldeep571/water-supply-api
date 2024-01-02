const express = require('express');
const app = express.Router();

const {
    addarea,
    getdata,
    getsingledata,
    deletedata,
    updatedata
  
}= require('../../Controller/AreaAssingController/AreaAssingController')



app.post("/", addarea);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

module.exports = app;








module.exports = app;