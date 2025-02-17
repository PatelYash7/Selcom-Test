import { useState } from "react";
import { login, register } from "../utils/api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const handleRegister = async () => {
    setLoading(true);
    try {
      const response = await register(email, password);
      localStorage.setItem("token", response.token);
      window.location.assign("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage("User Already Exsist. Try Login!!");
    }
  };

  const handleLogin = async () => {
    setLoading(true);
    try {
      const response = await login(email, password);
      localStorage.setItem("token", response.token);
      window.location.assign("/");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setMessage("Invalid Credentials, If new User please Register");
    }
  };
  const isValidEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const isEmailValid = isValidEmail(email);
  return (
    <div className="flex justify-center items-center min-h-screen bg-slate-200">
      <div className="bg-white shadow-lg border rounded-lg p-8 w-96">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <input
          type="email"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <div className="flex gap-4">
          {!loading && (
            <>
              <button
                onClick={handleLogin}
                disabled={!isEmailValid}
                className={`w-full py-2 rounded-lg transition ${
                  isEmailValid
                    ? "bg-blue-500 text-white hover:bg-blue-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Login
              </button>
              <button
                onClick={handleRegister}
                disabled={!isEmailValid}
                className={`w-full py-2 rounded-lg transition ${
                  isEmailValid
                    ? "bg-red-500 text-white hover:bg-red-600"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                Register
              </button>
            </>
          )}
        </div>
        <p className="text-red-600 text-sm pt-8">{message}</p>
      </div>
    </div>
  );
};

export default Login;
