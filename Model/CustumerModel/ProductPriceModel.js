const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema({

        product: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        selectproduct: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        custumerid: {
            type: String,
            required: true,
        },
        custumerid: {
            type: String,
            required: true,
        },
        custumername: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            default: false,
        },
        address: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("productprices", EmpolyeeSchema);

