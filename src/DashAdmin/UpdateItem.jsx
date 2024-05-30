import toast, { Toaster } from "react-hot-toast";
import SectionTitle from "../Components/SectionTitle";
import { useLoaderData } from "react-router-dom";
import { useForm } from "react-hook-form";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAxiosSecure from "../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
  const { name, category, recipe, price, _id } = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = async (data) => {
    console.log(data);

    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.details,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        toast.success(`${data.name} updated in menu`);
      }
    }
  };

  return (
    <div className="mt-12">
      <SectionTitle
        subHeading={"Let's Change!"}
        heading={"UPDATE ITEM"}
      ></SectionTitle>

      <div className="p-2 bg-white">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="card-body grid md:grid-cols-2 lg:grid-cols-2 gap-2"
        >
          <div className="form-control md:col-span-2 lg:col-span-2">
            <label className="label">
              <span className="label-text">Recipe name</span>
            </label>
            <input
              type="text"
              placeholder="Recipe name"
              {...register("name")}
              defaultValue={name}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Category</span>
            </label>
            <select
              defaultValue={category}
              {...register("category")}
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled defaultValue>
                Select a Category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="soup">Soup</option>
              <option value="dessert">Dessert</option>
              <option value="drinks">Drinks</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              defaultValue={price}
              {...register("price")}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <div className="label">
              <span className="label-text">Recipe Details</span>
            </div>
            <textarea
              defaultValue={recipe}
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("details")}
            ></textarea>
          </div>
          <div className="form-control md:col-span-2 lg:col-span-2">
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered file-input-sm w-full max-w-xs"
            />
          </div>
          <div className="form-control mt-6 md:col-span-2 lg:col-span-2">
            <button className="btn bg-main text-white px-10 border-none hover:bg-[#E7811B]">
              Update Item
            </button>
          </div>
        </form>
      </div>

      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default UpdateItem;
