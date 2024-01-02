const db = require('../../Model/StockInOutModel/StockInOutModel');

const stockinout = async (req, res) => {
    try {
        const {
            date,
            salesman,
            product,
            qty,
            stockStatus,
            remarks
        } = req.body;
        const newdata = await db.create({
            date,
            salesman,
            product,
            qty,
            stockStatus,
            remarks
        });
        res.status(200).json({ newdata, success: true, message: "stockinout successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getdata = async (req, res) => {
    try {
        const finddata = await db.find()
        res.status(200).json(finddata)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getsingledata = async (req, res) => {
    try {
        const finddata = await db.findOne({ _id: req.params.id })
        res.status(200).json(finddata)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deletedata = async (req, res) => {
    try {
        const deletedatas = await db.deleteOne({ _id: req.params.id })
        res.status(200).json({ deletedatas, message: "Delete StockInout data" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            date,
            salesman,
            product,
            qty,
            stockStatus,
            remarks
        } = req.body;

        const data = await db.findByIdAndUpdate(
            req.params.id,
            {
                date,
                salesman,
                product,
                qty,
                stockStatus,
                remarks
            },
            { new: true },
        )
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { stockinout, getdata, getsingledata, deletedata, updatedata };
