const db = require('../../Model/EmployeeModel/AreaAssingEmployeeModel');
const employee = require('../../Model/EmployeeModel/EmployeeModel')

const addarea = async (req, res) => {
    try {
        const newdata = await db.create({
            areaName : req.body.areaName,
        });
        res.status(200).json({ newdata, success: true, message: "addarea successfully" });
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
};

const getdata = async (req, res) => {
    try {
        const finddata = await employee.find().select('firstName')
        res.status(200).json(finddata)
    } catch (error) {
        res.status(500).json({ message: "Internal Server Error" });
    }
}

const getsingledata = async(req, res)=>{
    try {
        const finddata = await db.findOne({_id: req.params.id})
        res.status(200).json(finddata) 
    } catch (error) {
        console.log(error);
    }
}

const deletedata = async(req, res)=>{
    try {
        const deletedatas = await db.deleteOne({_id: req.params.id})
        res.status(200).json({deletedatas, message:"Delete Area data"}) 
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async (req, res) => {
    try {
        const upadate = await db.deleteOne({_id: req.params.id})
        res.status(200).json({upadate, message:"update Area data"}) 
    } catch (error) {
        console.log(error);
    }
};


module.exports = { addarea, getdata, getsingledata, deletedata, updatedata};
