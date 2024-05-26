import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "../Components/SectionTitle";
import { RiDeleteBinLine } from "react-icons/ri";
import useAxiosSecure from "../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { FaUser } from "react-icons/fa6";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });
  const handleDelete = (_id) => {
    axiosSecure.delete(`/users/${_id}`).then((res) => {
      if (res.data.deletedCount > 0) {
        refetch();
        toast.success("Deleted Successfully");
      }
    });
  };
  return (
    <div className="mt-12">
      <SectionTitle
        subHeading={"How many??"}
        heading={"MANAGE ALL USERS"}
      ></SectionTitle>

      <div className="container mx-auto p-12 bg-white">
        <div className="cinzel text-2xl font-bold uppercase">
          <h2>Total Users: {users.length}</h2>
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
                <th>NAME</th>
                <th>EMAIL</th>
                <th>ROLE</th>
                <th>ACTION</th>
              </tr>
            </thead>
            <tbody>
              {/* row */}
              {users?.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex users-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src={user.photo}
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>{user.email}</td>
                  <td>
                    <button className="btn btn-sm bg-[#FF9933]">
                      <FaUser className="text-white" />
                    </button>
                  </td>
                  <th>
                    <button
                      onClick={() =>
                        document
                          .getElementById(`my_modal_1_${user._id}`)
                          .showModal()
                      }
                      className="btn btn-ghost btn-sm hover:bg-red-500"
                    >
                      <RiDeleteBinLine className="text-xl text-red-500 hover:text-white" />
                    </button>
                    <dialog id={`my_modal_1_${user?._id}`} className="modal">
                      <div className="modal-box text-center flex flex-col users-center">
                        <p className="py-4">
                          Are you sure want to delete this user?
                        </p>
                        <div className="modal-action">
                          <form method="dialog" className="space-x-4">
                            <button
                              onClick={() => handleDelete(user?._id)}
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

export default AllUsers;
