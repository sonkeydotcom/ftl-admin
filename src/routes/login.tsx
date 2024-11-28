import Button from "../components/ui/custom-button";
import CustomInput from "../components/ui/custom-input";

import { useAppContext } from "../hooks/hooks";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { LoginResult } from "../types/types";

const LoginScreen = () => {
  const navigate = useNavigate();
  const { login, isLoading } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(email, password);
    if (res !== undefined && res.success) {
      // Check if result is not undefined
      navigate("/dashboard");
    }
  };

  return (
    <div className=" h-[450px] flex flex-col max-w-md shadow-lg m-auto content-center items-center justify-center mt-10">
      <h3 className="mx-4 my-4 text-2xl font-semibold"> Welcome back</h3>
      {/* Your login form goes here */}
      <form onSubmit={handleLogin}>
        <CustomInput
          title="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />

        <CustomInput
          title="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your email"
        />

        <Button title={isLoading ? "Loading..." : "Login"} />
      </form>
    </div>
  );
};

export default LoginScreen;
