import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../Components/SectionTitle";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";
import toast, { Toaster } from "react-hot-toast";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const axiosSecure = useAxiosSecure();
  const handleDelete = (_id) => {
    axiosSecure.delete(`/carts/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Deleted Successfully");
      }
    });
  };
  return (
    <div className="mt-12">
      <SectionTitle
        subHeading={"My Cart"}
        heading={"WANNA ADD MORE?"}
      ></SectionTitle>

      <div className="container mx-auto p-12 bg-white">
        <div className="cinzel text-2xl font-bold uppercase grid grid-cols-3 place-items-center gap-32">
          <h2>Total Orders: {cart.length}</h2>
          <h2>Total Price: {totalPrice}</h2>
          <span className="place-self-end">
            <button className="btn bg-main text-white hover:bg-[#E7811B]">
              PAY
            </button>
          </span>
        </div>

        <div className="overflow-x-auto pt-6">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                  <label>
                    <p>#</p>
                  </label>
                </th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {cart?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={item.image}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <th>
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_1_${item._id}`)
                          .showModal()
                      }
                      className="btn btn-ghost btn-sm hover:bg-red-500"
                    >
                      <RiDeleteBinLine className="text-xl text-red-500 hover:text-white" />
                    </button>
                    <dialog id={`my_modal_1_${item?._id}`} className="modal">
                      <div className="modal-box text-center flex flex-col items-center">
                        <p className="py-4">
                          Are you sure want to delete this item?
                        </p>
                        <div className="modal-action">
                          <form method="dialog" className="space-x-4">
                            <button
                              onClick={() => handleDelete(item?._id)}
                              className="btn bg-main text-white hover:bg-[#E7811B]"
                            >
                              Confirm
                            </button>
                            <button className="btn px-6">Close</button>
                          </form>
                        </div>
                      </div>
                    </dialog>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Cart;
