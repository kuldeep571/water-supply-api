const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        date : {
            type: String,
            required: true,
        },
        securitystatus: {
            type: String,
            required: true,
        },
        securitydetails   : {
            type: String,
            required: true,
        },
        securityamount: {
            type: String,
            required: true,
        },
        // custumerid: {
        //     type: String,
        //     required: true,
        // },
        custumername: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        totaldeposity: {
            type: String,
            default: false,
        },
        totalrefund: {
            type: String,
            required: true,
        },
        balance: {
            type: String,
            required: true,
        },
        
    },
    { timestamps: true }
);

module.exports = mongoose.model("custumersecures", EmpolyeeSchema);

// {
//     "date":"hc",
//     "securitystatus":"jcvgd",
//     "securitydetails":"jcvv",
//     "securityamount":"chvdg",
//     "custumerid":"frjb",
//     "custumername":"jcd",
//     "adress":"cdh",
//     "totaldeposity":"dcd",
//     "totalrefund":"kffg",
//     "balance":"hhfb"
// }
