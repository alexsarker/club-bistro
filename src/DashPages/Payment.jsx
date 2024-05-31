import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../Components/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(import.meta.env.VITE_PUBLISHER_KEY);

const Payment = () => {
  const options = {
    mode: "payment",
    amount: 1099,
    currency: "usd",

    appearance: {},
  };
  return (
    <div className="mt-12">
      <SectionTitle subHeading={"Pay here"} heading={"PAYMENT"}></SectionTitle>

      <div>
        <Elements stripe={stripePromise} options={options}>
          <CheckOutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
