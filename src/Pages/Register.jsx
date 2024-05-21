import Img from "/src/assets/others/authentication2 1.svg";
import BackImg from "/src/assets/home/banner.jpg";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  // const handleRegister = (event) => {
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = form.name.value;
  //   const photo = form.photoURL.value;
  //   const email = form.email.value;
  //   const password = form.password.value;
  //   console.log(name, photo, email, password);

  //   createUser(email, password)
  //     .then(() => {
  //       toast.success("Created Successfully");
  //     })
  //     .catch(() => {
  //       toast.error("Already exist email!");
  //     });
  // };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BackImg})`,
      }}
    >
      <div className="hero-overlay bg-[#FF9933] bg-opacity-90"></div>
      <div className="hero-content flex-col lg:flex-row bg-white p-20 rounded-xl shadow-sm">
        <img src={Img} className="max-w-xl" />
        <div className="card shrink-0 w-full max-w-sm">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <h2 className="text-4xl font-bold text-center cinzel">Register</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Full Name"
                className="input input-bordered"
                required
              />
              {errors.name && (
                <span className="text-red-500">Name is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">PhotoURL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                {...register("photoURL", { required: true })}
                placeholder="https://"
                className="input input-bordered"
                required
              />
              {errors.photoURL && (
                <span className="text-red-500">PhotoURL is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Email"
                className="input input-bordered"
                required
              />
              {errors.email && (
                <span className="text-red-500">Email is required</span>
              )}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                {...register("password", { required: true, minLength: 6 })}
                placeholder="Password"
                className="input input-bordered"
                required
              />
              {errors.password && (
                <span className="text-red-500">Password is required</span>
              )}
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-main text-white hover:bg-[#E7811B]">
                Register
              </button>
            </div>
            <p className="text-center mt-2">
              New user?{" "}
              <Link to="/login" className="text-main font-medium">
                Create an account
              </Link>
            </p>
          </form>
        </div>
      </div>
      <div>
        <Toaster position="top-right" reverseOrder={false} />
      </div>
    </div>
  );
};

export default Register;
