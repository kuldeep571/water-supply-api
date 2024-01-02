const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        selectproduct: {
            type: String,
            required: true,
        },
        price: {
            type: String,
            required: true,
        },
        s_quantity   : {
            type: String,
            required: true,
        },
        r_quantity: {
            type: String,
            required: true,
        },
        amount: {
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
        selectsalesman: {
            type: String,
            required: true,
        },
        orderdate: {
            type: String,
            required: true,
        },
        invoice: {
            type: String,
            required: true,
        },
        billbook: {
            type: String,
            required: true,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("neworders", EmpolyeeSchema);

// {
//     "selectproduct":"rehan",
//     "price":"hcdh",
//     "s_quantity":"djbj",
//     "r_quantity":"vfbv",
//     "amount":"fvh",
//     "custumerid":"dv",
//     "custumername":"dcdh",
//     "adress":"dcv",
//     "selectsalesman":"dcdh",
//     "orderdate":"vgffv",
//     "invoice":"cdd",
//     "billbook":"vjbbv"
// }