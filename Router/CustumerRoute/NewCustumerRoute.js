const express = require('express');
const app = express.Router();

const {
    addemployee, 
    getdata, 
    getsingledata,
    deletedata, 
    updatedata
}= require('../../Controller/CustumerController/NewCustumerCtrl')

app.post("/", addemployee);

app.get("/", getdata);

app.get("/:id", getsingledata);

app.delete("/:id", deletedata);

app.put("/:id", updatedata);

<<<<<<< Updated upstream
=======
module.exports = app;








>>>>>>> Stashed changes
module.exports = app;