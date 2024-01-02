const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        accountopendate: {
            type: String,
            required: true,
        },
        custumername: {
            type: String,
            required: true,
        },
        contactnumber   : {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        amountstatus: {
            type: String,
            required: true,
        },
        securitydepositamount: {
            type: String,
            required: true,
        },
        securityremark: {
            type: String,
            required: true,
        },
        openingbottle: {
<<<<<<< Updated upstream
            type: String,
=======
            type: Boolean,
>>>>>>> Stashed changes
            default: false,
        },
        openingbalance: {
            type: String,
            required: true,
        },
        username: {
            type: String,
            required: true,
        },
        searchbycustumerid: {
            type: String,
            required: true,
        },
        selectarea: {
            type: String,
            required: true,
        },
<<<<<<< Updated upstream
=======
        selectarea: {
            type: String,
            required: true,
        }, 
>>>>>>> Stashed changes
        requiredbottleqty: {
            type: String,
            required: true,
        }, 
        day: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("newcustumers", EmpolyeeSchema);
<<<<<<< Updated upstream


// {
//     "accountopendate":"2",
//     "custumername":"khans ",
//     "contactnumber":"cdh",
//     "address":"xjs",
//     "amountstatus":"xcjx",
//     "securitydepositamount":"sdvs",
//     "securityremark":"cj",
//     "openingbottle":"chv",
//     "openingbalance":"cdbc",
//     "username":"chvdhcv",
//     "searchbycustumerid":"djcbd",
//     "selectarea":"dncd",
//     "requiredbottleqty":"dnc",
//     "day":"dcdhb"
// }
=======
>>>>>>> Stashed changes
