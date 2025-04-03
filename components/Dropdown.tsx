import { useState, useRef, useEffect } from "react";
import Image from "next/image";

interface DropdownOption {
  icon: string;
  text: string;
  href: string;
}

interface DropdownMenuProps {
  options: DropdownOption[];
  isOpen: boolean;
  onClose: () => void; // Add a function to close the dropdown
}

const DropdownMenu: React.FC<DropdownMenuProps> = ({ options, isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null); // Ref for the dropdown

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        onClose(); // Close the dropdown
      }
    };

    // Add event listener on mount
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    isOpen && (
      <div ref={dropdownRef} className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5">
        <div className="py-1">
          {options.map((option, index) => (
            <a
              key={index}
              href={option.href}
              className="flex items-center gap-2 px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            >
              <img src={option.icon} alt="icon" className="size-5" />
              {option.text}
            </a>
          ))}
        </div>
      </div>
    )
  );
};

export default DropdownMenu;

