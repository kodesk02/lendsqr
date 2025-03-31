"use client";

import { User, UsersResponse } from "@/types/user";
import React, { useEffect, useState } from "react";
import Image from "next/image";

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

  return (
    <div className="overflow-x-hidden bg-white p-2 pt-6 text-[var(--gray)]">
      <table className="w-full shadow-lg">
        <thead className="text-nowrap">
          <tr>
            {tableHeaders.map((header) => (
              <th key={header} className="p-4">
                <div className="flex items-center gap-2">
                  {header.toUpperCase()}
                  <Image
                    src={"/icons/filter-results-button.svg"}
                    alt={`filter icon`}
                    width={16}
                    height={16}
                  />
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <>
              <tr
                key={user.details.id}
                className="hover:bg-gray-50 p-5 space-y-4"
              >
                <td className="p-4">{user?.details.organization}</td>
                <td className="p-4">{user?.details.username}</td>
                <td className="p-4">{user?.details.email}</td>
                <td className="p-4">{user?.details.phonenumber}</td>
                <td className="p-4 text-nowrap">
                  {new Date(user?.details.datejoined).toDateString()}
                </td>
                <td className="p-4">
                  <span className={`px-4 py-2 rounded-full ${statusClass[user?.details.status]}`}>
                    {user?.details.status}
                  </span>
                </td>
              </tr>
              {index !== users.length - 1 && (
                       <tr>
                       <td colSpan={tableHeaders.length}>
                         <hr className="border-gray-300" />
                       </td>
                     </tr>
              )}
       
            </>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;