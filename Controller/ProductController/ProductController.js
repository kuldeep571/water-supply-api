const db = require('../../Model/ProductModel/ProductModel');

const addproduct = async (req, res) => {
    try {
        const {
            productName,
            price,
            quantityType
        } = req.body;
        const newdata = await db.create({
            productName,
            price,
            quantityType
        });
        res.status(200).json({ newdata, success: true, message: "addproduct product successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getdata = async (req, res) => {
    try {
        const finddata = await db.find()
        res.status(200).json({ sucess: true, finddata, message: "All Products fetched Successfully" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getsingledata = async (req, res) => {
    try {
        const finddata = await db.findOne({ _id: req.params.id })
        res.status(200).json({ finddata })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const deletedata = async (req, res) => {
    try {
        const deletedata = await db.deleteOne({ _id: req.params.id })
        res.status(200).json({ deletedata, message: "Delete vendor data" })
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            productName,
            price,
            quantityType
        } = req.body;

        const updatedData = await db.findByIdAndUpdate(
            req.params.id,
            {
                productName,
                price,
                quantityType
            },
            { new: true },
        )
        res.status(200).json({ updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addproduct, getdata, getsingledata, deletedata, updatedata };
