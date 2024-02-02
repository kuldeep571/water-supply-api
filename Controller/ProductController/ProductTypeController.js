const db = require('../../Model/ProductModel/ProductTypeModel');

const addProductType = async (req, res) => {
    try {
        const {
            productType
        } = req.body;
        const newData = await db.create({
            productType
        });
        res.status(201).json({ newData, success: true, message: "Product Type product successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};


const getdata = async (req, res) => {
    try {
        const finddata = await db.find()
        res.status(200).json({ sucess: true, finddata, message: "All Products Type fetched Successfully" })
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
            productType
        } = req.body;

        const updatedData = await db.findByIdAndUpdate(
            req.params.id,
            {
                productType
            },
            { new: true },
        )
        res.status(201).json({ updatedData });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addProductType, getdata, getsingledata, deletedata, updatedata };
