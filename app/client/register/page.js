"use client";

import { useState } from "react";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, User } from "lucide-react";
import { signIn } from "next-auth/react";
import { BACKEND_URL } from "@/lib/backend";

export default function RegisterPage() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  // COMMON INPUT STYLE (Hero UI Feel)
  const inputStyle =
    "w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-400 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition duration-300";

  // REGISTER FUNCTION
  const handleRegister = async () => {
    try {
      if (!name || !email || !password || !confirmPassword) {
        alert("All fields are required");
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      if (password.length < 6) {
        alert("Password must be at least 6 characters");
        return;
      }

      setLoading(true);

      const res = await fetch(`${BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Account created successfully ✅");
        router.push("/client/login");
      } else {
        alert(data.message || "Registration failed");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden">

      {/* 🔥 Background */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

      <div className="absolute w-32 h-32 border border-white/10 rounded-xl rotate-12 top-20 left-20"></div>
      <div className="absolute w-24 h-24 border border-white/10 rounded-full bottom-20 right-20"></div>
      <div className="absolute w-40 h-40 border border-white/10 rounded-xl rotate-45 bottom-10 left-10"></div>

      {/* 🔥 FORM */}
      <div className="relative w-[400px] p-8 rounded-3xl backdrop-blur-2xl bg-white/5 border border-white/10 shadow-2xl">

        <h1 className="text-3xl font-bold text-center bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
          Create Your Account
        </h1>

        <p className="text-center text-gray-400 text-sm mt-2">
          Secure Shopping Starts Here
        </p>

        <div className="mt-6 space-y-4">

          {/* Name */}
          <div className="relative group">
            <User className="absolute left-3 top-3 text-gray-400 transition group-focus-within:text-green-400" size={18} />
            <input
              type="text"
              placeholder="Full Name"
              value={name}
              onChange={(e)=>setName(e.target.value)}
              className={inputStyle}
            />
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-3 top-3 text-gray-400 transition group-focus-within:text-blue-400" size={18} />
            <input
              type="email"
              placeholder="Email Address"
              value={email}
              onChange={(e)=>setEmail(e.target.value)}
              className={inputStyle + " focus:border-blue-400 focus:ring-blue-400"}
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock className="absolute left-3 top-3 text-gray-400 transition group-focus-within:text-green-400" size={18} />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              className={inputStyle}
            />
            <button
              onClick={() => setShow(!show)}
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-green-400 transition"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password */}
          <div className="relative group">
            <Lock className="absolute left-3 top-3 text-gray-400 transition group-focus-within:text-green-400" size={18} />
            <input
              type={showConfirm ? "text" : "password"}
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e)=>setConfirmPassword(e.target.value)}
              className={inputStyle}
            />
            <button
              onClick={() => setShowConfirm(!showConfirm)}
              type="button"
              className="absolute right-3 top-3 text-gray-400 hover:text-green-400 transition"
            >
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

        </div>

        <Button
          onClick={handleRegister}
          disabled={loading}
          className="w-full mt-6 bg-gradient-to-r from-green-400 to-blue-500 text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          {loading ? "Creating..." : "Create Account"}
        </Button>

        <div className="flex items-center gap-2 mt-6">
          <div className="flex-1 h-[1px] bg-white/10"></div>
          <span className="text-xs text-gray-400">OR</span>
          <div className="flex-1 h-[1px] bg-white/10"></div>
        </div>

        <p className="text-center text-gray-400 text-sm mt-5">
          Already have an account?{" "}
          <span
            className="text-green-400 cursor-pointer hover:underline"
            onClick={() => router.push("/client/login")}
          >
            Login
          </span>
        </p>

      </div>
    </div>
  );
}
