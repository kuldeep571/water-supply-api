const db = require('../../Model/ProductModel/FillingStockModel');

const fillingstock = async (req, res) => {
    try {
        const {
            productName,
            fillingStockQuantity,
            date
        } = req.body;

        console.log(req.body, "req.body");

        const newdata = await db.create({
            productName,
            fillingStockQuantity,
            date
        });

        res.status(200).json(newdata);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getdata = async (req, res) => {
    try {

        const getalldata = await db.find();
        res.status(200).json(getalldata)
    } catch (error) {
        console.error(error);
    }
}

const getsingle = async (req, res) => {
    try {
        const getsingledata = await db.findOne({ _id: req.params.id });
        res.status(200).json(getsingledata)
    } catch (error) {
        console.error(error);
    }
}


const deletedata = async (req, res) => {
    try {
        const deletedatas = await db.deleteOne({ _id: req.params.id });
        res.status(200).json({ deletedatas, message: "stock data delete single......" })
    } catch (error) {
        console.error(error);
    }
}


const updatedata = async (req, res) => {
    try {
        const {
            productName,
            fillingStockQuantity,
            date
        } = req.body;

        const updatedata = await db.findByIdAndUpdate(
            req.params.id,
            {
                productName,
                fillingStockQuantity,
                date
            },
            { new: true }
        );
        res.status(200).json(updatedata);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { fillingstock, getdata, getsingle, deletedata, updatedata };
