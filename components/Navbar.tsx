"use client";

import React, { useState } from "react";
import Image from "next/image";
import SearchInput from "./SearchInput";
import Link from "next/link";
import Avatar from "./Avatar";

const avatar = [
  {
    name: "Adedeji",
    img: "/assets/avatar.svg",
  },
];

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (term: string) => {
    console.log(`Searched Item ${term}`);
  };

  return (
    <div className="p-6 flex gap-36 justify-between">
      <Image
        src={"/icons/Group.svg"}
        alt={"Lendsqr"}
        width={173.76}
        height={36}
      />
      <SearchInput
        value={searchTerm}
        placeholder={"Search for anything"}
        onChange={setSearchTerm}
        onSubmit={handleSearch}
      />
      <div className="pl-24">
        <div className="flex gap-6">
          <Link href={""} className="underline text-[var(--royalblue)] mt-3">
            Docs
          </Link>
          <Image
            src={"/icons/notification.svg"}
            alt={"notification"}
            width={26}
            height={26}
          />
          {avatar.map((index, idx) => (
            <div key={idx}>
              <Avatar img={index.img} name={index.name} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
