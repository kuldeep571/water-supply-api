const db = require('../../Model/VendorModel/VendorLedgerModel');

const addvendorledger = async (req, res) => {
    try {
        const {
            vendorId,
            vendorName,
            ledgerType,
            address,
            contact,
            outstandingBalance
          } = req.body;
        
        const newdata = await db.create({
            vendorId,
            vendorName,
            ledgerType,
            address,
            contact,
            outstandingBalance
        });

        res.status(200).json({newdata, message:"Vendor ledger add successfully"});
    } catch (error) {
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
        await db.deleteOne({_id: req.params.id})
        res.status(200).json({message:"Delete vendor ledger data"}) 
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            vendorId,
            vendorName,
            ledgerType,
            address,
            contact,
            outstandingBalance
          } = req.body;

      const data = await db.findByIdAndUpdate(
        req.params.id,
        {
            vendorId,
            vendorName,
            ledgerType,
            address,
            contact,
            outstandingBalance
        },
        {new: true},
      )
        res.status(200).json(data);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};


module.exports = { addvendorledger, getdata , getsingledata, deletedata, updatedata};
