const mongoose = require("mongoose");
const ProductTypeSchema = mongoose.Schema({
    productType: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })
module.exports = mongoose.model("product-type", ProductTypeSchema);