"use client";
import { cn } from "@/utils/cn";
import { useRef, useState } from "react";
import Image from "next/image";

interface TextInputProps {
  placeholder: string;
  label?: string;
  type?: "text" | "email" | "password" | "select" | "date";
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
  required?: boolean;
  className?: string;
  id?: string;
  options?: { label: string; value: string }[]; // For select input
}

export default function TextInput({
  placeholder,
  type = "text",
  value,
  label,
  onChange,
  disabled = false,
  required = false,
  className = "",
  id,
  options = [],
}: TextInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [date, setDate] =  useState('')
  const inputType = type === "password" && showPassword ? "text" : type;
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className="space-y-1">
      <div className="relative">
        <div className="flex flex-col">
          {label && (
            <span className="text-lg font-medium mb-2 justify-start flex">
              {label}
            </span>
          )}

          {/* Render Input or Select */}
          {type === "select" ? (
            <select
              id={id}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              disabled={disabled}
              required={required}
              className={cn(
                "w-full px-3 py-3.5 border-1 text-[var(--gray)] border-slate-300 rounded-md",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                className
              )}
            >
              <option value="" className="text-slate-100" disabled>
                {placeholder}
              </option>
              {options.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          ) : type === "date" ? (
            <div className="relative">
              <input
                type="date"
                id={id}
                  value={date}
                onChange={(e) => setDate(e.target.value)}
                placeholder={placeholder}
                disabled={disabled}
                required={required}
                className={cn(
                  "w-full px-3 py-3.5 border-1 text-[var(--gray)] border-slate-300 rounded-md",
                  "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                  "disabled:bg-gray-100 disabled:cursor-not-allowed",
                  "pr-10",
                  className
                )}
              />
            </div>
          ) : (
            <input
              type={inputType}
              id={id}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              placeholder={placeholder}
              disabled={disabled}
              required={required}
              className={cn(
                "w-full px-3 py-3.5 border-1 text-[var(--gray)] border-slate-300 rounded-md",
                "focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary",
                "disabled:bg-gray-100 disabled:cursor-not-allowed",
                type === "password" && "pr-10",
                className
              )}
            />
          )}
        </div>

        {/* Password Toggle */}
        {type === "password" && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={cn(
              "absolute inset-y-0 right-0 flex items-center px-5",
              "text-[var(--primary)] hover:text-[var(--royalblue)] tracking-wide ",
              disabled && "cursor-not-allowed opacity-50"
            )}
            disabled={disabled}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </button>
        )}
      </div>
    </div>
  );
}
