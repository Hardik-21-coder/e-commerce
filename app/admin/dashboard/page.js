"use client";

import { Card } from "@heroui/react";
import {
  LineChart, Line,
  BarChart as RBarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from "recharts";

/*  DATA  */

const defaultImg = "https://cdn-icons-png.flaticon.com/512/3081/3081559.png";

const salesData = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 3000 },
  { name: "Mar", sales: 5000 },
];

const usersData = [
  { name: "Mon", users: 40 },
  { name: "Tue", users: 30 },
  { name: "Wed", users: 50 },
];

const orderData = [
  { name: "Delivered", value: 400 },
  { name: "Pending", value: 300 },
  { name: "Cancelled", value: 200 },
];

const COLORS = ["#22c55e", "#eab308", "#ef4444"];

const topProducts = [
  { name: "iPhone 15", price: "₹80,000", sales: 120 },
  { name: "Nike Shoes", price: "₹5,000", sales: 95 },
  { name: "Smart Watch", price: "₹3,000", sales: 80 },
];

const lowProducts = [
  { name: "Old Phone", price: "₹10,000", sales: 5 },
  { name: "Basic Shoes", price: "₹1,000", sales: 8 },
  { name: "Cover", price: "₹300", sales: 4 },
];

/*  MAIN DASHBOARD  */

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-8 bg-[#0a0a0c] min-h-screen text-white">

      
      <div className="grid md:grid-cols-3 gap-6">
        <StatCard title="Total Users" value="120" color="purple" />
        <StatCard title="Net Sales" value="₹45,000" color="green" />
        <StatCard title="Total Orders" value="32" color="blue" />
      </div>

      {/* CHARTS SECTION */}
      <div className="grid md:grid-cols-3 gap-6">
        <GlassCard title="Sales Trend">
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={salesData}>
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f23', border: 'none', borderRadius: '8px' }} />
              <Line type="monotone" dataKey="sales" stroke="#a855f7" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard title="User Growth">
          <ResponsiveContainer width="100%" height={200}>
            <RBarChart data={usersData}>
              <XAxis dataKey="name" stroke="#666" fontSize={12} />
              <YAxis stroke="#666" fontSize={12} />
              <Tooltip contentStyle={{ backgroundColor: '#1f1f23', border: 'none', borderRadius: '8px' }} />
              <Bar dataKey="users" fill="#ec4899" radius={[6, 6, 0, 0]} />
            </RBarChart>
          </ResponsiveContainer>
        </GlassCard>

        <GlassCard title="Order Status">
          <ResponsiveContainer width="100%" height={200}>
            <PieChart>
              <Pie data={orderData} dataKey="value" innerRadius={60} outerRadius={80} paddingAngle={5}>
                {orderData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend verticalAlign="bottom" height={36}/>
            </PieChart>
          </ResponsiveContainer>
        </GlassCard>
      </div>

      {/* PRODUCTS SECTION */}
      <div className="grid md:grid-cols-2 gap-6">
        <ProductList title="Top Selling" data={topProducts} color="text-green-400" />
        <ProductList title="Low Inventory" data={lowProducts} color="text-red-400" />
      </div>

    </div>
  );
}

/*  UPDATED STAT CARD  */

function StatCard({ title, value, color }) {
  const themes = {
    purple: "from-[#6366f1] to-[#a855f7] border-purple-500/40 shadow-purple-500/20",
    green:  "from-[#10b981] to-[#3b82f6] border-emerald-500/40 shadow-emerald-500/20",
    blue:   "from-[#3b82f6] to-[#2dd4bf] border-blue-500/40 shadow-blue-500/20"
  };

  return (
    <Card className={`relative overflow-hidden p-6 rounded-[24px] bg-gradient-to-br ${themes[color]} 
    border backdrop-blur-lg hover:scale-[1.05] transition-all duration-300 shadow-xl group`}>
      
      {/* Background Decor */}
      <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl group-hover:bg-white/20 transition-all"></div>
      
      <p className="text-white/80 text-xs font-bold uppercase tracking-widest mb-1">
        {title}
      </p>
      
      <h2 className="text-3xl font-black text-white drop-shadow-md">
        {value}
      </h2>

      <div className="mt-4 flex items-center text-xs text-white/60">
        <span className="bg-white/20 px-2 py-1 rounded-lg">Update: Just now</span>
      </div>
    </Card>
  );
}

/*  SUPPORTING COMPONENTS  */

function GlassCard({ title, children }) {
  return (
    <Card className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-2xl
    hover:border-white/20 transition-all shadow-2xl">
      <h2 className="mb-4 font-bold text-gray-200">{title}</h2>
      {children}
    </Card>
  );
}

function ProductList({ title, data, color }) {
  return (
    <Card className="p-6 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl">
      <h2 className={`mb-4 text-lg font-bold ${color}`}>{title}</h2>
      <div className="space-y-4">
        {data.map((item, i) => (
          <div key={i} className="flex justify-between items-center group p-2 hover:bg-white/5 rounded-xl transition">
            <div className="flex gap-4 items-center">
              <img src={defaultImg} className="w-12 h-12 rounded-lg bg-white/10 p-1" alt={item.name} />
              <div>
                <p className="font-semibold text-gray-100">{item.name}</p>
                <p className="text-sm text-gray-500">{item.price}</p>
              </div>
            </div>
            <p className={`font-mono font-bold ${color}`}>{item.sales}</p>
          </div>
        ))}
      </div>
    </Card>
  );
}
