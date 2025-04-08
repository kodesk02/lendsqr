"use client";

import { User } from "@/types/user";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import Link from "next/link";
import DropdownMenu from "@/components/Dropdown";
import FormDropdown from "@/components/FormDropdown";

const dropdownOptions = [
  {
    icon: "/icons/view.svg",
    text: "View Details",
    href: "",
  },
  {
    icon: "/icons/blacklist.svg",
    text: "Blacklist User",
    href: "",
  },
  {
    icon: "/icons/activate.svg",
    text: "Activate User",
    href: "",
  },
];

const tableHeaders = [
  "Organization",
  "Username",
  "Email",
  "Phone number",
  "Date joined",
  "Status",
  " ",
];

const statusClass: Record<string, string> = {
  Pending: "bg-yellow-50 text-yellow-400",
  Active: "bg-green-50 text-green-400",
  Inactive: "bg-gray-50 text-gray-400",
  Blacklisted: "bg-red-50 text-red-400",
};

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const totalItems = users.length;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("http://localhost:8000/users");
        if (!response.ok) throw new Error("Failed to fetch data");
        const data: User[] = await response.json();
        setUsers(data);
      } catch (err) {
        setError("Error fetching data");
      }
    };
    fetchUsers();
  }, []);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = users.slice(startIndex, startIndex + itemsPerPage);

  const handlePageChange = (page: number, perPage: number) => {
    setCurrentPage(page);
    setItemsPerPage(perPage);
  };

  const handleDropdownToggle = (id: string) => {
    setOpenDropdownId((prev) => (prev === id ? null : id));
  };

  const closeDropdown = () => {
    setOpenDropdownId(null);
  };

  const closeFormDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <div className="relative">
      <div className="overflow-x-auto bg-white p-2 pt-6 text-[var(--gray)]">
        <table className="w-full shadow-lg">
          <div className="p-6">
            <thead className="text-nowrap">
              <tr>
                {tableHeaders.map((header) => (
                  <th key={header} className="p-4">z
                    <div className="flex items-center gap-2">
                      {header.toUpperCase()}
                      <Image
                        src={"/icons/filter-results-button.svg"}
                        alt={`filter icon`}
                        width={16}
                        height={16}
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                      />
                      {isDropdownOpen && (
                        <FormDropdown
                          isOpen={isDropdownOpen}
                          onClose={closeDropdown}
                        />
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <React.Fragment key={user.details.id}>
                  <tr className="hover:bg-gray-50 p-5 space-y-4">
                    <td className="p-4">{user?.details.organization}</td>
                    <td className="p-4 text-nowrap">
                      {user?.details.username}
                    </td>
                    <td className="p-4">{user?.details.email}</td>
                    <td className="p-4">{user?.details.phonenumber}</td>
                    <td className="p-4 text-nowrap">
                      {new Date(user?.details.datejoined).toDateString()}
                    </td>
                    <td className="p-4">
                      <span
                        className={`px-4 py-2 rounded-full ${
                          statusClass[user?.details.status]
                        }`}
                      >
                        {user?.details.status}
                      </span>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDropdownToggle(user.details.id)}
                      >
                        <Image
                          src={"/icons/list.svg"}
                          alt="dropdown"
                          width={3.33}
                          height={14.44}
                          className="cursor-pointer"
                        />
                      </button>
                      <DropdownMenu
                        options={dropdownOptions}
                        isOpen={openDropdownId === user.details.id}
                        onClose={closeDropdown}
                      />
                    </td>
                  </tr>

                  {index !== currentItems.length - 1 && (
                    <tr>
                      <td colSpan={tableHeaders.length}>
                        <hr className="border-gray-300" />
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </div>
        </table>
      </div>

      <div>
        <Pagination
          totalItems={totalItems}
          itemsPerPage={itemsPerPage}
          onPageChange={handlePageChange}
          className={"sticky"}
        />
      </div>
    </div>
  );
};

export default UserTable;
