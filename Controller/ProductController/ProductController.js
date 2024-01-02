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
        res.status(200).json({newdata, success: true, message:"addproduct product successfully"});
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
        const deletedatas= await db.deleteOne({ _id: req.params.id })
        res.status(200).json({ deletedatas, message: "Delete vendor data" })
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

        const data = await db.findByIdAndUpdate(
            req.params.id,
            {
                productName,
                price,
                quantityType
            },
            { new: true },
        )
        res.status(200).json(data);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { addproduct, getdata, getsingledata, deletedata, updatedata };
