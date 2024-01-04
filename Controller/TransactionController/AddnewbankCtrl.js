const db = require('../../Model/TransactionModel/AddnewbankModel');

const fillingstock = async (req, res) => {
    try {
        const { accountnumber } = req.body;

        const existingAc = await db.findOne({ accountnumber });
        if (existingAc) {
            return res.status(400).json({ error: "Account number already exists" });
        }

        const newData = await db.create({ accountnumber, ...req.body });
        res.status(200).json(newData);
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
        res.status(200).json({ deletedatas, message: "bank deleted sucessfully!" })
    } catch (error) {
        console.error(error);
    }
}


const updatedata = async (req, res) => {
    try {

        const updatedata = await db.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set: req.body
            }

        );
        res.status(200).json(updatedata);
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
};

module.exports = { fillingstock, getdata, getsingle, deletedata, updatedata };
