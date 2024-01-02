const mongoose = require("mongoose");

const purchaseOrderVendorSchema = mongoose.Schema(
    {
        product: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        purchaseQuantity: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("purchasevender", purchaseOrderVendorSchema);
