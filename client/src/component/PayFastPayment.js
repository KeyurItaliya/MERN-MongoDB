import axios from "axios";
import React, { useState } from "react";
import md5 from "md5"

function PayFastPayment() {
  const [total, setTotal] = useState(50)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e.target.value);
    axios.post("https://sandbox.payfast.co.za/eng/process", 
      { merchant_id: "10023475", merchant_key:"h76kelnpjst35", amount: "130", item_name: "xzy"})
  }
  const params = new URLSearchParams({
    merchant_id: "10023475",
    merchant_key: "h76kelnpjst35",
    return_url: "https://eco-mern.herokuapp.com/settings",
    cancel_url: "https://eco-mern.herokuapp.com/settings",
    notify_url: "https://eco-mern.herokuapp.com/api/user/notify",
    amount: "50",
    item_name: "payment_name",
  });
  
  // Create an MD5 signature of it.
  const MD5Signature = md5(params.toString())
  return (
    <React.Fragment>
      <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
        <input type="hidden" name="merchant_id" value="10023475" />
        <input type="hidden" name="merchant_key" value="h76kelnpjst35" />
        <input type="hidden" name="return_url" value="https://eco-mern.herokuapp.com/settings" />
        <input type="hidden" name="cancel_url" value="https://eco-mern.herokuapp.com/settings" />
        <input type="hidden" name="notify_url" value="https://eco-mern.herokuapp.com/api/user/notify" />
        <input type="hidden" name="amount" value="50" />
        <input type="hidden" name="item_name" value="payment_name " />
        <input type="submit" />
        </form>
        </React.Fragment>
        );
      }
      // <input type="hidden" name="signature" value={MD5Signature} />       
// <input type="hidden" name="signature" value={MD5Signature} />
// <input type="number" name="amount" onChange={(e) => setTotal(e.target.value)} value={total} />
// <input type="hidden" name="item_name" value="Test Product" />
export default PayFastPayment;
