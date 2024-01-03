const db = require('../../Model/VendorModel/VendorPaymentModel');

const addvendorpayment = async (req, res) => {
    try {
        console.log(req.body, "dtaadtady")

        const newdata = await db.create({
            accountNo : req.body.accountNo,
            vendorName : req.body.vendorName,
            balanceAmount : req.body.balanceAmount,
            selectBank : req.body.selectBank,
            paymentDate : req.body.paymentDate,
            payment : req.body.payment,
            chequeNo : req.body.chequeNo,
            remark : req.body.remark
        });

        res.status(200).json({newdata, message:"vendorpayment add successfully"});
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
        res.status(200).json({message:"Delete vendorpayment data"}) 
    } catch (error) {
        console.log(error);
    }
}

const updatedata = async (req, res) => {
    try {
        const {
            accountNo,
            vendorName,
            balanceAmount,
            selectBank,
            paymentDate,
            payment,
            chequeNo,
            remark
          } = req.body;
      const data = await db.findByIdAndUpdate(
        req.params.id,
        {
            accountNo,
            vendorName,
            balanceAmount,
            selectBank,
            paymentDate,
            payment,
            chequeNo,
            remark
        },
        {new: true},
      )
        res.status(200).json(data);
    } catch (error) {
        console.error(error); 
        res.status(500).json({ error: "Internal Server Error" }); 
    }
};


module.exports = { addvendorpayment, getdata , getsingledata, deletedata, updatedata};
