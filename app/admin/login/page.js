"use client";

import { useState } from "react";
import { Card, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { Mail, Lock, Eye, EyeOff, Shield } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();

  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleAdminLogin = async () => {
    try {
      if (!email || !password) {
        alert("All fields required");
        return;
      }

      //  FIXED API URL
      const res = await fetch("http://localhost:3333/auth/admin/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();
      console.log(data); //  debug

      if (res.ok) {
        //  backend already admin check kare che
        localStorage.setItem("admin", JSON.stringify(data.user));
        alert("Admin Login Success 🔐");
        router.push("/admin/dashboard");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#020617] relative overflow-hidden">

      {/* 🔥 Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-purple-500/30 rounded-full blur-3xl animate-pulse top-[-100px] left-[-100px]"></div>
      <div className="absolute w-[400px] h-[400px] bg-pink-500/30 rounded-full blur-3xl animate-pulse bottom-[-100px] right-[-100px]"></div>

      {/* 🔥 Card */}
      <Card className="w-[400px] p-8 space-y-6 bg-white/5 backdrop-blur-2xl border border-white/10 text-white shadow-2xl rounded-3xl">

        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-2">
            <Shield size={32} className="text-purple-400" />
          </div>

          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            Admin Panel
          </h1>

          <p className="text-sm text-gray-400 mt-1">
            Secure Admin Access
          </p>
        </div>

        {/* Email */}
        <div className="relative group">
          <Mail className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-400" size={18} />
          <input
            type="email"
            placeholder="Admin Email"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            className="w-full pl-10 pr-3 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
          />
        </div>

        {/* Password */}
        <div className="relative group">
          <Lock className="absolute left-3 top-3 text-gray-400 group-focus-within:text-purple-400" size={18} />

          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            className="w-full pl-10 pr-10 py-3 rounded-xl bg-white/10 border border-white/10 focus:border-purple-400 focus:ring-2 focus:ring-purple-400 outline-none transition"
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-3 top-3 text-gray-400 hover:text-purple-400"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        {/* Button */}
        <Button
          onClick={handleAdminLogin}
          className="w-full bg-gradient-to-r from-purple-400 to-pink-500 text-black font-semibold py-3 rounded-xl hover:opacity-90 transition"
        >
          Login as Admin
        </Button>

        {/* Footer */}
        <p className="text-center text-gray-400 text-sm">
          Not an admin?{" "}
          <span
            className="text-purple-400 cursor-pointer hover:underline"
            onClick={() => router.push("/login")}
          >
            Go to User Login
          </span>
        </p>

      </Card>
    </div>
  );
}