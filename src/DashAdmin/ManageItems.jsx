import toast, { Toaster } from "react-hot-toast";
import { RiDeleteBinLine } from "react-icons/ri";
import SectionTitle from "../Components/SectionTitle";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useMenu from "../hooks/useMenu";
import { BiEdit } from "react-icons/bi";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, refetch] = useMenu();
  const axiosSecure = useAxiosSecure();

  const handleDelete = (_id) => {
    console.log(_id);
    axiosSecure.delete(`/menu/${_id}`).then((res) => {
      console.log(res.data);
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Deleted Successfully");
      }
    });
  };
  return (
    <div className="mt-12">
      <SectionTitle
        subHeading={"Hurry Up!"}
        heading={"MANAGE ALL ITEMS"}
      ></SectionTitle>

      <div className="container mx-auto p-12 bg-white">
        <div className="cinzel text-2xl font-bold uppercase">
          <h2>Total Users: {menu.length}</h2>
        </div>

        <div className="overflow-x-auto pt-6 w-[800px]">
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
                <th>UPDATE</th>
                <th>DELETE</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {menu?.map((item, index) => (
                <tr key={item._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex users-center gap-3">
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
                  <td>${item.price}</td>
                  <td>
                    <Link
                      to={`/dashboard/updateItem/${item._id}`}
                      className="btn btn-sm bg-[#FF9933]"
                    >
                      <BiEdit className="text-white text-xl" />
                    </Link>
                  </td>
                  <th>
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_1_${item?._id}`)
                          .showModal()
                      }
                      className="btn btn-ghost btn-sm hover:bg-red-500"
                    >
                      <RiDeleteBinLine className="text-xl text-red-500 hover:text-white" />
                    </button>
                    <dialog id={`my_modal_1_${item?._id}`} className="modal">
                      <div className="modal-box text-center flex flex-col users-center">
                        <p className="py-4">
                          Are you sure want to delete this user?
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

export default ManageItems;
