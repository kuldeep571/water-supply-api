const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        custumerid: {
            type: String,
            required: true,
        },
        custumer: {
            type: String,
            required: true,
        },
        ledgertype   : {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        adress: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        securitybalance: {
            type: String,
            required: true,
        },
        outstandingbotal: {
            type: String,
            default: false,
        },
        outstandingbalance: {
            type: String,
            required: true,
        },
        totalsalewaterbottal: {
            type: String,
            required: true,
        },
        totalreturnwaterbottal: {
            type: String,
            required: true,
        },
        bottalbalance: {
            type: String,
            required: true,
        },
        billingamount: {
            type: String,
            required: true,
        },
        totalamount: {
            type: String,
            required: true,
        },
        paymentrecieved: {
            type: String,
            required: true,
        },
        tax: {
            type: String,
            required: true,
        },
        balace: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("custumerledgers", EmpolyeeSchema);