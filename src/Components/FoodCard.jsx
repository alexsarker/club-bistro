import { Link, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { MdErrorOutline } from "react-icons/md";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

const FoodCard = ({ item }) => {
  const { name, image, price, recipe, _id } = item;
  const { user } = useAuth();
  const location = useLocation();

  const handleAddToCart = (food) => {
    console.log(food);
    if (user && user.email) {
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axios.post("http://localhost:5000/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          toast.success(`${name} added Successfully`);
        }
      });
    }
  };

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
        {user ? (
          <div className="card-actions mx-auto">
            <button
              onClick={() => handleAddToCart(item)}
              className="btn bg-main text-white px-10 border-none hover:bg-[#E7811B]"
            >
              Add to Cart
            </button>
          </div>
        ) : (
          <div className="card-actions mx-auto">
            <button
              onClick={() => document.getElementById("my_modal_1").showModal()}
              className="btn bg-main text-white px-10 border-none hover:bg-[#E7811B]"
            >
              Add to Cart
            </button>
            <dialog id="my_modal_1" className="modal">
              <div className="modal-box text-center">
                <div className="flex justify-center">
                  <MdErrorOutline className="text-7xl text-red-500" />
                </div>
                <p className="py-4">You are not logged in yet!</p>
                <div className="modal-action justify-center">
                  <Link
                    to="/login"
                    state={{ from: location }}
                    className="btn bg-main text-white border-none hover:bg-[#E7811B]"
                  >
                    Login Now
                  </Link>
                  <form method="dialog">
                    <button className="btn">Cancel</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        )}
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default FoodCard;
