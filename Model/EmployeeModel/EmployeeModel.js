const mongoose = require("mongoose");

const EmpolyeeSchema = mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
        },
        lastName: {
            type: String,
            required: true,
        },
        joinDate: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        employeeDesignation: {
            type: String,
            required: true,
        },
        nic: {
            type: String,
            required: true,
        },
        contact: {
            type: String,
            required: true,
        },
        status: {
            type: Boolean,
            default: false,
        },
        salary: {
            type: String,
            required: true,
        },
        salaryPayTo: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("employee", EmpolyeeSchema);
