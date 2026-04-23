import { useState } from "react";
import { useNavigate } from "react-router";
import { useAppContext } from "../context/AppContext";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";

export default function Login() {
  const navigate = useNavigate();
  const { users, setCurrentUser } = useAppContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find((u) => u.email === email);

    if (user) {
      setCurrentUser(user);
      navigate("/dashboard");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-3xl mb-2">SkillSwap Hub</h1>
          <p className="text-gray-600">Exchange skills, not money</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <label className="block text-sm mb-2">Email</label>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-sm mb-2">Password</label>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your password"
              required
            />
          </div>

          {error && <p className="text-red-500 text-sm">{error}</p>}

          <Button type="submit" className="w-full">
            Login
          </Button>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={() => navigate("/signup")}
                className="text-blue-600 hover:underline"
              >
                Sign Up
              </button>
            </p>
          </div>
        </form>

        <div className="mt-6 p-4 bg-blue-50 rounded text-sm">
          <p className="mb-2">Demo accounts:</p>
          <p>exp@gmail.com</p>
        </div>
      </div>
    </div>
  );
}

