const stripe = require('stripe')(process.env.STRIPE_KEY);
const Order = require("../models/order.model");

const orderController = async (req, res) => {
  try {
    const { Mobile, address, stripeToken } = req.body;
    if (!Mobile || !address) {
      // throw new Error("Mobile and address require.");
      req.send({error : 'all field are require' })
    }

    //stripe payment
    stripe.charges.create({
      amount: req.body.total * 100,
      source: stripeToken,
      currency: 'inr',
      description: `demo ${req.body.userName}`
    }).then(() => {
      const orderData = new Order({
        userName: req.body.userName,
        total: req.body.total, 
        address,
        Mobile,
        paymentStatus: true 
      });
  
      orderData.save().then((result) => {
          res.status(200).json(result)
        })
        .catch((err) => res.status(200).json({error: err}));
    }).catch((error) => {
      res.status(200).json({error: error})
    })

  } catch (error) {
    res.json({ message: error.message });
  }
}
module.exports = { orderController }