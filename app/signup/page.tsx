"use client";

import React, { useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import Link from "next/link";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Signed up with the email: ${email}`);
  };

  return (
    <div className="grid grid-cols-2">
      <div className="min-h-screen">
        <div className="flex flex-col gap-y-10 px-10 py-18">
          <div>
            <Image
              src={"/icons/Group.svg"}
              alt={"Lendsqr"}
              width={173.76}
              height={36}
            />
          </div>
          <div className="mt-10">
            <Image
              src={"/assets/pablo-sign-in 1.svg"}
              alt={"Sign up"}
              width={600}
              height={337.5}
            />
          </div>
        </div>
      </div>
      <div className="min-h-screen">
        <div className="flex flex-col p-16 mt-20 gap-y-10">
          <div className="space-y-2">
            <h2 className="text-[var(--royalblue)] font-bold text-5xl">
              Welcome !
            </h2>
            <span className="text-[var(--gray)]">Enter details to login.</span>
          </div>
          <div className="space-y-6">
            <TextInput
              placeholder={"Enter your e-mail"}
              type="email"
              value={email}
              onChange={setEmail}
              id="email"
            />
            <TextInput
              placeholder={"Password"}
              type="password"
              value={password}
              onChange={setPassword}
              id="password"
            />
          </div>
          <Link className="text-[var(--primary)] tracking-widest " href={""}>
            FORGOT PASSWORD?
          </Link>
          <Button
            text={"LOG IN"}
            variant={"primary"}
            size="lg"
            onClick={() => handleSubmit}
            className="font-semibold tracking-wider"
          />
          <Link href={"/app/(dashboard)/page.tsx"}>Open</Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
