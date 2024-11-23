import Button from "../components/ui/custom-button";
import CustomInput from "../components/ui/custom-input";
import { Link } from "react-router-dom";
import { useAppContext } from "../hooks/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const result = await login(email, password);
    if (result.success) {
      navigate("/dashboard");
    }

    console.log(result); // Uncomment this line to see the response from the API call.
  };
  return (
    <div className=" h-[450px] flex flex-col max-w-md shadow-lg m-auto content-center items-center justify-center mt-10">
      <h3 className="mx-4 my-4 text-2xl font-semibold"> Welcome back</h3>
      {/* Your login form goes here */}
      <CustomInput
        title="Email"
        value={email}
        onChange={setEmail}
        placeholder="Enter your email"
      />

      <CustomInput
        title="password"
        value={password}
        onChange={setPassword}
        placeholder="Enter your email"
      />

      <Link to="/dashboard" className="my-4">
        <Button
          onClick={handleLogin}
          title={isLoading ? "Loading..." : "Login"}
        />
      </Link>
    </div>
  );
};

export default LoginScreen;
