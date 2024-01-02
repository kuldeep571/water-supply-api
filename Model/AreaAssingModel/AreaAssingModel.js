const mongoose = require("mongoose");

const AreaAssingSchema = mongoose.Schema(
    {
        areaName: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model("areaassing", AreaAssingSchema);
