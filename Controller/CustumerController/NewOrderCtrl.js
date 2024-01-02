
const db = require('../../Model/CustumerModel/NewOrderModel');

const addemployee = async (req, res) => {
    try {
        const newdata = await db.create(req.body);
        res.status(200).json({ newdata, message: "order add successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const getdata = async (req, res) => {
    try {
        const finddata = await db.find()
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error);
    }
}

const getsingledata = async (req, res) => {
    try {
        const finddata = await db.findOne({ _id: req.params.id })
        res.status(200).json(finddata)
    } catch (error) {
        console.log(error);
    }
}

const deletedata = async (req, res) => {
    try {
        const deletedatas = await db.deleteOne({ _id: req.params.id })
        res.status(200).json({ deletedatas, message: "Delete order data" })
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async (req, res) => {
    try {
        const upadate = await db.findByIdAndUpdate({ _id: req.params.id })
        res.status(200).json({ upadate, message: "update order data" })
    } catch (error) {
        console.log(error);
    }
};

module.exports = { addemployee, getdata, getsingledata, deletedata, updatedata };