import { Helmet } from "react-helmet-async";
import BackImg from "/src/assets/shop/banner2.jpg";

const OurShop = () => {
  return (
    <div>
      <Helmet>
        <title>Club Bistro | Our Shop</title>
      </Helmet>
      <div
        className="hero h-[700px] rounded-b-xl"
        style={{
          backgroundImage: `url(${BackImg})`,
        }}
      >
        <div className="hero-content text-white text-center bg-black bg-opacity-60 px-72 py-24">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-8xl cinzel">OUR SHOP</h1>
            <p className="mb-5 text-2xl">Would you like to try a dish?</p>
          </div>
        </div>
      </div>

        
    </div>
  );
};

export default OurShop;
