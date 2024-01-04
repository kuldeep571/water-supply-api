const mongoose = require("mongoose");
const proSchema = mongoose.Schema({
   
    bankname: {
        type: String,
        required: true,
    },
    accounttitle:
    {
        type: String,
        required: true,
    },
    accountnumber:
    {
        type: String,
        required: true,
    },
    openinigbalance:
    {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("newbank", proSchema);

// {
//     "bankname":"hdfc bank",
//     "accounttitle":"saleryaccount",
//     "accountnumber":"31789547624",
//     "openinigbalance":"6000"
// }