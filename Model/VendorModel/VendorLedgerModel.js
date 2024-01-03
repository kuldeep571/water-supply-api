const mongoose = require("mongoose");

const VendorSchema = mongoose.Schema(
    {
        vendorId: {
            type: String,
            required: true,
        },
        vendorName: {
            type: String,
            required: true,
        },
        ledgerType: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        outstandingBalance:{
            type:String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("vendorledger", VendorSchema);
