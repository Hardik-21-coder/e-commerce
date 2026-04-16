// "use client";

// import { Controller } from "react-hook-form";
// import { Select, SelectItem } from "@heroui/react";
// import { ChevronDown, Layers } from "lucide-react"; // SaaS-style icons

// const RHFDropDown = ({
//   control,
//   name,
//   label,
//   options = [],
//   rules,
//   placeholder = "Select an option",
//   icon: Icon = Layers, // Default icon for a SaaS look
//   ...props
// }) => {
//   return (
//     <div className="space-y-2">
//       {/* SaaS Label Styling */}
//       <div className="flex items-center gap-2 mb-1">
//         <Icon size={14} className="text-slate-500" />
//         <label className="text-[11px] font-bold uppercase tracking-widest text-slate-400">
//           {label}
//         </label>
//       </div>

//       <Controller
//         name={name}
//         control={control}
//         rules={rules}
//         render={({ field, fieldState: { error } }) => (
//           <Select
//             {...field}
//             {...props}
//             placeholder={placeholder}
//             isInvalid={!!error}
//             errorMessage={error?.message}
//             variant="bordered"
//             disableSelectorIconRotation
//             // SaaS Interaction Icons
//             selectorIcon={<ChevronDown size={18} className="text-slate-500" />}
            
//             // Customizing HeroUI Internal Classes
//             classNames={{
//               trigger: [
//                 "bg-slate-900/40",
//                 "border-slate-800",
//                 "hover:border-slate-700",
//                 "focus-within:!border-blue-500/50",
//                 "rounded-xl",
//                 "min-h-[48px]",
//                 "transition-all duration-200",
//                 "backdrop-blur-md",
//                 "shadow-sm",
//               ],
//               value: "text-slate-200 text-sm font-medium",
//               innerWrapper: "gap-3",
//               popoverContent: [
//                 "bg-slate-950",
//                 "border-slate-800",
//                 "rounded-2xl",
//                 "shadow-2xl",
//                 "text-slate-200",
//               ],
//             }}
//             // How the selection looks when active
//             listboxProps={{
//               itemClasses: {
//                 base: [
//                   "rounded-lg",
//                   "text-slate-400",
//                   "transition-opacity",
//                   "data-[hover=true]:text-white",
//                   "data-[hover=true]:bg-blue-600/20",
//                   "data-[selected=true]:text-blue-400",
//                   "data-[selectable=true]:focus:bg-blue-600/20",
//                 ],
//               },
//             }}
//           >
//             {options.map((option) => (
//               <SelectItem 
//                 key={option.key} 
//                 textValue={option.label}
//                 className="capitalize"
//               >
//                 {option.label}
//               </SelectItem>
//             ))}
//           </Select>
//         )}
//       />
//     </div>
//   );
// };

// export default RHFDropDown;



"use client";

import { Controller } from "react-hook-form";
import { Select, SelectItem } from "@heroui/react";
import { ChevronDown, Tag } from "lucide-react"; // SaaS લુક માટે આઈકોન્સ

const RHFDropDown = ({
  control,
  name,
  label,
  options = [],
  rules,
  placeholder = "Select an option",
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1.5">
      {/* Label Design: નાનું, બોલ્ડ અને પ્રોફેશનલ */}
      {label && (
        <div className="flex items-center gap-2 ml-1">
          <Tag size={12} className="text-blue-500" />
          <label className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
            {label}
          </label>
        </div>
      )}

      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field, fieldState: { error } }) => (
          <Select
            {...field}
            {...props}
            placeholder={placeholder}
            isInvalid={!!error}
            errorMessage={error?.message}
            variant="bordered"
            disableSelectorIconRotation
            // કસ્ટમ ડ્રોપડાઉન આઈકોન
            selectorIcon={<ChevronDown size={18} className="text-slate-500" />}
            
            // HeroUI ની અંદરની ડિઝાઈનને કસ્ટમાઈઝ કરવા માટે classNames
            classNames={{
              trigger: [
                "bg-slate-900/40",           // ઝાંખું કાળું બેકગ્રાઉન્ડ
                "backdrop-blur-md",         // ગ્લાસ ઇફેક્ટ
                "border-slate-800",          // બોર્ડર કલર
                "hover:border-slate-700",    // હોવર ઇફેક્ટ
                "focus-within:!border-blue-500/50", // ફોકસ થાય ત્યારે બ્લુ ગ્લો
                "rounded-xl",               // વળાંકવાળા ખૂણા
                "h-12",                     // ચોક્કસ હાઈટ
                "transition-all duration-200",
                "shadow-lg shadow-black/20",
              ],
              value: "text-slate-200 text-sm font-medium", // સિલેક્ટ કરેલી વેલ્યુનો કલર
              innerWrapper: "gap-3",
              popoverContent: [             // જે લિસ્ટ ખુલે તેની ડિઝાઈન
                "bg-slate-950",
                "border-slate-800",
                "rounded-2xl",
                "shadow-2xl",
              ],
            }}
            
            // લિસ્ટની અંદરના આઈટમ્સની ડિઝાઈન
            listboxProps={{
              itemClasses: {
                base: [
                  "rounded-lg",
                  "text-slate-400",
                  "data-[hover=true]:text-white",
                  "data-[hover=true]:bg-blue-600/20", // હોવર પર બ્લુ ટિન્ટ
                  "data-[selected=true]:text-blue-400",
                  "data-[selected=true]:bg-blue-600/10",
                ],
              },
            }}
          >
            {options.map((option) => (
              <SelectItem 
                key={option.key} 
                textValue={option.label}
              >
                {option.label}
              </SelectItem>
            ))}
          </Select>
        )}
      />
    </div>
  );
};

export default RHFDropDown;