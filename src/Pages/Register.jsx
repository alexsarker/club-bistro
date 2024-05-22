import Img from "/src/assets/others/authentication2 1.svg";
import BackImg from "/src/assets/home/banner.jpg";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    createUser(data.email, data.password)
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        toast.success("Created Successfully");
      })
      .catch(() => {
        toast.error("Already exist email!");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Club Bistro | Register</title>
      </Helmet>

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
              <h2 className="text-4xl font-bold text-center cinzel">
                Register
              </h2>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  {...register("name")}
                  placeholder="Full Name"
                  className="input input-bordered"
                  required
                />
                {errors.name && (
                  <span className="text-red-500 pt-2">Name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">PhotoURL</span>
                </label>
                <input
                  type="url"
                  name="photoURL"
                  {...register("photoURL")}
                  placeholder="https://"
                  className="input input-bordered"
                  required
                />
                {errors.photoURL && (
                  <span className="text-red-500 pt-2">
                    PhotoURL is required
                  </span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  {...register("email")}
                  placeholder="Email"
                  className="input input-bordered"
                  required
                />
                {errors.email && (
                  <span className="text-red-500 pt-2">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  {...register("password", {
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                  })}
                  placeholder="Password"
                  className="input input-bordered"
                  required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-500 pt-2">
                    Password is required
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-500 pt-2">
                    Password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "maxLength" && (
                  <span className="text-red-500 pt-2">
                    Password must be less than 20 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-500 pt-2">
                    Password must be one Uppercase, One Lowercase, one Numeric
                    and one Special Character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-main text-white hover:bg-[#E7811B]">
                  Register
                </button>
              </div>
              <p className="text-center mt-2">
                Have an account?{" "}
                <Link to="/login" className="text-main font-medium">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
        <div>
          <Toaster position="top-right" reverseOrder={false} />
        </div>
      </div>
    </div>
  );
};

export default Register;
