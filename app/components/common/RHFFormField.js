import { Input, TextArea, Select } from "@heroui/react";
import { Controller } from "react-hook-form";
import { AlertCircle, CheckCircle2 } from "lucide-react";

const RHFFormField = ({
  control,
  name,
  label,
  type = "text",
  component = "input",
  options = [],
  rules,
  placeholder,
  className = "",
  variant = "bordered",
  radius = "lg",
  size = "md",
  disabled,
  readOnly,
  required,
  autoComplete,
  autoFocus,
  ...otherProps
}) => {
  return (
    <Controller
      name={name}
      control={control}
      rules={rules}
      render={({ field, fieldState: { error } }) => {
        // Props for @heroui/react components (not passed to DOM)
        const componentProps = {
          label,
          placeholder: placeholder || `Enter ${label?.toLowerCase() || 'value'}`,
          variant,
          radius,
          size,
          disabled,
          readOnly,
          required,
          autoComplete,
          autoFocus,
        };

        // Handle validation separately
        const isInvalid = !!error;
        const errorMessage = error?.message;

        // Modern SaaS styling classes
        const baseInputClasses = `
          w-full transition-all duration-300 ease-in-out
          bg-white dark:bg-slate-800
          border border-slate-200 dark:border-slate-600
          hover:border-slate-300 dark:hover:border-slate-500
          focus:border-blue-500 dark:focus:border-blue-400
          focus:ring-4 focus:ring-blue-500/10 dark:focus:ring-blue-400/10
          placeholder:text-slate-400 dark:placeholder:text-slate-500
          text-slate-900 dark:text-white
          shadow-sm hover:shadow-md focus:shadow-lg
          rounded-xl
          ${isInvalid
            ? 'border-red-300 dark:border-red-500 focus:border-red-500 focus:ring-red-500/10'
            : ''
          }
          ${disabled
            ? 'opacity-50 cursor-not-allowed bg-slate-50 dark:bg-slate-700'
            : ''
          }
          ${className}
        `;

        const labelClasses = `
          text-sm font-semibold text-slate-700 dark:text-slate-300
          mb-2 block
          ${required ? 'after:content-["*"] after:text-red-500 after:ml-1' : ''}
        `;

        const errorClasses = `
          flex items-center space-x-2 text-sm text-red-600 dark:text-red-400
          mt-2 font-medium
        `;

        switch (component) {
          case "input":
            return (
              <div className="space-y-2">
                {label && (
                  <label className={labelClasses}>
                    {label}
                  </label>
                )}
                <div className="relative">
                  <Input
                    {...field}
                    value={field.value || ""}
                    onChange={(e) => {
                      if (type === "number") {
                        const numValue = e.target.value === "" ? undefined : Number(e.target.value);
                        field.onChange(numValue);
                      } else {
                        field.onChange(e.target.value);
                      }
                    }}
                    type={type}
                    {...componentProps}
                    label={null} // Remove duplicate label since we handle it above
                    className={baseInputClasses}
                  />
                  {isInvalid && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                  {!isInvalid && field.value && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>
                {isInvalid && errorMessage && (
                  <div className={errorClasses}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            );
          case "textarea":
            return (
              <div className="space-y-2">
                {label && (
                  <label className={labelClasses}>
                    {label}
                  </label>
                )}
                <div className="relative">
                  <TextArea
                    {...field}
                    {...componentProps}
                    label={null} // Remove duplicate label since we handle it above
                    className={`${baseInputClasses} min-h-[120px] resize-none`}
                  />
                  {isInvalid && (
                    <div className="absolute right-3 top-3">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                  {!isInvalid && field.value && (
                    <div className="absolute right-3 top-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>
                {isInvalid && errorMessage && (
                  <div className={errorClasses}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            );
          case "select":
            return (
              <div className="space-y-2">
                {label && (
                  <label className={labelClasses}>
                    {label}
                  </label>
                )}
                <div className="relative">
                  <Select
                    {...field}
                    label={null} // Remove duplicate label since we handle it above
                    placeholder={placeholder || `Select ${label?.toLowerCase() || 'option'}`}
                    variant={variant}
                    radius={radius}
                    size={size}
                    disabled={disabled}
                    readOnly={readOnly}
                    required={required}
                    className={baseInputClasses}
                  >
                    {options.map((option) => (
                      <option key={option.key || option.value} value={option.key || option.value}>
                        {option.label}
                      </option>
                    ))}
                  </Select>
                  {isInvalid && (
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                  {!isInvalid && field.value && (
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 z-10">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>
                {isInvalid && errorMessage && (
                  <div className={errorClasses}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            );
          default:
            return (
              <div className="space-y-2">
                {label && (
                  <label className={labelClasses}>
                    {label}
                  </label>
                )}
                <div className="relative">
                  <Input
                    {...field}
                    type={type}
                    {...componentProps}
                    label={null} // Remove duplicate label since we handle it above
                    className={baseInputClasses}
                  />
                  {isInvalid && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <AlertCircle className="w-5 h-5 text-red-500" />
                    </div>
                  )}
                  {!isInvalid && field.value && (
                    <div className="absolute right-3 top-1/2 -translate-y-1/2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    </div>
                  )}
                </div>
                {isInvalid && errorMessage && (
                  <div className={errorClasses}>
                    <AlertCircle className="w-4 h-4 flex-shrink-0" />
                    <span>{errorMessage}</span>
                  </div>
                )}
              </div>
            );
        }
      }}
    />
  );
};

export default RHFFormField;