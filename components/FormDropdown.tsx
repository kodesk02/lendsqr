import { useState, useRef, useEffect } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

interface FormDropdownProps {
  isOpen?: boolean;
  onClose: () => void;
}

const FormDropdown: React.FC<FormDropdownProps> = ({ isOpen, onClose }) => {
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    date: "",
    status: "",
    organization: "",
  });

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    isOpen && (
      <div
        ref={dropdownRef}
        className="absolute left-0 top-0 z-50 mt-2 w-xs rounded-md bg-white ring-1 ring-black/5"
      >
        <div className="py-4 px-6 space-y-5">
          <TextInput
            label="Organization"
            type="select"
            placeholder="Select"
            value={formData.organization}
            onChange={(val) => handleChange("organization", val)}
            options={[
              { label: "Lendsqr", value: "lendsqr" },
              { label: "New", value: "new" },
            ]}
          />
          <TextInput
            placeholder={"User"}
            value={formData.username}
            onChange={(val) => handleChange("username", val)}
            label="Username"
          />
          <TextInput
            placeholder={"Email"}
            value={formData.email}
            onChange={(val) => handleChange("email", val)}
            label="Email"
          />
          <TextInput
            placeholder={"Date"}
            type="date"
            value={formData.date}
            onChange={(val) => handleChange("date", val)}
            label="Date"
          />
          <TextInput
            placeholder={"Phone Number"}
            value={formData.phone}
            onChange={(val) => handleChange("phone", val)}
            label="Phone Number"
          />
          <TextInput
            label="Status"
            type="select"
            placeholder="Select"
            value={formData.status}
            onChange={(val) => handleChange("status", val)}
            options={[
              { label: "Inactive", value: "inactive" },
              { label: "Active", value: "active" },
              { label: "Blacklisted", value: "blacklisted" },
              { label: "Pending", value: "pending" },
            ]}
          />

          <div className="flex gap-4 justify-center items-center">
            <Button text={"Reset"} variant={"transparent"} size="lg" />
            <Button text={"Filter"} variant={"primary"} size="lg" />
          </div>
        </div>
      </div>
    )
  );
};

export default FormDropdown;
