import { useState } from "react";
import axios from "axios";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";
import loginBg from "../assets/login1.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  const navigate = useNavigate();

  async function handleFunction(e) {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        {
          email,
          password,
        }
      );

      if (response.data.success) {
        login(response.data.user);
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("/employee-dashboard");
        }
      }
    } catch (err) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("Server Error");
      }
    }
  }

  return (
    <div className="min-h-screen flex bg-slate-100 overflow-hidden">
      {/* LEFT SIDE */}
      <div className="relative w-full lg:w-[42%] bg-white flex items-center justify-center overflow-hidden lg:rounded-r-[120px]">

        {/* Decorative Circle */}
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-blue-100 opacity-60"></div>

        {/* Bottom Waves */}
        <svg
          className="absolute bottom-0 left-0 w-full"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#1d4ed8"
            d="M0,256L80,240C160,224,320,192,480,202.7C640,213,800,267,960,261.3C1120,256,1280,192,1360,160L1440,128L1440,320L0,320Z"
          />
          <path
            fill="#2563eb"
            fillOpacity="0.8"
            d="M0,288L80,272C160,256,320,224,480,213.3C640,203,800,213,960,218.7C1120,224,1280,224,1360,224L1440,224L1440,320L0,320Z"
          />
        </svg>

        {/* Login Form */}
        <div className="relative z-10 w-full max-w-md px-8">

          <h1 className="mb-3 text-5xl font-bold text-slate-800">
            Welcome Back
          </h1>

          <p className="mb-10 text-lg text-gray-500">
            Sign in to continue to your account
          </p>

          {error && (
            <div className="mb-6 rounded-lg bg-red-100 p-3 text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleFunction} className="space-y-6">

            <div>
              <label className="mb-2 block text-gray-700 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700 font-medium">
                Password
              </label>

              <input
                type="password"
                placeholder="********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between">

              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border-gray-300"
                />
                Remember Me
              </label>

              <button
                type="button"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </button>

            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-blue-600 py-3 text-white font-semibold shadow-lg transition duration-300 hover:bg-blue-700"
            >
              Login
            </button>

          </form>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative hidden flex-1 lg:block">

        <img
          src={loginBg}
          alt="Login"
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/10"></div>

      </div>
    </div>
  );
}

export default Login;