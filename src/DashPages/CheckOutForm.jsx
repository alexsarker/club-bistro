import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useState } from "react";

const CheckOutForm = () => {
  const stripe = useStripe();
  const elements = useElements();

  const [errorMessage, setErrorMessage] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (elements == null) {
      return;
    }

    const { error: submitError } = await elements.submit();
    if (submitError) {
      setErrorMessage(submitError.message);
      console.log(submitError.message)
      return;
    }

    const res = await fetch("/create-intent", {
    //   method: 'POST',
    });

    const { client_secret: clientSecret } = await res.json();

    const { error } = await stripe.confirmPayment({
      elements,
      clientSecret,
      confirmParams: {
        return_url: "/",
      },
    });

    if (error) {
      setErrorMessage(error.message);
      console.log(error.message)
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-8 border">
      <PaymentElement className="mb-6" />
      <button
        type="submit"
        disabled={!stripe || !elements}
        className="btn btn-sm bg-main w-full text-white hover:bg-[#E7811B]"
      >
        PAY
      </button>
      {errorMessage && <div className="mt-2 text-center text-red-500">{errorMessage}</div>}
    </form>
  );
};

export default CheckOutForm;
