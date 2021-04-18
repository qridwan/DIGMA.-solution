import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentCard = ({ handlePayment }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);
  const [paymentSuccess, setPaymentSuccess] = useState(null);
  const handleSubmit = async (event) => {
    // Block native form submission.
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
      setPaymentError(error.message);
      setPaymentSuccess(null);
    } else {
      console.log("[PaymentMethod]", paymentMethod);
      handlePayment(paymentMethod.id);
      setPaymentSuccess("Your payment was successfully sent");
      setPaymentError(null);
    }
  };
  return (
    <div className="w-75 m-auto border p-4">
      <form onSubmit={handleSubmit}>
        <CardElement className="form-control bg-light text-primary" />
        <br/>
        <button className="btn px-5 btn-blueCyan text-light" type="submit" disabled={!stripe}>
          Pay $150
        </button>
      </form>
      {paymentError && <small className='text-danger'>{paymentError}</small>}
      {paymentSuccess && <small className='text-success'>{paymentSuccess}
      </small>}
    </div>
  );
};

export default PaymentCard;
