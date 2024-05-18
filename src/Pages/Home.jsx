import Banner from "../Components/Home/Banner";
import Board from "../Components/Home/Board";
import Category from "../Components/Home/Category";
import PopularMenu from "../Components/Home/PopularMenu";

const Home = () => {
  return (
    <div className="space-y-24">
      <Banner />
      <Category />
      <Board />
      <PopularMenu />
    </div>
  );
};

export default Home;
