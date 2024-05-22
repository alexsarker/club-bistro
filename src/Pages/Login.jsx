import Img from "/src/assets/others/authentication2 1.svg";
import BackImg from "/src/assets/home/banner.jpg";
import { useContext, useState } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";

const Login = () => {
  const { loginUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    loginUser(data.email, data.password)
      .then(() => {
        navigate(location?.state ? location?.state : "/");
        toast.success("You're In");
      })
      .catch(() => {
        toast.error("Already exist email!");
      });
  };

  return (
    <div>
      <Helmet>
        <title>Club Bistro | Login</title>
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
              <h2 className="text-4xl font-bold text-center cinzel">Login</h2>
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
                <label className="input input-bordered flex items-center gap-2">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    {...register("password", {
                      minLength: 6,
                      maxLength: 20,
                      pattern:
                        /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                    })}
                    className="grow"
                    placeholder="Password"
                  />
                  <span onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? (
                      <IoEyeOffOutline className="text-xl" />
                    ) : (
                      <IoEyeOutline className="text-xl" />
                    )}
                  </span>
                </label>
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
                  Login
                </button>
              </div>
              <p className="text-center mt-2">
                New User?{" "}
                <Link to="/register" className="text-main font-medium">
                  Register
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

export default Login;
