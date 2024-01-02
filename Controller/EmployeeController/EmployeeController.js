const db = require('../../Model/EmployeeModel/EmployeeModel');

const addemployee = async (req, res) => {
    try {
        // const {
        //     firstName,
        //     lastName,
        //     joinDate,
        //     address,
        //     employeeDesignation,
        //     nic,
        //     contact,
        //     status,
        //     salary,
        //     salaryPayTo
        //   } = req.body;
        
        const newdata = await db.create({
            ...req.body
        });

        res.status(200).json({newdata, message:"employee add successfully"});
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};


const getdata = async(req, res)=>{
    try {
        const finddata = await db.find()
        res.status(200).json(finddata) 
    } catch (error) {
        console.log(error);
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
        res.status(200).json({deletedatas, message:"Delete employee data"}) 
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            firstName,
            lastName,
            joinDate,
            address,
            employeeDesignation,
            nic,
            contact,
            status,
            salary,
            salaryPayTo
          } = req.body;

      const data = await db.findByIdAndUpdate(
        req.params.id,
        {
            firstName,
            lastName,
            joinDate,
            address,
            employeeDesignation,
            nic,
            contact,
            status,
            salary,
            salaryPayTo
        },
        {new: true},
      )
        res.status(200).json(data);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};


module.exports = { addemployee, getdata , getsingledata, deletedata, updatedata};
