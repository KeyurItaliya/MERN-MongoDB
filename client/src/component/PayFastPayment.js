import axios from "axios";
import React, { useState } from "react";

function PayFastPayment() {
  const [total, setTotal] = useState(50)
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("e", e.target.value);
    axios.post("https://sandbox.payfast.co.za/eng/process", 
      { merchant_id: "10023475", merchant_key:"h76kelnpjst35", amount: "130", item_name: "xzy"})
  }
  return (
    <React.Fragment>
      <form action="https://sandbox.payfast.co.za/eng/process" method="POST">
        <input type="hidden" name="merchant_id" value="10023475" />
        <input type="hidden" name="merchant_key" value="h76kelnpjst35" />
        <input type="number" name="amount" onChange={(e) => setTotal(e.target.value)} value={total} />
        <input type="hidden" name="item_name" value="Test Product" />
        <input type="hidden" name="return_url" value="http://127.0.0.1:8080/success" />
        <input type="hidden" name="cancel_url" value="http://127.0.0.1:8080/cancel" />
        <input type="hidden" name="notify_url" value="http://127.0.0.1:8080/notify" />
        <input type="submit" />
      </form>
    </React.Fragment>
  );
}

export default PayFastPayment;
