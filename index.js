const express = require('express');
const dbConnect = require('./Config/db')
const bodyparser = require('body-parser');

const app = express();
const cors = require("cors");


dbConnect();
app.use(express.static(__dirname));
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.use("/api/product", require('./Router/ProductRouter/ProductRouter'));
app.use("/api/fillingstock", require('./Router/FillingStockRouter/FillingStockRouter'));
app.use("/api/employee", require('./Router/EmployeeRouter/EmployeeRouter'));
app.use("/api/vendor", require('./Router/VendorRouter/VendorRouter'));



app.get('/', function(req, res){
    res.sendFile('index.html')
})






const port = 8000;
app.listen(port, function() {
    console.log("Server is running on port", port);
});