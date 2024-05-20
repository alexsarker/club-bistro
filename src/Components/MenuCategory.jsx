
const MenuCategory = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      {data?.map((item) => (
        <div key={item._id} className="grid grid-cols-5">
          <img
            src={item.image}
            className="w-28 rounded-b-full rounded-r-full"
          />
          <div className="col-span-3">
            <h4 className="cinzel text-xl">{item.name} ------------</h4>
            <p className="text-[#737373]">{item.recipe}</p>
          </div>
          <p className="text-main text-xl text-right">${item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default MenuCategory;
