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
app.use("/api/fillingstock", require('./Router/FillingStockRouter/FillingStockRouter'));
app.use("/api/stockinout", require('./Router/StockInOutRouter/StockInOutRouter'));
app.use("/api/employee", require('./Router/EmployeeRouter/EmployeeRouter'));
app.use("/api/vendor", require('./Router/VendorRouter/VendorRouter'));
app.use("/api/newcustumer", require('./Router/CustumerRoute/NewCustumerRoute'));
app.use("/api/neworder", require('./Router/CustumerRoute/NewOrderRoute'));
app.use("/api/custumerpayment", require('./Router/CustumerRoute/CustumerPaymentRoute'));
app.use("/api/custumerledger", require('./Router/CustumerRoute/CustumerLedgerRoute'));



app.get('/', function(req, res){
    res.sendFile('index.html')
})






app.listen(PORT, function() {
    console.log("Server is running on port", PORT);
});