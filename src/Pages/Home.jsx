import { Helmet } from "react-helmet-async";
import Banner from "../Components/Home/Banner";
import Board from "../Components/Home/Board";
import Category from "../Components/Home/Category";
import Featured from "../Components/Home/Featured";
import PopularMenu from "../Components/Home/PopularMenu";
import Testimonial from "../Components/Home/Testimonial";

const Home = () => {
  return (
    <div className="space-y-24">
      <Helmet>
        <title>Club Bistro | Home</title>
      </Helmet>
      <Banner />
      <Category />
      <Board />
      <div className="container mx-auto">
        <PopularMenu />
      </div>
      <Featured />
      <div className="container mx-auto">
        <Testimonial />
      </div>
    </div>
  );
};

export default Home;
