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
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await login(email, password);
    console.log("Login result:", res);

    if (res.success) {
      navigate("/dashboard");
    } else {
      const errorMessage = res.error?.data?.message || "Login failed";
      setError(errorMessage);
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

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <Button title={isLoading ? "Loading..." : "Login"} />
      </form>
    </div>
  );
};

export default LoginScreen;
