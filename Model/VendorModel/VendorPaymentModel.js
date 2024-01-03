const mongoose = require("mongoose");

const VendorPaymentSchema = mongoose.Schema(
    {
        accountNo: {
            type: String,
            required: true,
        },
        vendorName: {
            type: String,
            required: true,
        },
        balanceAmount: {
            type: String,
            required: true,
        },
        selectBank: {
            type: String,
            required: true,
        },
        paymentDate: {
            type: String,
            required: true,
        },
        payment:{
            type:String,
            required: true
        },
        chequeNo:{
            type:String,
            required: true
        },
        remark:{
            type:String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("vendorpayment", VendorPaymentSchema);
