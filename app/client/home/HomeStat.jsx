// export function HomeStat({ label, value }) {
//   return (
//     <div className="rounded-xl border-2 border-gray-200 bg-gradient-to-br from-white to-gray-50 p-6 transition-all duration-300 hover:border-gray-300 hover:shadow-lg hover:-translate-y-1">
//       <div className="text-sm font-semibold text-gray-600 uppercase tracking-wide">{label}</div>
//       <div className="mt-3 text-3xl font-bold text-gray-900 tracking-tight">{value}</div>
//     </div>
//   );
// }

export function HomeStat({ label, value }) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl p-6
                    transition-all duration-300 hover:bg-white/10 hover:-translate-y-1 hover:shadow-2xl">
      
      <div className="text-sm font-semibold text-gray-300 uppercase tracking-widest">
        {label}
      </div>

      <div className="mt-3 text-3xl font-bold text-white tracking-tight">
        {value}
      </div>

    </div>
  );
}
