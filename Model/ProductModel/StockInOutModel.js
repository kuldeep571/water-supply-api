
const mongoose = require("mongoose");

const StockInOutSchema = mongoose.Schema(
    {
        date: {
            type: String,
            required: true,
        },
        salesman: {
            type: String,
            required: true,
        },
        product: {
            type: String,
            required: true,
        },
        qty: {
            type: String,
            required: true,
        },
        stockStatus: {
            type: String,
            required: true,
        },
        remarks: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("stockinout", StockInOutSchema);
