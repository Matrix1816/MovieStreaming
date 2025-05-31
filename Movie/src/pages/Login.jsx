import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isLogin) {
      login(username || "DemoUser");
      navigate("/");
    } else {
      alert(`Signed up with ${username}, ${email}`);
    }
  };

  return (
    <div
      className="h-screen w-screen flex items-center justify-center bg-cover bg-center relative"
      style={{
        backgroundImage: `url("https://analyticsindiamag.com/wp-content/uploads/2019/05/apps.55787.9007199266246365.687a10a8-4c4a-4a47-8ec5-a95f70d8852d.jpg")`,
      }}
    >
      <div className="absolute inset-0 bg-opacity-70"></div>

      <div className="relative z-10 bg-gray-900 bg-opacity-90 p-8 sm:p-10 rounded-lg w-11/12 sm:w-96 max-w-full shadow-xl border border-gray-700">
        <div className="flex justify-center mb-6 text-white">
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition ${
              isLogin ? "bg-red-600 shadow-lg" : "bg-transparent hover:bg-gray-800"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`px-6 py-2 rounded-t-lg font-semibold transition ${
              !isLogin ? "bg-red-600 shadow-lg" : "bg-transparent hover:bg-gray-800"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 text-white">
          <h2 className="text-2xl font-bold text-center mb-2">
            {isLogin ? "Login" : "Sign Up"}
          </h2>

          <input
            type="text"
            placeholder="Username"
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          />

          {!isLogin && (
            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
            />
          )}

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 rounded bg-gray-800 placeholder-gray-400 focus:outline-none"
          />

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 py-3 rounded font-semibold transition"
          >
            {isLogin ? "Login" : "Sign Up"}
          </button>
        </form>
      </div>
    </div>
  );
}
