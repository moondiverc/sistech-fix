"use client";

import { ChevronDown, Check } from "lucide-react";
import { useState } from "react";

const roles = [
  "UI Designer",
  "Frontend Developer",
  "Data Analyst",
  "ML Engineer",
  "Product Manager",
];

export default function RoleDropdown() {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (role: string) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  return (
    <div className="flex flex-col gap-2 w-fit">
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-[262px] h-[50px] px-4 py-2 rounded-xl border border-[#A855F7] bg-[#D8B4FE] text-[#111827] text-[18px] font-inter shadow-inner flex items-center justify-between"
      >
        <span>{selectedRole || "Select your role"}</span>
        <ChevronDown />
      </button>

      {/* Dropdown Items */}
      {isOpen && (
        <div className="bg-[#D8B4FE] text-[#111827] rounded-xl shadow-xl overflow-hidden w-[262px] transition-all duration-300 ease-in-out">
          {roles.map((role) => (
            <div
              key={role}
              onClick={() => handleSelect(role)}
              className="px-8 py-2 hover:bg-[#C084FC] cursor-pointer flex items-center justify-between"
            >
              <span>{role}</span>
              {selectedRole === role && <Check className="w-4 h-4" />}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
