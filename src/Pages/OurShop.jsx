import { Helmet } from "react-helmet-async";
import BackImg from "/src/assets/shop/banner2.jpg";
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useMenu from "../hooks/useMenu";
import FoodCard from "../Components/FoodCard";
import { useParams } from "react-router-dom";

const OurShop = () => {
  const categories = ["salad", "pizza", "soup", "dessert", "drinks"];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();

  const dessert = menu?.filter((item) => item.category === "dessert");
  const soup = menu?.filter((item) => item.category === "soup");
  const pizza = menu?.filter((item) => item.category === "pizza");
  const salad = menu?.filter((item) => item.category === "salad");
  const drinks = menu?.filter((item) => item.category === "drinks");

  return (
    <div className="space-y-24 mb-48">
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
      <div className="container mx-auto">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="uppercase text-center">
            <Tab>salad</Tab>
            <Tab>pizza</Tab>
            <Tab>soup</Tab>
            <Tab>dessert</Tab>
            <Tab>drinks</Tab>
          </TabList>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 place-items-center">
              {salad?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 place-items-center">
              {pizza?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 place-items-center">
              {soup?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 place-items-center">
              {dessert?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
          <TabPanel>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-12 gap-6 place-items-center">
              {drinks?.map((item) => (
                <FoodCard key={item._id} item={item} />
              ))}
            </div>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
