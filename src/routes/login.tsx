import Button from "../components/ui/custom-button";
import CustomInput from "../components/ui/custom-input";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  return (
    <div className=" h-[450px] flex flex-col content-center items-center justify-center m-5">
      <h1 className="mx-4 my-4 text-2xl font-semibold"> FTL - Admin</h1>
      {/* Your login form goes here */}
      <CustomInput title="Email" placeholder="Enter your email" />
      <CustomInput title="Password" placeholder="Password" />
      <Link to="/dashboard" className="my-4">
        <Button title="Login" />
      </Link>
    </div>
  );
};

export default LoginScreen;
