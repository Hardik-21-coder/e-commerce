// // // // "use client";

// // // // import { useState } from "react";
// // // // import { Card, Button } from "@heroui/react";
// // // // import {
// // // //   Home, Users, ShoppingCart, Package, Menu
// // // // } from "lucide-react";
// // // // import {
// // // //   LineChart, Line,
// // // //   BarChart, Bar,
// // // //   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
// // // // } from "recharts";

// // // // const salesData = [
// // // //   { name: "Jan", sales: 4000 },
// // // //   { name: "Feb", sales: 3000 },
// // // //   { name: "Mar", sales: 5000 },
// // // //   { name: "Apr", sales: 4000 },
// // // //   { name: "May", sales: 6000 },
// // // // ];

// // // // const usersData = [
// // // //   { name: "Mon", users: 40 },
// // // //   { name: "Tue", users: 30 },
// // // //   { name: "Wed", users: 50 },
// // // //   { name: "Thu", users: 35 },
// // // //   { name: "Fri", users: 60 },
// // // // ];

// // // // export default function AdminDashboard() {
// // // //   const [active, setActive] = useState("dashboard");
// // // //   const [open, setOpen] = useState(true);

// // // //   return (
// // // //     <div className="flex min-h-screen bg-[#020617] text-white">
// // // //       {/* Sidebar */}
// // // //       <div className={`bg-white/5 border-r border-white/10 p-4 transition-all ${open ? "w-64" : "w-20"}`}>
// // // //         <button onClick={() => setOpen(!open)} className="mb-6">
// // // //           <Menu />
// // // //         </button>

// // // //         <div className="space-y-4">
// // // //           <SidebarItem icon={<Home />} label="Dashboard" active={active === "dashboard"} onClick={() => setActive("dashboard")} />
// // // //           <SidebarItem icon={<Users />} label="Users" active={active === "users"} onClick={() => setActive("users")} />
// // // //           <SidebarItem icon={<Package />} label="Products" active={active === "products"} onClick={() => setActive("products")} />
// // // //           <SidebarItem icon={<ShoppingCart />} label="Orders" active={active === "orders"} onClick={() => setActive("orders")} />
// // // //         </div>
// // // //       </div>

// // // //       {/* Main */}
// // // //       <div className="flex-1 p-6">
// // // //         {/* Navbar */}
// // // //         <div className="flex justify-between items-center mb-6">
// // // //           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// // // //           <Button className="bg-linear-to-r from-purple-400 to-pink-500 text-black">Logout</Button>
// // // //         </div>

