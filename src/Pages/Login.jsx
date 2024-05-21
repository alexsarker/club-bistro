import Img from "/src/assets/others/authentication2 1.svg";
import BackImg from "/src/assets/home/banner.jpg";
import { useContext } from "react";
import { AuthContext } from "../Controller/AuthProvider";
import toast, { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const Login = () => {
  const { loginUser } = useContext(AuthContext);

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    loginUser(email, password)
      .then(() => {
        toast.success("You,re In");
      })
      .catch(() => {
        toast.error("Something Wrong!");
      });
  };

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
          <form onSubmit={handleLogin} className="card-body">
            <h2 className="text-4xl font-bold text-center cinzel">Login</h2>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-main text-white hover:bg-[#E7811B]">
                Login
              </button>
            </div>
            <p className="text-center mt-2">
              Have an account?{" "}
              <Link to="/register" className="text-main font-medium">
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
  );
};

export default Login;
