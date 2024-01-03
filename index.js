const express = require('express');
const dbConnect = require('./Config/db')
const bodyparser = require('body-parser');
const app = express();
const dotenv = require("dotenv").config();

const PORT = process.env.PORT;

const cors = require("cors");
const morgan = require("morgan");


dbConnect();
app.use(express.static(__dirname));
app.use(morgan("dev"));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api/product", require('./Router/ProductRouter/ProductRouter'));
app.use("/api/fillingstock", require('./Router/ProductRouter/FillingStockRouter'));
app.use("/api/stockinout", require('./Router/ProductRouter/StockInOutRouter'));
app.use("/api/employee", require('./Router/EmployeeRouter/EmployeeRouter'));
app.use("/api/vendor", require('./Router/VendorRouter/VendorRouter'));
app.use("/api/VendorPurchaseOrder", require('./Router/VendorRouter/VendorPurchaseOrderRouter'));
app.use("/api/newcustumer", require('./Router/CustumerRoute/NewCustumerRoute'));
app.use("/api/custumerledger", require('./Router/CustumerRoute/CustumerLedgerRoute'));
app.use("/api/custumerpayment", require('./Router/CustumerRoute/CustumerPaymentRoute'));
app.use("/api/neworder", require('./Router/CustumerRoute/NewOrderRoute'));
app.use("/api/custumersecurity", require('./Router/CustumerRoute/CustumerSecuirityRoute'));
app.use("/api/custumersecurity2", require('./Router/CustumerRoute/CustumerSecuirityRoute2'));
app.use("/api/AreaAssing", require('./Router/AreaAssingRouter/AreaAssingRouter'));



app.get('/', function(req, res){
    res.sendFile('index.html')
})






app.listen(PORT, function() {
    console.log("Server is running on port", PORT);
});