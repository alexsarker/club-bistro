import SectionTitle from "../SectionTitle";
import useMenu from "../../hooks/useMenu";

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");

  return (
    <div>
      <SectionTitle subHeading={"Check it out"} heading={"from our menu"} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
        {popular?.map((item) => (
          <div key={item._id} className="flex gap-8">
            <img
              src={item.image}
              className="w-28 rounded-b-full rounded-r-full"
            />
            <div className="">
              <h4 className="cinzel text-xl">{item.name} ------------</h4>
              <p className="text-[#737373]">{item.recipe}</p>
            </div>
            <p className="text-main text-xl">${item.price}</p>
          </div>
        ))}
      </div>
      <div className="text-center">
        <button className="btn btn-outline text-main px-10 hover:bg-[#E7811B] hover:text-white hover:border-[#E7811B] mt-16">
          View Full Menu
        </button>
      </div>
    </div>
  );
};

export default PopularMenu;