// // // //         {/* Content */}
// // // //         {active === "dashboard" && <DashboardHome />}
// // // //         {active === "users" && <UsersPage />}
// // // //         {active === "products" && <ProductsPage />}
// // // //         {active === "orders" && <OrdersPage />}
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function SidebarItem({ icon, label, active, onClick }) {
// // // //   return (
// // // //     <div
// // // //       onClick={onClick}
// // // //       className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${active ? "bg-purple-500/30" : "hover:bg-white/10"}`}
// // // //     >
// // // //       {icon}
// // // //       <span>{label}</span>
// // // //     </div>
// // // //   );
// // // // }

// // // // function DashboardHome() {
// // // //   return (
// // // //     <div className="space-y-6">
// // // //       {/* Stats */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // // //         <StatCard title="Total Users" value="120" />
// // // //         <StatCard title="Total Sales" value="₹45,000" />
// // // //         <StatCard title="Orders" value="32" />
// // // //       </div>

// // // //       {/* Graphs */}
// // // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // // //         <Card className="p-4 bg-white/5 border border-white/10">
// // // //           <h2 className="mb-4">Sales Overview</h2>
// // // //           <ResponsiveContainer width="100%" height={250}>
// // // //             <LineChart data={salesData}>
// // // //               <CartesianGrid strokeDasharray="3 3" />
// // // //               <XAxis dataKey="name" />
// // // //               <YAxis />
// // // //               <Tooltip />
// // // //               <Line type="monotone" dataKey="sales" stroke="#a855f7" />
// // // //             </LineChart>
// // // //           </ResponsiveContainer>
// // // //         </Card>

// // // //         <Card className="p-4 bg-white/5 border border-white/10">
// // // //           <h2 className="mb-4">User Growth</h2>
// // // //           <ResponsiveContainer width="100%" height={250}>
// // // //             <BarChart data={usersData}>
// // // //               <CartesianGrid strokeDasharray="3 3" />
// // // //               <XAxis dataKey="name" />
// // // //               <YAxis />
// // // //               <Tooltip />
// // // //               <Bar dataKey="users" fill="#ec4899" />
// // // //             </BarChart>
// // // //           </ResponsiveContainer>
// // // //         </Card>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function StatCard({ title, value }) {
// // // //   return (
// // // //     <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
// // // //       <h2 className="text-gray-400">{title}</h2>
// // // //       <p className="text-2xl font-bold mt-2">{value}</p>
// // // //     </Card>
// // // //   );
// // // // }

// // // // function UsersPage() {
// // // //   return (
// // // //     <Card className="p-6 bg-white/5">
// // // //       <h2 className="text-xl mb-4">Users List</h2>
// // // //       <p>Show users here...</p>
// // // //     </Card>
// // // //   );
// // // // }

// // // // function ProductsPage() {
// // // //   return (
// // // //     <Card className="p-6 bg-white/5">
// // // //       <h2 className="text-xl mb-4">Add Product</h2>
// // // //       <p>Product form here...</p>
// // // //     </Card>
// // // //   );
// // // // }

// // // // function OrdersPage() {
// // // //   return (
// // // //     <Card className="p-6 bg-white/5">
// // // //       <h2 className="text-xl mb-4">Orders</h2>
// // // //       <p>Orders list here...</p>
// // // //     </Card>
// // // //   );
// // // // }

// // // "use client";

// // // import { useState } from "react";
// // // import { Card, Button } from "@heroui/react";
// // // import {
// // //   Home, Users, ShoppingCart, Package, Menu
// // // } from "lucide-react";
// // // import {
// // //   LineChart, Line,
// // //   BarChart, Bar,
// // //   AreaChart, Area,
// // //   PieChart, Pie, Cell,
// // //   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
// // // } from "recharts";

// // // const salesData = [
// // //   { name: "Jan", sales: 4000 },
// // //   { name: "Feb", sales: 3000 },
// // //   { name: "Mar", sales: 5000 },
// // //   { name: "Apr", sales: 4000 },
// // //   { name: "May", sales: 6000 },
// // // ];

// // // const usersData = [
// // //   { name: "Mon", users: 40 },
// // //   { name: "Tue", users: 30 },
// // //   { name: "Wed", users: 50 },
// // //   { name: "Thu", users: 35 },
// // //   { name: "Fri", users: 60 },
// // // ];

// // // const revenueData = [
// // //   { name: "Week 1", revenue: 10000 },
// // //   { name: "Week 2", revenue: 15000 },
// // //   { name: "Week 3", revenue: 12000 },
// // //   { name: "Week 4", revenue: 18000 },
// // // ];

// // // const orderData = [
// // //   { name: "Delivered", value: 400 },
// // //   { name: "Pending", value: 300 },
// // //   { name: "Cancelled", value: 200 },
// // // ];

// // // const COLORS = ["#a855f7", "#ec4899", "#22c55e"];

// // // export default function AdminDashboard() {
// // //   const [active, setActive] = useState("dashboard");
// // //   const [open, setOpen] = useState(true);

// // //   return (
// // //     <div className="flex min-h-screen bg-[#020617] text-white">
// // //       {/* Sidebar */}
// // //       <div className={`bg-white/5 border-r border-white/10 p-4 transition-all ${open ? "w-64" : "w-20"}`}>
// // //         <button onClick={() => setOpen(!open)} className="mb-6">
// // //           <Menu />
// // //         </button>

// // //         <div className="space-y-4">
// // //           <SidebarItem icon={<Home />} label="Dashboard" active={active === "dashboard"} onClick={() => setActive("dashboard")} />
// // //           <SidebarItem icon={<Users />} label="Users" active={active === "users"} onClick={() => setActive("users")} />
// // //           <SidebarItem icon={<Package />} label="Products" active={active === "products"} onClick={() => setActive("products")} />
// // //           <SidebarItem icon={<ShoppingCart />} label="Orders" active={active === "orders"} onClick={() => setActive("orders")} />
// // //         </div>
// // //       </div>

// // //       {/* Main */}
// // //       <div className="flex-1 p-6">
// // //         {/* Navbar */}
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// // //           <Button className="bg-linear-to-r from-purple-400 to-pink-500 text-black">Logout</Button>
// // //         </div>

// // //         {/* Content */}
// // //         {active === "dashboard" && <DashboardHome />}
// // //         {active === "users" && <UsersPage />}
// // //         {active === "products" && <ProductsPage />}
// // //         {active === "orders" && <OrdersPage />}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SidebarItem({ icon, label, active, onClick }) {
// // //   return (
// // //     <div
// // //       onClick={onClick}
// // //       className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${active ? "bg-purple-500/30" : "hover:bg-white/10"}`}
// // //     >
// // //       {icon}
// // //       <span>{label}</span>
// // //     </div>
// // //   );
// // // }

// // // function DashboardHome() {
// // //   return (
// // //     <div className="space-y-6">
// // //       {/* Stats */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         <StatCard title="Total Users" value="120" />
// // //         <StatCard title="Total Sales" value="₹45,000" />
// // //         <StatCard title="Orders" value="32" />
// // //       </div>

// // //       {/* Charts Row 1 */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Sales Overview</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <LineChart data={salesData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Line type="monotone" dataKey="sales" stroke="#a855f7" />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">User Growth</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <BarChart data={usersData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Bar dataKey="users" fill="#ec4899" />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </Card>
// // //       </div>

// // //       {/* Charts Row 2 */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Revenue Trend</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <AreaChart data={revenueData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Area type="monotone" dataKey="revenue" stroke="#22c55e" fill="#22c55e" />
// // //             </AreaChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Order Status</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <PieChart>
// // //               <Pie data={orderData} dataKey="value" outerRadius={80} label>
// // //                 {orderData.map((entry, index) => (
// // //                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
// // //                 ))}
// // //               </Pie>
// // //               <Tooltip />
// // //               <Legend />
// // //             </PieChart>
// // //           </ResponsiveContainer>
// // //         </Card>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function StatCard({ title, value }) {
// // //   return (
// // //     <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
// // //       <h2 className="text-gray-400">{title}</h2>
// // //       <p className="text-2xl font-bold mt-2">{value}</p>
// // //     </Card>
// // //   );
// // // }

// // // function UsersPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Users List</h2>
// // //       <p>Show users here...</p>
// // //     </Card>
// // //   );
// // // }

// // // function ProductsPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Add Product</h2>
// // //       <p>Product form here...</p>
// // //     </Card>
// // //   );
// // // }

// // // function OrdersPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Orders</h2>
// // //       <p>Orders list here...</p>
// // //     </Card>
// // //   );
// // // }



// // // "use client";

// // // import { useState } from "react";
// // // import { Card, Button } from "@heroui/react";
// // // import {
// // //   Home, Users, ShoppingCart, Package, Menu
// // // } from "lucide-react";
// // // import {
// // //   LineChart, Line,
// // //   BarChart, Bar,
// // //   AreaChart, Area,
// // //   PieChart, Pie, Cell,
// // //   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
// // // } from "recharts";

// // // const salesData = [
// // //   { name: "Jan", sales: 4000 },
// // //   { name: "Feb", sales: 3000 },
// // //   { name: "Mar", sales: 5000 },
// // //   { name: "Apr", sales: 4000 },
// // //   { name: "May", sales: 6000 },
// // // ];

// // // const usersData = [
// // //   { name: "Mon", users: 40 },
// // //   { name: "Tue", users: 30 },
// // //   { name: "Wed", users: 50 },
// // //   { name: "Thu", users: 35 },
// // //   { name: "Fri", users: 60 },
// // // ];

// // // const revenueData = [
// // //   { name: "Week 1", revenue: 10000 },
// // //   { name: "Week 2", revenue: 15000 },
// // //   { name: "Week 3", revenue: 12000 },
// // //   { name: "Week 4", revenue: 18000 },
// // // ];

// // // const orderData = [
// // //   { name: "Delivered", value: 400 },
// // //   { name: "Pending", value: 300 },
// // //   { name: "Cancelled", value: 200 },
// // // ];

// // // // 🔥 NEW USER GRAPHS DATA
// // // const topUsers = [
// // //   { name: "User1", orders: 50 },
// // //   { name: "User2", orders: 45 },
// // //   { name: "User3", orders: 40 },
// // //   { name: "User4", orders: 38 },
// // //   { name: "User5", orders: 35 },
// // //   { name: "User6", orders: 30 },
// // //   { name: "User7", orders: 28 },
// // //   { name: "User8", orders: 25 },
// // //   { name: "User9", orders: 22 },
// // //   { name: "User10", orders: 20 },
// // // ];

// // // const lowUsers = [
// // //   { name: "UserA", orders: 1 },
// // //   { name: "UserB", orders: 2 },
// // //   { name: "UserC", orders: 2 },
// // //   { name: "UserD", orders: 3 },
// // //   { name: "UserE", orders: 3 },
// // //   { name: "UserF", orders: 4 },
// // //   { name: "UserG", orders: 4 },
// // //   { name: "UserH", orders: 5 },
// // //   { name: "UserI", orders: 5 },
// // //   { name: "UserJ", orders: 6 },
// // // ];

// // // const COLORS = ["#a855f7", "#ec4899", "#22c55e"];

// // // export default function AdminDashboard() {
// // //   const [active, setActive] = useState("dashboard");
// // //   const [open, setOpen] = useState(true);

// // //   return (
// // //     <div className="flex min-h-screen bg-[#020617] text-white">
// // //       {/* Sidebar */}
// // //       <div className={`bg-white/5 border-r border-white/10 p-4 transition-all ${open ? "w-64" : "w-20"}`}>
// // //         <button onClick={() => setOpen(!open)} className="mb-6">
// // //           <Menu />
// // //         </button>

// // //         <div className="space-y-4">
// // //           <SidebarItem icon={<Home />} label="Dashboard" active={active === "dashboard"} onClick={() => setActive("dashboard")} />
// // //           <SidebarItem icon={<Users />} label="Users" active={active === "users"} onClick={() => setActive("users")} />
// // //           <SidebarItem icon={<Package />} label="Products" active={active === "products"} onClick={() => setActive("products")} />
// // //           <SidebarItem icon={<ShoppingCart />} label="Orders" active={active === "orders"} onClick={() => setActive("orders")} />
// // //         </div>
// // //       </div>

// // //       {/* Main */}
// // //       <div className="flex-1 p-6">
// // //         {/* Navbar */}
// // //         <div className="flex justify-between items-center mb-6">
// // //           <h1 className="text-2xl font-bold">Admin Dashboard</h1>
// // //           <Button className="bg-linear-to-r from-purple-400 to-pink-500 text-black">Logout</Button>
// // //         </div>

// // //         {/* Content */}
// // //         {active === "dashboard" && <DashboardHome />}
// // //         {active === "users" && <UsersPage />}
// // //         {active === "products" && <ProductsPage />}
// // //         {active === "orders" && <OrdersPage />}
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function SidebarItem({ icon, label, active, onClick }) {
// // //   return (
// // //     <div
// // //       onClick={onClick}
// // //       className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition ${active ? "bg-purple-500/30" : "hover:bg-white/10"}`}
// // //     >
// // //       {icon}
// // //       <span>{label}</span>
// // //     </div>
// // //   );
// // // }

// // // function DashboardHome() {
// // //   return (
// // //     <div className="space-y-6">
// // //       {/* Stats */}
// // //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// // //         <StatCard title="Total Users" value="120" />
// // //         <StatCard title="Total Sales" value="₹45,000" />
// // //         <StatCard title="Orders" value="32" />
// // //       </div>

// // //       {/* Charts Row 1 */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Sales Overview</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <LineChart data={salesData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Line type="monotone" dataKey="sales" stroke="#a855f7" />
// // //             </LineChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">User Growth</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <BarChart data={usersData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Bar dataKey="users" fill="#ec4899" />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </Card>
// // //       </div>

// // //       {/* Charts Row 2 */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Revenue Trend</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <AreaChart data={revenueData}>
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis dataKey="name" />
// // //               <YAxis />
// // //               <Tooltip />
// // //               <Area type="monotone" dataKey="revenue" stroke="#22c55e" fill="#22c55e" />
// // //             </AreaChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Order Status</h2>
// // //           <ResponsiveContainer width="100%" height={250}>
// // //             <PieChart>
// // //               <Pie data={orderData} dataKey="value" outerRadius={80} label>
// // //                 {orderData.map((entry, index) => (
// // //                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
// // //                 ))}
// // //               </Pie>
// // //               <Tooltip />
// // //               <Legend />
// // //             </PieChart>
// // //           </ResponsiveContainer>
// // //         </Card>
// // //       </div>

// // //       {/* 🔥 NEW USER GRAPHS */}
// // //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Top 10 Users</h2>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <BarChart data={topUsers} layout="vertical">
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis type="number" />
// // //               <YAxis dataKey="name" type="category" />
// // //               <Tooltip />
// // //               <Bar dataKey="orders" fill="#a855f7" />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </Card>

// // //         <Card className="p-4 bg-white/5 border border-white/10">
// // //           <h2 className="mb-4">Low Activity Users</h2>
// // //           <ResponsiveContainer width="100%" height={300}>
// // //             <BarChart data={lowUsers} layout="vertical">
// // //               <CartesianGrid strokeDasharray="3 3" />
// // //               <XAxis type="number" />
// // //               <YAxis dataKey="name" type="category" />
// // //               <Tooltip />
// // //               <Bar dataKey="orders" fill="#ef4444" />
// // //             </BarChart>
// // //           </ResponsiveContainer>
// // //         </Card>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function StatCard({ title, value }) {
// // //   return (
// // //     <Card className="p-6 bg-white/5 border border-white/10 rounded-2xl">
// // //       <h2 className="text-gray-400">{title}</h2>
// // //       <p className="text-2xl font-bold mt-2">{value}</p>
// // //     </Card>
// // //   );
// // // }

// // // function UsersPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Users List</h2>
// // //       <p>Show users here...</p>
// // //     </Card>
// // //   );
// // // }

// // // function ProductsPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Add Product</h2>
// // //       <p>Product form here...</p>
// // //     </Card>
// // //   );
// // // }

// // // function OrdersPage() {
// // //   return (
// // //     <Card className="p-6 bg-white/5">
// // //       <h2 className="text-xl mb-4">Orders</h2>
// // //       <p>Orders list here...</p>
// // //     </Card>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { Card, Button } from "@heroui/react";
// // import {
// //   Home, Users, ShoppingCart, Package, Menu
// // } from "lucide-react";
// // import {
// //   LineChart, Line,
// //   BarChart, Bar,
// //   AreaChart, Area,
// //   PieChart, Pie, Cell,
// //   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
// // } from "recharts";

// // /* ================= DATA ================= */

// // const defaultImg =
// //   "https://cdn-icons-png.flaticon.com/512/3081/3081559.png";

// // const salesData = [
// //   { name: "Jan", sales: 4000 },
// //   { name: "Feb", sales: 3000 },
// //   { name: "Mar", sales: 5000 },
// //   { name: "Apr", sales: 4000 },
// //   { name: "May", sales: 6000 },
// // ];

// // const usersData = [
// //   { name: "Mon", users: 40 },
// //   { name: "Tue", users: 30 },
// //   { name: "Wed", users: 50 },
// //   { name: "Thu", users: 35 },
// //   { name: "Fri", users: 60 },
// // ];

// // const revenueData = [
// //   { name: "Week 1", revenue: 10000 },
// //   { name: "Week 2", revenue: 15000 },
// //   { name: "Week 3", revenue: 12000 },
// //   { name: "Week 4", revenue: 18000 },
// // ];

// // const orderData = [
// //   { name: "Delivered", value: 400 },
// //   { name: "Pending", value: 300 },
// //   { name: "Cancelled", value: 200 },
// // ];

// // const COLORS = ["#a855f7", "#ec4899", "#22c55e"];

// // /* 🔥 TOP PRODUCTS */
// // const topProducts = [
// //   { name: "iPhone 15", price: "₹80,000", sales: 120, image: "" },
// //   { name: "Nike Shoes", price: "₹5,000", sales: 95, image: "" },
// //   { name: "Smart Watch", price: "₹3,000", sales: 80, image: "" },
// // ];

// // /* 📉 LOW PRODUCTS */
// // const lowProducts = [
// //   { name: "Old Phone", price: "₹10,000", sales: 5, image: "" },
// //   { name: "Basic Shoes", price: "₹1,000", sales: 8, image: "" },
// //   { name: "Cover", price: "₹300", sales: 4, image: "" },
// // ];

// // /* ================= MAIN ================= */

// // export default function AdminDashboard() {
// //   const [active, setActive] = useState("dashboard");
// //   const [open, setOpen] = useState(true);

// //   return (
// //     <div className="flex min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-black text-white">

// //       {/* SIDEBAR */}
// //       <div className={`transition-all duration-300 ${open ? "w-64" : "w-20"}
// //         backdrop-blur-xl bg-white/5 border-r border-white/10 p-4`}>

// //         <button onClick={() => setOpen(!open)} className="mb-6">
// //           <Menu />
// //         </button>

// //         <div className="space-y-4">
// //           <SidebarItem icon={<Home />} label="Dashboard" active={active === "dashboard"} onClick={() => setActive("dashboard")} />
// //           <SidebarItem icon={<Users />} label="Users" active={active === "users"} onClick={() => setActive("users")} />
// //           <SidebarItem icon={<Package />} label="Products" active={active === "products"} onClick={() => setActive("products")} />
// //           <SidebarItem icon={<ShoppingCart />} label="Orders" active={active === "orders"} onClick={() => setActive("orders")} />
// //         </div>
// //       </div>

// //       {/* MAIN */}
// //       <div className="flex-1 p-6">

// //         {/* NAVBAR */}
// //         <div className="flex justify-between items-center mb-6">
// //           <h1 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
// //             Admin Dashboard
// //           </h1>

// //           <Button className="bg-linear-to-r from-purple-400 to-pink-500 text-black">
// //             Logout
// //           </Button>
// //         </div>

// //         {active === "dashboard" && <DashboardHome />}
// //         {active === "users" && <UsersPage />}
// //         {active === "products" && <ProductsPage />}
// //         {active === "orders" && <OrdersPage />}
// //       </div>
// //     </div>
// //   );
// // }

// // /* ================= SIDEBAR ================= */

// // function SidebarItem({ icon, label, active, onClick }) {
// //   return (
// //     <div
// //       onClick={onClick}
// //       className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
// //       ${active ? "bg-purple-500/30" : "hover:bg-white/10"}`}
// //     >
// //       {icon}
// //       <span className="hidden md:block">{label}</span>
// //     </div>
// //   );
// // }

// // /* ================= DASHBOARD ================= */

// // function DashboardHome() {
// //   return (
// //     <div className="space-y-6">

// //       {/* STATS */}
// //       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
// //         <StatCard title="Total Users" value="120" color="purple" />
// //         <StatCard title="Total Sales" value="₹45,000" color="green" />
// //         <StatCard title="Orders" value="32" color="blue" />
// //       </div>

// //       {/* CHARTS */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <GlassCard title="Sales Overview">
// //           <ResponsiveContainer width="100%" height={250}>
// //             <LineChart data={salesData}>
// //               <CartesianGrid stroke="#ffffff10" />
// //               <XAxis dataKey="name" stroke="#aaa" />
// //               <YAxis stroke="#aaa" />
// //               <Tooltip />
// //               <Line type="monotone" dataKey="sales" stroke="#a855f7" strokeWidth={3} />
// //             </LineChart>
// //           </ResponsiveContainer>
// //         </GlassCard>

// //         <GlassCard title="User Growth">
// //           <ResponsiveContainer width="100%" height={250}>
// //             <BarChart data={usersData}>
// //               <CartesianGrid stroke="#ffffff10" />
// //               <XAxis dataKey="name" stroke="#aaa" />
// //               <YAxis stroke="#aaa" />
// //               <Tooltip />
// //               <Bar dataKey="users" fill="#ec4899" radius={[10,10,0,0]} />
// //             </BarChart>
// //           </ResponsiveContainer>
// //         </GlassCard>
// //       </div>

// //       {/* PRODUCTS */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
// //         <TopProducts />
// //         <LowProducts />
// //       </div>

// //     </div>
// //   );
// // }

// // /* ================= COMMON ROW ================= */

// // function ProductRow({ item, color }) {
// //   return (
// //     <div className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition">

// //       <div className="flex items-center gap-3">
// //         <img
// //           src={item.image || defaultImg}
// //           onError={(e) => (e.target.src = defaultImg)}
// //           className="w-12 h-12 rounded-lg object-cover"
// //         />
// //         <div>
// //           <p>{item.name}</p>
// //           <p className="text-sm text-gray-400">{item.price}</p>
// //         </div>
// //       </div>

// //       <p className={`font-bold ${color}`}>
// //         {item.sales}
// //       </p>
// //     </div>
// //   );
// // }

// // /* ================= TOP PRODUCTS ================= */

// // function TopProducts() {
// //   return (
// //     <Card className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
// //       <h2 className="text-lg font-semibold mb-4 text-green-400">
// //         🔥 Top Products
// //       </h2>

// //       {topProducts.map((item, i) => (
// //         <ProductRow key={i} item={item} color="text-green-400" />
// //       ))}
// //     </Card>
// //   );
// // }

// // /* ================= LOW PRODUCTS ================= */

// // function LowProducts() {
// //   return (
// //     <Card className="p-5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
// //       <h2 className="text-lg font-semibold mb-4 text-red-400">
// //         📉 Low Products
// //       </h2>

// //       {lowProducts.map((item, i) => (
// //         <ProductRow key={i} item={item} color="text-red-400" />
// //       ))}
// //     </Card>
// //   );
// // }

// // /* ================= CARDS ================= */

// // function GlassCard({ title, children }) {
// //   return (
// //     <Card className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
// //       <h2 className="mb-4 text-lg font-semibold">{title}</h2>
// //       {children}
// //     </Card>
// //   );
// // }

// // function StatCard({ title, value, color }) {
// //   const colors = {
// //     purple: "from-purple-500/30 to-pink-500/20",
// //     green: "from-green-500/30 to-emerald-500/20",
// //     blue: "from-blue-500/30 to-cyan-500/20",
// //   };

// //   return (
// //     <Card className={`p-6 rounded-2xl border border-white/10 backdrop-blur-xl
// //       bg-linear-to-br ${colors[color]} shadow-lg`}>
// //       <h2 className="text-gray-300 text-sm">{title}</h2>
// //       <p className="text-3xl font-bold mt-2">{value}</p>
// //     </Card>
// //   );
// // }

// // /* ================= OTHER PAGES ================= */

// // function UsersPage() {
// //   return <Card className="p-6 bg-white/5">Users Page</Card>;
// // }

// // function ProductsPage() {
// //   return <Card className="p-6 bg-white/5">Products Page</Card>;
// // }

// // function OrdersPage() {
// //   return <Card className="p-6 bg-white/5">Orders Page</Card>;
// // }


// "use client";

// import { useState } from "react";
// import { Card, Button } from "@heroui/react";
// import {
//   Home, Users, ShoppingCart, Package, Menu
// } from "lucide-react";
// import {
//   LineChart, Line,
//   BarChart, Bar,
//   PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
// } from "recharts";

// /* ================= DATA ================= */

// const defaultImg =
//   "https://cdn-icons-png.flaticon.com/512/3081/3081559.png";

// const salesData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
//   { name: "Apr", sales: 4000 },
//   { name: "May", sales: 6000 },
// ];

// const usersData = [
//   { name: "Mon", users: 40 },
//   { name: "Tue", users: 30 },
//   { name: "Wed", users: 50 },
//   { name: "Thu", users: 35 },
//   { name: "Fri", users: 60 },
// ];

// const orderData = [
//   { name: "Delivered", value: 400 },
//   { name: "Pending", value: 300 },
//   { name: "Cancelled", value: 200 },
// ];

// const COLORS = ["#22c55e", "#eab308", "#ef4444"];

// /* 🔥 TOP PRODUCTS (8) */
// const topProducts = [
//   { name: "iPhone 15", price: "₹80,000", sales: 120 },
//   { name: "Nike Shoes", price: "₹5,000", sales: 95 },
//   { name: "Smart Watch", price: "₹3,000", sales: 80 },
//   { name: "Headphones", price: "₹2,500", sales: 70 },
//   { name: "Laptop", price: "₹70,000", sales: 65 },
//   { name: "Camera", price: "₹50,000", sales: 60 },
//   { name: "Tablet", price: "₹20,000", sales: 55 },
//   { name: "Speaker", price: "₹4,000", sales: 50 },
// ];

// /* 📉 LOW PRODUCTS (8) */
// const lowProducts = [
//   { name: "Old Phone", price: "₹10,000", sales: 5 },
//   { name: "Basic Shoes", price: "₹1,000", sales: 8 },
//   { name: "Cover", price: "₹300", sales: 4 },
//   { name: "Mouse", price: "₹400", sales: 6 },
//   { name: "Keyboard", price: "₹700", sales: 7 },
//   { name: "Charger", price: "₹200", sales: 3 },
//   { name: "Cable", price: "₹150", sales: 2 },
//   { name: "Pen Drive", price: "₹500", sales: 5 },
// ];

// /* ================= MAIN ================= */

// export default function AdminDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-linear-to-br from-[#020617] via-[#0f172a] to-black text-white">

//       {/* SIDEBAR */}
//       <div className={`transition-all duration-300 ${open ? "w-64" : "w-20"}
//         backdrop-blur-xl bg-white/5 border-r border-white/10 p-4`}>

//         <button onClick={() => setOpen(!open)} className="mb-6">
//           <Menu />
//         </button>

//         <div className="space-y-4">
//           <SidebarItem icon={<Home />} label="Dashboard" active={active === "dashboard"} onClick={() => setActive("dashboard")} />
//           <SidebarItem icon={<Users />} label="Users" active={active === "users"} onClick={() => setActive("users")} />
//           <SidebarItem icon={<Package />} label="Products" active={active === "products"} onClick={() => setActive("products")} />
//           <SidebarItem icon={<ShoppingCart />} label="Orders" active={active === "orders"} onClick={() => setActive("orders")} />
//         </div>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-6">

//         {/* NAVBAR */}
//         <div className="flex justify-between items-center mb-6">
//           <h1 className="text-3xl font-bold bg-linear-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
//             Admin Dashboard
//           </h1>

//           <Button className="bg-linear-to-r from-purple-400 to-pink-500 text-black">
//             Logout
//           </Button>
//         </div>

//         {active === "dashboard" && <DashboardHome />}
//         {active === "users" && <UsersPage />}
//         {active === "products" && <ProductsPage />}
//         {active === "orders" && <OrdersPage />}
//       </div>
//     </div>
//   );
// }

// /* ================= SIDEBAR ================= */

// function SidebarItem({ icon, label, active, onClick }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center gap-3 p-3 rounded-xl cursor-pointer transition
//       ${active ? "bg-purple-500/30" : "hover:bg-white/10"}`}
//     >
//       {icon}
//       <span className="hidden md:block">{label}</span>
//     </div>
//   );
// }

// /* ================= DASHBOARD ================= */

// function DashboardHome() {
//   return (
//     <div className="space-y-6">

//       {/* STATS */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <StatCard title="Total Users" value="120" color="purple" />
//         <StatCard title="Total Sales" value="₹45,000" color="green" />
//         <StatCard title="Orders" value="32" color="blue" />
//       </div>

//       {/* CHARTS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

//         {/* SALES */}
//         <GlassCard title="Sales Overview">
//           <ResponsiveContainer width="100%" height={250}>
//             <LineChart data={salesData}>
//               <CartesianGrid stroke="#ffffff10" />
//               <XAxis dataKey="name" stroke="#aaa" />
//               <YAxis stroke="#aaa" />
//               <Tooltip />
//               <Line type="monotone" dataKey="sales" stroke="#a855f7" strokeWidth={3} />
//             </LineChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         {/* USERS */}
//         <GlassCard title="User Growth">
//           <ResponsiveContainer width="100%" height={250}>
//             <BarChart data={usersData}>
//               <CartesianGrid stroke="#ffffff10" />
//               <XAxis dataKey="name" stroke="#aaa" />
//               <YAxis stroke="#aaa" />
//               <Tooltip />
//               <Bar dataKey="users" fill="#ec4899" radius={[10,10,0,0]} />
//             </BarChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         {/* PIE CHART */}
//         <GlassCard title="Order Status">
//           <ResponsiveContainer width="100%" height={250}>
//             <PieChart>
//               <Pie
//                 data={orderData}
//                 dataKey="value"
//                 outerRadius={80}
//                 innerRadius={40}
//                 paddingAngle={5}
//                 label
//               >
//                 {orderData.map((entry, index) => (
//                   <Cell key={index} fill={COLORS[index % COLORS.length]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </GlassCard>

//       </div>

//       {/* PRODUCTS */}
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <ProductList title="🏆 Top Products" data={topProducts} color="text-green-400" />
//         <ProductList title="📉 Low Products" data={lowProducts} color="text-red-400" />
//       </div>

//     </div>
//   );
// }

// /* ================= PRODUCT LIST ================= */

// function ProductList({ title, data, color }) {
//   return (
//     <Card className="p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
//       <h2 className={`mb-4 text-lg font-semibold ${color}`}>
//         {title}
//       </h2>

//       {data.map((item, i) => (
//         <div key={i} className="flex items-center justify-between p-3 rounded-xl hover:bg-white/10 transition">

//           <div className="flex items-center gap-3">
//             <img
//               src={defaultImg}
//               className="w-12 h-12 rounded-lg"
//             />
//             <div>
//               <p>{item.name}</p>
//               <p className="text-sm text-gray-400">{item.price}</p>
//             </div>
//           </div>

//           <p className={`font-bold ${color}`}>
//             {item.sales}
//           </p>
//         </div>
//       ))}
//     </Card>
//   );
// }

// /* ================= CARDS ================= */

// function GlassCard({ title, children }) {
//   return (
//     <Card className="p-4 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-xl">
//       <h2 className="mb-4 text-lg font-semibold">{title}</h2>
//       {children}
//     </Card>
//   );
// }

// function StatCard({ title, value, color }) {
//   const colors = {
//     purple: "from-purple-500/30 to-pink-500/20",
//     green: "from-green-500/30 to-emerald-500/20",
//     blue: "from-blue-500/30 to-cyan-500/20",
//   };

//   return (
//     <Card className={`p-6 rounded-2xl border border-white/10 backdrop-blur-xl
//       bg-linear-to-br ${colors[color]} shadow-lg`}>
//       <h2 className="text-gray-300 text-sm">{title}</h2>
//       <p className="text-3xl font-bold mt-2">{value}</p>
//     </Card>
//   );
// }

// /* ================= OTHER PAGES ================= */

// function UsersPage() {
//   return <Card className="p-6 bg-white/5">Users Page</Card>;
// }

// function ProductsPage() {
//   return <Card className="p-6 bg-white/5">Products Page</Card>;
// }

// function OrdersPage() {
//   return <Card className="p-6 bg-white/5">Orders Page</Card>;
// }




// "use client";

// import { useState } from "react";
// import { Card, Button } from "@heroui/react";
// import {
//   Home, Users, ShoppingCart, Package, Menu, BarChart, Settings, LogOut
// } from "lucide-react";
// import {
//   LineChart, Line,
//   BarChart as RBarChart, Bar,
//   PieChart, Pie, Cell,
//   XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend
// } from "recharts";

// /* ================= DATA ================= */

// const defaultImg =
//   "https://cdn-icons-png.flaticon.com/512/3081/3081559.png";

// const salesData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
// ];

// const usersData = [
//   { name: "Mon", users: 40 },
//   { name: "Tue", users: 30 },
//   { name: "Wed", users: 50 },
// ];

// const orderData = [
//   { name: "Delivered", value: 400 },
//   { name: "Pending", value: 300 },
//   { name: "Cancelled", value: 200 },
// ];

// const COLORS = ["#22c55e", "#eab308", "#ef4444"];

// /* PRODUCTS */

// const topProducts = [
//   { name: "iPhone 15", price: "₹80,000", sales: 120 },
//   { name: "Nike Shoes", price: "₹5,000", sales: 95 },
//   { name: "Smart Watch", price: "₹3,000", sales: 80 },
//   { name: "Headphones", price: "₹2,500", sales: 70 },
//   { name: "Laptop", price: "₹70,000", sales: 65 },
//   { name: "Camera", price: "₹50,000", sales: 60 },
//   { name: "Tablet", price: "₹20,000", sales: 55 },
//   { name: "Speaker", price: "₹4,000", sales: 50 },
// ];

// const lowProducts = [
//   { name: "Old Phone", price: "₹10,000", sales: 5 },
//   { name: "Basic Shoes", price: "₹1,000", sales: 8 },
//   { name: "Cover", price: "₹300", sales: 4 },
//   { name: "Mouse", price: "₹400", sales: 6 },
//   { name: "Keyboard", price: "₹700", sales: 7 },
//   { name: "Charger", price: "₹200", sales: 3 },
//   { name: "Cable", price: "₹150", sales: 2 },
//   { name: "Pen Drive", price: "₹500", sales: 5 },
// ];

// /* ================= MAIN ================= */

// export default function AdminDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-[#020617] text-white">

//       {/* SIDEBAR */}
//       <div className={`${open ? "w-64" : "w-20"} bg-white/5 p-4 flex flex-col justify-between`}>

//         <div>
//           <button onClick={() => setOpen(!open)} className="mb-6">
//             <Menu />
//           </button>

//           <div className="space-y-3">
//             <SidebarItem icon={<Home />} label="Dashboard" onClick={() => setActive("dashboard")} />
//             <SidebarItem icon={<Users />} label="Users" onClick={() => setActive("users")} />
//             <SidebarItem icon={<Package />} label="Add Product" onClick={() => setActive("add")} />
//             <SidebarItem icon={<Package />} label="Show Products" onClick={() => setActive("show")} />
//             <SidebarItem icon={<ShoppingCart />} label="Orders" onClick={() => setActive("orders")} />
//             <SidebarItem icon={<BarChart />} label="Analytics" onClick={() => setActive("analytics")} />
//             <SidebarItem icon={<Settings />} label="Settings" onClick={() => setActive("settings")} />
//           </div>
//         </div>

//         {/* LOGOUT */}
//         <Button className="mt-6 bg-red-500 text-white flex items-center gap-2">
//           <LogOut size={16} /> Logout
//         </Button>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-6">

//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

//         {active === "dashboard" && <DashboardHome />}
//         {active === "users" && <Page title="Users Page" />}
//         {active === "add" && <Page title="Add Product Page" />}
//         {active === "show" && <Page title="Show Products Page" />}
//         {active === "orders" && <Page title="Orders Page" />}
//         {active === "analytics" && <Page title="Analytics Page" />}
//         {active === "settings" && <Page title="Settings Page" />}
//       </div>
//     </div>
//   );
// }

// /* ================= SIDEBAR ITEM ================= */

// function SidebarItem({ icon, label, onClick }) {
//   return (
//     <div onClick={onClick} className="flex gap-3 p-2 hover:bg-white/10 rounded cursor-pointer">
//       {icon}
//       <span className="hidden md:block">{label}</span>
//     </div>
//   );
// }

// /* ================= DASHBOARD ================= */

// function DashboardHome() {
//   return (
//     <div className="space-y-6">

//       <div className="grid md:grid-cols-3 gap-6">
//         <StatCard title="Users" value="120" />
//         <StatCard title="Sales" value="₹45,000" />
//         <StatCard title="Orders" value="32" />
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">

//         {/* SALES */}
//         <GlassCard title="Sales">
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={salesData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line dataKey="sales" stroke="#a855f7" />
//             </LineChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         {/* USERS */}
//         <GlassCard title="Users">
//           <ResponsiveContainer width="100%" height={200}>
//             <RBarChart data={usersData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="users" fill="#ec4899" />
//             </RBarChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         {/* PIE */}
//         <GlassCard title="Orders">
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie data={orderData} dataKey="value" outerRadius={70} label>
//                 {orderData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </GlassCard>

//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <ProductList title="Top Products" data={topProducts} color="text-green-400" />
//         <ProductList title="Low Products" data={lowProducts} color="text-red-400" />
//       </div>

//     </div>
//   );
// }

// /* ================= PRODUCT LIST ================= */

// function ProductList({ title, data, color }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <h2 className={`mb-3 ${color}`}>{title}</h2>

//       {data.map((item, i) => (
//         <div key={i} className="flex justify-between items-center p-2 hover:bg-white/10 rounded">
//           <div className="flex gap-3 items-center">
//             <img src={defaultImg} className="w-10 h-10 rounded" />
//             <div>
//               <p>{item.name}</p>
//               <p className="text-sm text-gray-400">{item.price}</p>
//             </div>
//           </div>
//           <p className={color}>{item.sales}</p>
//         </div>
//       ))}
//     </Card>
//   );
// }

// /* ================= CARDS ================= */

// function GlassCard({ title, children }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <h2 className="mb-2">{title}</h2>
//       {children}
//     </Card>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <p>{title}</p>
//       <h2 className="text-xl font-bold">{value}</h2>
//     </Card>
//   );
// }

// /* ================= SIMPLE PAGE ================= */

// function Page({ title }) {
//   return <Card className="p-6 bg-white/5">{title}</Card>;
// }



// "use client";

// import { useState } from "react";
// import { Card, Button } from "@heroui/react";
// import {
//   Home, Users, ShoppingCart, Package, Menu, BarChart, Settings, LogOut
// } from "lucide-react";
// import {
//   LineChart, Line,
//   BarChart as RBarChart, Bar,
//   PieChart, Pie, Cell,
//   XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
// } from "recharts";

// /* ================= DATA ================= */

// const defaultImg =
//   "https://cdn-icons-png.flaticon.com/512/3081/3081559.png";

// const salesData = [
//   { name: "Jan", sales: 4000 },
//   { name: "Feb", sales: 3000 },
//   { name: "Mar", sales: 5000 },
// ];

// const usersData = [
//   { name: "Mon", users: 40 },
//   { name: "Tue", users: 30 },
//   { name: "Wed", users: 50 },
// ];

// const orderData = [
//   { name: "Delivered", value: 400 },
//   { name: "Pending", value: 300 },
//   { name: "Cancelled", value: 200 },
// ];

// const COLORS = ["#22c55e", "#eab308", "#ef4444"];

// /* PRODUCTS */

// const topProducts = [
//   { name: "iPhone 15", price: "₹80,000", sales: 120 },
//   { name: "Nike Shoes", price: "₹5,000", sales: 95 },
//   { name: "Smart Watch", price: "₹3,000", sales: 80 },
//   { name: "Headphones", price: "₹2,500", sales: 70 },
//   { name: "Laptop", price: "₹70,000", sales: 65 },
//   { name: "Camera", price: "₹50,000", sales: 60 },
//   { name: "Tablet", price: "₹20,000", sales: 55 },
//   { name: "Speaker", price: "₹4,000", sales: 50 },
// ];

// const lowProducts = [
//   { name: "Old Phone", price: "₹10,000", sales: 5 },
//   { name: "Basic Shoes", price: "₹1,000", sales: 8 },
//   { name: "Cover", price: "₹300", sales: 4 },
//   { name: "Mouse", price: "₹400", sales: 6 },
//   { name: "Keyboard", price: "₹700", sales: 7 },
//   { name: "Charger", price: "₹200", sales: 3 },
//   { name: "Cable", price: "₹150", sales: 2 },
//   { name: "Pen Drive", price: "₹500", sales: 5 },
// ];

// /* ================= MAIN ================= */

// export default function AdminDashboard() {
//   const [active, setActive] = useState("dashboard");
//   const [open, setOpen] = useState(true);

//   return (
//     <div className="flex min-h-screen bg-[#020617] text-white">

//       {/* SIDEBAR */}
//       <div className={`transition-all duration-300 ${open ? "w-64" : "w-20"} bg-white/5 p-4 flex flex-col justify-between`}>

//         <div>
//           <button onClick={() => setOpen(!open)} className="mb-6">
//             <Menu />
//           </button>

//           <div className="space-y-3">
//             <SidebarItem open={open} icon={<Home />} label="Dashboard" onClick={() => setActive("dashboard")} />
//             <SidebarItem open={open} icon={<Users />} label="Users" onClick={() => setActive("users")} />
//             <SidebarItem open={open} icon={<Package />} label="Add Product" onClick={() => setActive("add")} />
//             <SidebarItem open={open} icon={<Package />} label="Show Products" onClick={() => setActive("show")} />
//             <SidebarItem open={open} icon={<ShoppingCart />} label="Orders" onClick={() => setActive("orders")} />
//             <SidebarItem open={open} icon={<BarChart />} label="Analytics" onClick={() => setActive("analytics")} />
//             <SidebarItem open={open} icon={<Settings />} label="Settings" onClick={() => setActive("settings")} />
//           </div>
//         </div>

//         {/* LOGOUT */}
//         <Button className="mt-6 bg-red-500 text-white flex items-center justify-center gap-2">
//           <LogOut size={16} />
//           {open && "Logout"}
//         </Button>
//       </div>

//       {/* MAIN */}
//       <div className="flex-1 p-6">

//         <h1 className="text-2xl font-bold mb-6">Admin Dashboard</h1>

//         {active === "dashboard" && <DashboardHome />}
//         {active === "users" && <Page title="Users Page" />}
//         {active === "add" && <Page title="Add Product Page" />}
//         {active === "show" && <Page title="Show Products Page" />}
//         {active === "orders" && <Page title="Orders Page" />}
//         {active === "analytics" && <Page title="Analytics Page" />}
//         {active === "settings" && <Page title="Settings Page" />}
//       </div>
//     </div>
//   );
// }

// /* ================= SIDEBAR ITEM ================= */

// function SidebarItem({ icon, label, onClick, open }) {
//   return (
//     <div
//       onClick={onClick}
//       className={`flex items-center ${open ? "gap-3" : "justify-center"} p-2 hover:bg-white/10 rounded cursor-pointer`}
//     >
//       {icon}
//       {open && <span>{label}</span>}
//     </div>
//   );
// }

// /* ================= DASHBOARD ================= */

// function DashboardHome() {
//   return (
//     <div className="space-y-6">

//       <div className="grid md:grid-cols-3 gap-6">
//         <StatCard title="Users" value="120" />
//         <StatCard title="Sales" value="₹45,000" />
//         <StatCard title="Orders" value="32" />
//       </div>

//       <div className="grid md:grid-cols-3 gap-6">

//         <GlassCard title="Sales">
//           <ResponsiveContainer width="100%" height={200}>
//             <LineChart data={salesData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Line dataKey="sales" stroke="#a855f7" />
//             </LineChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         <GlassCard title="Users">
//           <ResponsiveContainer width="100%" height={200}>
//             <RBarChart data={usersData}>
//               <XAxis dataKey="name" />
//               <YAxis />
//               <Tooltip />
//               <Bar dataKey="users" fill="#ec4899" />
//             </RBarChart>
//           </ResponsiveContainer>
//         </GlassCard>

//         <GlassCard title="Orders">
//           <ResponsiveContainer width="100%" height={200}>
//             <PieChart>
//               <Pie data={orderData} dataKey="value" outerRadius={70} label>
//                 {orderData.map((_, i) => (
//                   <Cell key={i} fill={COLORS[i]} />
//                 ))}
//               </Pie>
//               <Tooltip />
//               <Legend />
//             </PieChart>
//           </ResponsiveContainer>
//         </GlassCard>

//       </div>

//       <div className="grid md:grid-cols-2 gap-6">
//         <ProductList title="Top Products" data={topProducts} color="text-green-400" />
//         <ProductList title="Low Products" data={lowProducts} color="text-red-400" />
//       </div>

//     </div>
//   );
// }

// /* ================= PRODUCT LIST ================= */

// function ProductList({ title, data, color }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <h2 className={`mb-3 ${color}`}>{title}</h2>

//       {data.map((item, i) => (
//         <div key={i} className="flex justify-between items-center p-2 hover:bg-white/10 rounded">
//           <div className="flex gap-3 items-center">
//             <img src={defaultImg} className="w-10 h-10 rounded" />
//             <div>
//               <p>{item.name}</p>
//               <p className="text-sm text-gray-400">{item.price}</p>
//             </div>
//           </div>
//           <p className={color}>{item.sales}</p>
//         </div>
//       ))}
//     </Card>
//   );
// }

// /* ================= CARDS ================= */

// function GlassCard({ title, children }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <h2 className="mb-2">{title}</h2>
//       {children}
//     </Card>
//   );
// }

// function StatCard({ title, value }) {
//   return (
//     <Card className="p-4 bg-white/5">
//       <p>{title}</p>
//       <h2 className="text-xl font-bold">{value}</h2>
//     </Card>
//   );
// }

// /* ================= SIMPLE PAGE ================= */

// function Page({ title }) {
//   return <Card className="p-6 bg-white/5">{title}</Card>;
// }
"use client";

import { Card } from "@heroui/react";
import {
  LineChart, Line,
  BarChart as RBarChart, Bar,
  PieChart, Pie, Cell,
  XAxis, YAxis, Tooltip, ResponsiveContainer, Legend
} from "recharts";

/* ================= DATA ================= */

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

/* ================= MAIN DASHBOARD ================= */

export default function DashboardHome() {
  return (
    <div className="p-6 space-y-8 bg-[#0a0a0c] min-h-screen text-white">

      {/* STATS SECTION - આ 3 કાર્ડ્સ માં ફેરફાર કર્યો છે */}
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

/* ================= UPDATED STAT CARD ================= */

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

/* ================= SUPPORTING COMPONENTS ================= */

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
