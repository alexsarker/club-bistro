import { Link } from "react-router-dom";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="card w-80 border">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="text-[#737373]">{recipe}</p>
        <p className="text-xl py-2">
          Price: <span className="text-main">${price}</span>
        </p>
        <div className="card-actions mx-auto">
          <Link
            to=""
            className="btn bg-main text-white px-10 border-none hover:bg-[#E7811B]"
          >
            Add to Cart
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
