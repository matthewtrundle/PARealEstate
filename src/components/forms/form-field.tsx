"use client"

import { cn } from "@/lib/utils"

interface FormFieldProps {
  name: string
  label: string
  type?: string
  placeholder?: string
  required?: boolean
  error?: string
  as?: "input" | "textarea" | "select"
  rows?: number
  options?: { value: string; label: string }[]
  className?: string
  defaultValue?: string
}

export function FormField({
  name,
  label,
  type = "text",
  placeholder,
  required = false,
  error,
  as = "input",
  rows = 4,
  options,
  className,
  defaultValue,
}: FormFieldProps) {
  const inputClasses = cn(
    "flex w-full rounded-lg border bg-white px-4 py-3 text-base text-neutral-900 placeholder:text-neutral-400 transition-colors",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-0",
    "disabled:cursor-not-allowed disabled:opacity-50",
    error
      ? "border-red-500 focus-visible:ring-red-500"
      : "border-neutral-200 hover:border-neutral-300",
    className
  )

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block text-sm font-medium text-neutral-700">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </label>

      {as === "textarea" ? (
        <textarea
          id={name}
          name={name}
          placeholder={placeholder}
          required={required}
          rows={rows}
          defaultValue={defaultValue}
          className={cn(inputClasses, "resize-none min-h-[120px]")}
        />
      ) : as === "select" ? (
        <select
          id={name}
          name={name}
          required={required}
          defaultValue={defaultValue}
          className={inputClasses}
        >
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          placeholder={placeholder}
          required={required}
          defaultValue={defaultValue}
          className={inputClasses}
        />
      )}

      {error && (
        <p className="text-sm text-red-500 mt-1">{error}</p>
      )}
    </div>
  )
}
