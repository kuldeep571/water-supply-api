const mongoose = require("mongoose");
const proSchema = mongoose.Schema({
   
    productName: {
        type: String,
        required: true,
    },
    fillingStockQuantity:
    {
        type: String,
        required: true,
    },
    date:
    {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("fillingstock", proSchema);
