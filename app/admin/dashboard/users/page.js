"use client";

import { useEffect, useState } from "react";
import { MoreVertical, Eye, Trash2 } from "lucide-react";
import { BACKEND_URL } from "@/lib/backend";

export default function ShowUsers() {
  const [users, setUsers] = useState([]);
  const [openMenu, setOpenMenu] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [mode, setMode] = useState("list");
  // FETCH USERS 
  const fetchUsers = async () => {
    try {
      const res = await fetch(`${BACKEND_URL}/users`);
      const data = await res.json();

      // admin remove
      const filteredUsers = (data || []).filter(
        (u) => u.role !== "admin"
      );

      setUsers(filteredUsers);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  //  DELETE USER 
  const deleteUser = async (id) => {
    const ok = confirm("Delete this user?");
    if (!ok) return;

    try {
      const res = await fetch(
        `${BACKEND_URL}/users/${id}`,
        {
          method: "DELETE",
        }
      );

      const data = await res.json();
      console.log(data);

      if (!res.ok) {
        alert("Delete failed ❌");
        return;
      }

      fetchUsers();
      setOpenMenu(null);
    } catch (err) {
      console.log(err);
    }
  };

  //  LIST 
  if (mode === "list") {
    return (
      <div className="p-6 bg-[#020617] min-h-screen text-white">
        <h1 className="text-2xl font-bold mb-6">👤 Users</h1>

        <div className="bg-white/5 rounded-2xl overflow-visible relative">
          {users.map((u, i) => (
            <div
              key={u.id}
              className="flex items-center justify-between p-4 border-b border-white/10 hover:bg-white/5 transition"
            >
              {/* LEFT */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-purple-600 text-white font-bold">
                  {u.name?.charAt(0)}
                </div>

                <div>
                  <h2 className="font-semibold">{u.name}</h2>
                  <p className="text-sm text-slate-400">
                    {u.email}
                  </p>
                </div>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-6 relative">
                <span className="text-sm text-purple-400 capitalize">
                  {u.role}
                </span>

                <div className="relative">
                  <button
                    onClick={() =>
                      setOpenMenu(openMenu === i ? null : i)
                    }
                    className="p-2 rounded-full hover:bg-white/10"
                  >
                    <MoreVertical size={18} />
                  </button>

                  {openMenu === i && (
                    <div className="absolute right-0 mt-2 w-40 bg-white text-black rounded-xl shadow-lg overflow-hidden z-50">

                      <button
                        onClick={() => {
                          setSelectedUser(u);
                          setMode("view");
                          setOpenMenu(null);
                        }}
                        className="flex items-center gap-2 w-full px-4 py-2 hover:bg-gray-100"
                      >
                        <Eye size={16} /> View
                      </button>

                      <button
                        onClick={() => deleteUser(u.id)}
                        className="flex items-center gap-2 w-full px-4 py-2 text-red-500 hover:bg-red-50"
                      >
                        <Trash2 size={16} /> Delete
                      </button>

                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {users.length === 0 && (
            <div className="p-6 text-center text-slate-400">
              No users found 🚫
            </div>
          )}
        </div>
      </div>
    );
  }

  // VIEW 
  return (
    <div className="p-6 bg-[#020617] min-h-screen text-white">
      <h1 className="text-2xl font-bold mb-6">
        View User
      </h1>

      {selectedUser && (
        <div className="bg-white/5 p-6 rounded-xl space-y-4">

          <div className="w-20 h-20 flex items-center justify-center rounded-full bg-purple-600 text-white text-2xl font-bold">
            {selectedUser.name?.charAt(0)}
          </div>

          <input
            value={selectedUser.name || ""}
            disabled
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <input
            value={selectedUser.email || ""}
            disabled
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <input
            value={selectedUser.role || ""}
            disabled
            className="w-full p-3 bg-slate-800 rounded-xl"
          />

          <button
            onClick={() => {
              setMode("list");
              setSelectedUser(null);
            }}
            className="px-4 py-2 bg-gray-600 rounded-xl"
          >
            Back
          </button>
        </div>
      )}
    </div>
  );
}