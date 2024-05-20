import Img from "/src/assets/others/authentication2 1.svg";
import BackImg from "/src/assets/home/banner.jpg";


const Login = () => {


  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${BackImg})`,
      }}
    >
      <div className="hero-overlay bg-[#FF9933] bg-opacity-90"></div>
      <div className="hero-content flex-col lg:flex-row bg-white p-32 rounded-xl shadow-sm">
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
                placeholder="email"
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
                placeholder="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn bg-main text-white hover:bg-[#E7811B]">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
