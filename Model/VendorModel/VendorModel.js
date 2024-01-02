const mongoose = require("mongoose");

const VendorSchema = mongoose.Schema(
    {
        openAccountDate: {
            type: String,
            required: true,
        },
        vendorName: {
            type: String,
            required: true,
        },
        contactNumber: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        remark: {
            type: String,
            required: true,
        },
        openingBalance:{
            type:String,
            required: true
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("vendor", VendorSchema);
