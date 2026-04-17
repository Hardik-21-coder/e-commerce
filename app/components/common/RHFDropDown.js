"use client";

import { Controller } from "react-hook-form";
import { Select, SelectItem } from "@heroui/react";
import { ChevronDown, Tag } from "lucide-react"; 

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
            
            selectorIcon={<ChevronDown size={18} className="text-slate-500" />}
            
            
            classNames={{
              trigger: [
                "bg-slate-900/40",           
                "backdrop-blur-md",         
                "border-slate-800",         
                "hover:border-slate-700",    
                "focus-within:!border-blue-500/50", 
                "rounded-xl",               
                "h-12",                     
                "transition-all duration-200",
                "shadow-lg shadow-black/20",
              ],
              value: "text-slate-200 text-sm font-medium", 
              innerWrapper: "gap-3",
              popoverContent: [             
                "bg-slate-950",
                "border-slate-800",
                "rounded-2xl",
                "shadow-2xl",
              ],
            }}
            
            
            listboxProps={{
              itemClasses: {
                base: [
                  "rounded-lg",
                  "text-slate-400",
                  "data-[hover=true]:text-white",
                  "data-[hover=true]:bg-blue-600/20", 
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