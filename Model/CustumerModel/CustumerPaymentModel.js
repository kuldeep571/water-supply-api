const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        account: {
            type: String,
            required: true,
        },
        custumername: {
            type: String,
            required: true,
        },
        balancebottle   : {
            type: String,
            required: true,
        },
        balanceamount: {
            type: String,
            required: true,
        },
        paymentreciever: {
            type: String,
            required: true,
        },
        paymentdate: {
            type: String,
            required: true,
        },
        paymentmode: {
            type: String,
            default: false,
        },
        paymentrecieved: {
            type: String,
            required: true,
        },
        tax: {
            type: String,
            required: true,
        },
        checkno: {
            type: String,
            required: true,
        },
        remark: {
            type: String,
            required: true,
        },

    },
    { timestamps: true }
);

module.exports = mongoose.model("custumerpayments", EmpolyeeSchema);



// {
//     "account":"100",
//     "custumername":"rehan",
//     "balancebottle":"fffff",
//     "balanceamount":"vfj",
//     "paymentreciever":"fjdb",
//     "selectbank":"vjbjb",
//     "paymentdate":"dhcvhd",
//     "paymentmode":"sf",
//     "paymentrecieved":"vjbv",
//     "tax":"djv",
//     "checkno":"djvbd",
//     "remark":"mvbn"
// }