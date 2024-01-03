const db = require('../../Model/VendorModel/VendorPurchaseOrderModel');

const createpurchaseorder = async (req, res) => {
    try {
        const newdata = await db.create({
            product : req.body.product,
            price : req.body.price,
            purchaseQuantity : req.body.purchaseQuantity,
            amount : req.body.amount,
        });
        res.status(200).json({ newdata, success: true, message: "successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};



module.exports = { createpurchaseorder};
