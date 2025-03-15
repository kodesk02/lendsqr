'use client'
import { cn } from "@/utils/cn";
import { useState } from "react";

interface TextInputProps {
    placeholder: string;
    type?: 'text' | 'email' | 'password' ;
    value: string;
    onChange: (value: string) => void;
    disabled?: boolean;
    required?: boolean;
    className?: string;
    id?: string;
}

export default function TextInput({
    placeholder,
    type = 'text',
    value,
    onChange,
    disabled = false,
    required = false,
    className = "",
    id,
}: TextInputProps) {
    const [showPassword, setShowPassword] = useState(false);
    const inputType = type === 'password' && showPassword ? 'text': type ;
    
    return (
        <div className="space-y-1">
            <div className="relative">
                <input
                    type={inputType}
                    id={id}
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    placeholder={placeholder}
                    disabled={disabled}
                    required={required}
                    className={cn(
                        'w-full px-3 py-3.5 border-1 text-[var(--gray)] border-slate-300 rounded-md',
                        'focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary',
                        'disabled:bg-gray-100 disabled:cursor-not-allowed',
                        type === 'password' && 'pr-10',
                        className
                    )}
                />
                {type === 'password' && (
                    <button
                        type='button'
                        onClick={() => setShowPassword(!showPassword)}
                        className={cn(
                            'absolute inset-y-0 right-0 flex items-center px-5',
                            'text-[var(--primary)] hover:text-[var(--royalblue)] tracking-wide ',
                            disabled && 'cursor-not-allowed opacity-50'
                        )}
                        disabled={disabled}
                    >
                        {showPassword ? 'HIDE' : 'SHOW'}
                    </button>
                )

                }
            </div>
        </div>
    )
}