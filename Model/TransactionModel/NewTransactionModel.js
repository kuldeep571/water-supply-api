const mongoose = require("mongoose");
const proSchema = mongoose.Schema({
   
    transactionmode: {
        type: String,
        required: true,
    },
    selectbank:
    {
        type: String,
        required: true,
    },
    transactiondate:
    {
        type: String,
        required: true,
    },
    chequeno:
    {
        type: String,
        required: true,
    },
    amount:
    {
        type: String,
        required: true,
    },
    remarks:
    {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    })

module.exports = mongoose.model("newtransaction", proSchema);
