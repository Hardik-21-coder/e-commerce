"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { Button } from "@heroui/react";
import {
  Home, Users, ShoppingCart, Package, Menu, BarChart, Settings, LogOut
} from "lucide-react";

export default function DashboardLayout({ children }) {
  const [open, setOpen] = useState(true);
  const router = useRouter();
  const pathname = usePathname();

  const handleLogout = () => {
    if (confirm("Are you sure you want to logout?")) {
      localStorage.removeItem("token");
      router.push("/admin/login");
    }
  };

  const isActive = (path) => pathname === path;

  return (
    <div className="flex min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-black text-white">

      {/* SIDEBAR */}
      <div className={`transition-all duration-300 ${open ? "w-64" : "w-20"} bg-white/5 backdrop-blur-xl p-4 flex flex-col justify-between`}>

        <div>
          <button onClick={() => setOpen(!open)} className="mb-6">
            <Menu />
          </button>

          <div className="space-y-3">
            <SidebarItem open={open} icon={<Home />} label="Dashboard" active={isActive("/admin/dashboard")} onClick={() => router.push("/admin/dashboard")} />
            <SidebarItem open={open} icon={<Users />} label="Users" active={isActive("/admin/dashboard/users")} onClick={() => router.push("/admin/dashboard/users")} />
            <SidebarItem open={open} icon={<Package />} label="Add Product" active={isActive("/admin/dashboard/add")} onClick={() => router.push("/admin/dashboard/add")} />
            <SidebarItem open={open} icon={<Package />} label="Show Products" active={isActive("/admin/dashboard/show")} onClick={() => router.push("/admin/dashboard/show")} />
          </div>
        </div>

        {/* LOGOUT */}
        <Button
          onClick={handleLogout}
          className="mt-6 w-full flex items-center justify-center gap-2
          bg-gradient-to-r from-red-500 via-pink-500 to-purple-500
          hover:scale-105 hover:shadow-[0_0_25px_rgba(255,0,100,0.6)]
          transition-all duration-300 text-white font-semibold
          rounded-xl py-3"
        >
          <LogOut size={18} />
          {open && "Logout"}
        </Button>

      </div>

      {/* MAIN */}
      <div className="flex-1 p-6">
        <h1 className="text-3xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Admin Dashboard
        </h1>
        {children}
      </div>
    </div>
  );
}

/*  SIDEBAR  */

function SidebarItem({ icon, label, onClick, open, active }) {
  return (
    <div
      onClick={onClick}
      className={`flex items-center ${open ? "gap-3" : "justify-center"} p-2 rounded-xl cursor-pointer transition
      ${active ? "bg-purple-500/20 text-purple-300" : "hover:bg-white/10"}`}
    >
      {icon}
      {open && <span>{label}</span>}
    </div>
  );
}