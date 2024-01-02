const mongoose = require("mongoose");
const proSchema = mongoose.Schema({

    productName: {
        type: String,
        required: true,
    },
    price:
    {
        type: String,
        required: true,
    },
    quantityType:
    {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("product", proSchema);