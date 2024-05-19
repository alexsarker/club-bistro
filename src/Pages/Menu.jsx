import BackImg from "/src/assets/menu/banner3.jpg";
import BackDessert from "/src/assets/menu/dessert-bg.jpeg";
import BackSoup from "/src/assets/menu/soup-bg.jpg";
import BackPizza from "/src/assets/menu/pizza-bg.jpg";
import BackSalad from "/src/assets/menu/salad-bg.jpg";
import { Helmet } from "react-helmet-async";
import Cover from "../Components/Cover";
import SectionTitle from "../Components/SectionTitle";
import { Parallax } from "react-parallax";
import useMenu from "../hooks/useMenu";
import MenuCategory from "../Components/MenuCategory";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const pizza = menu.filter((item) => item.category === "pizza");
  const salad = menu.filter((item) => item.category === "salad");
  const offer = menu.filter((item) => item.category === "offered");

  return (
    <div className="space-y-24 mb-48">
      <Helmet>
        <title>Club Bistro | Menu</title>
      </Helmet>

      <div
        className="hero h-[700px] rounded-b-xl"
        style={{
          backgroundImage: `url(${BackImg})`,
        }}
      >
        <div className="hero-content text-white text-center bg-black bg-opacity-60 px-72 py-24">
          <div className="max-w-4xl">
            <h1 className="mb-5 text-8xl cinzel">OUR MENU</h1>
            <p className="mb-5 text-2xl">Would you like to try a dish?</p>
          </div>
        </div>
      </div>
      <div>
        <SectionTitle subHeading={"Don't miss"} heading={"TODAY'S OFFER"} />
        <MenuCategory data={offer} />
      </div>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={BackDessert}
        strength={-200}
      >
        <Cover
          heading={"DESSERTS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </Parallax>
      <div>
        <MenuCategory data={dessert} />
      </div>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={BackPizza}
        strength={-200}
      >
        <Cover
          heading={"PIZZA"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </Parallax>
      <div>
        <MenuCategory data={pizza} />
      </div>

      <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={BackSalad}
        strength={-200}
      >
        <Cover
          heading={"SALADS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </Parallax>
      <div>
        <MenuCategory data={salad} />
      </div>

      <Parallax blur={{ min: -15, max: 15 }} bgImage={BackSoup} strength={-200}>
        <Cover
          heading={"SOUPS"}
          subHeading={
            "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          }
        />
      </Parallax>
      <div>
        <MenuCategory data={soup} />
      </div>
    </div>
  );
};

export default Menu;
