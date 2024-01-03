const express = require('express');
const app = express.Router();

const {
    createpurchaseorder
}= require('../../Controller/VendorController/VendorPurchaseOrderController')



app.post("/", createpurchaseorder);

module.exports = app;

