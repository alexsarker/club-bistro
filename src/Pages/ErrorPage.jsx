import { Link } from "react-router-dom";
import ErrorImg from "/src/assets/404.gif";
const ErrorPage = () => {
  return (
    <div className="text-center mt-16">
      <div className="flex justify-center">
        <img src={ErrorImg} alt="404" />
      </div>
      <span className="flex justify-center pt-6">
        <Link to="/">
          <button className="btn bg-main text-white hover:bg-[#E7811B]">
            Back to home{" "}
          </button>
        </Link>
      </span>
    </div>
  );
};

export default ErrorPage;
