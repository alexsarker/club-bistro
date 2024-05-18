import { useEffect, useState } from "react";
import SectionTitle from "../SectionTitle";
import { key } from "localforage";

const PopularMenu = () => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);

  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"from our menu"} />

      <div>
        {menu?.map((item) => (
          <div key={item._id}>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularMenu;
