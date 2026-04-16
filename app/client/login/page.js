
"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";

export default function AuthPage() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAuth = async () => {
    if (!email || !password) {
      alert("Fill all fields");
      return;
    }
    try {
      // ✅ FIXED API URL
      const res = await fetch("http://localhost:3333/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log("LOGIN:", data); // 🔍 debug

      if (res.ok) {
        alert("Login Success ✅");
        router.push("/");
      } else {
        alert(data.message || "Login Failed");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden">

      {/* 🔥 Background Blobs */}
      <div className="absolute w-[500px] h-[500px] bg-green-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-blue-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 Floating Shapes */}
      <div className="absolute w-32 h-32 border border-white/10 rounded-xl rotate-12 top-20 left-20"></div>
      <div className="absolute w-24 h-24 border border-white/10 rounded-full bottom-20 right-20"></div>
      <div className="absolute w-40 h-40 border border-white/10 rounded-xl rotate-45 bottom-10 left-10"></div>

      {/* 🔥 Login Card */}
      <div className="relative z-10 w-full flex items-center justify-center p-6">
        <Card className="w-full max-w-md p-8 space-y-6 bg-white/10 backdrop-blur-3xl border border-white/20 text-white shadow-2xl rounded-3xl">

          {/* Heading */}
          <div className="text-center">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
              Welcome Back
            </h1>
            <p className="text-sm text-gray-300 mt-1">
              Access your account
            </p>
          </div>

          {/* Email */}
          <div className="relative group">
            <Mail className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-400" size={18} />
            <input
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition-all text-white placeholder-gray-400"
            />
          </div>

          {/* Password */}
          <div className="relative group">
            <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-green-400" size={18} />
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 border border-white/20 focus:border-green-400 focus:ring-2 focus:ring-green-400 outline-none transition-all text-white placeholder-gray-400"
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-3 text-gray-400 hover:text-green-400"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Button */}
          <Button
            onClick={handleAuth}
            className="w-full bg-gradient-to-r from-green-400 to-emerald-500 hover:opacity-90 text-black font-bold rounded-xl py-3 shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Sign in
          </Button>

          {/* Footer */}
          <p className="text-sm text-center text-gray-300">
            New user?{" "}
            <span
              className="text-green-400 cursor-pointer font-medium hover:underline"
              onClick={() => router.push("/client/register")}
            >
              Create account
            </span>
          </p>

        </Card>
      </div>
    </div>
  );
}