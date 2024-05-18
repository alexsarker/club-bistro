import SectionTitle from "../SectionTitle";
import FeaturedImg from "/src/assets/home/featured.jpg";

const Featured = () => {
  return (
    <div
      className="hero min-h-screen rounded-2xl bg-fixed"
      style={{
        backgroundImage: `url(${FeaturedImg})`,
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60 rounded-2xl"></div>
      <div className="hero-content text-neutral-content">
        <div>
          <SectionTitle subHeading={"Check it out"} heading={"FEATURED"} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16 items-center">
            <img src={FeaturedImg} className="rounded" />
            <div>
              <p>
                March 20, 2023
                <br />
                WHERE CAN I GET SOME?
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
                voluptate facere, deserunt dolores maiores quod nobis quas
                quasi. Eaque repellat recusandae ad laudantium tempore
                consequatur consequuntur omnis ullam maxime tenetur.
              </p>
              <button className="btn btn-outline text-main px-6 hover:bg-[#E7811B] hover:text-white hover:border-[#E7811B] mt-16">
                Read More
              </button>
            </div>
          </div>{" "}
        </div>
      </div>
    </div>
  );
};

export default Featured;
