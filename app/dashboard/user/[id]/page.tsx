"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Button from "@/components/Button";
import { User } from "@/types/user";
import { useParams } from "next/navigation";
import Tabs from "@/components/TabNav";

const UserDetails = () => {
  const { id } = useParams();
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
    if (id) fetchUsers();
  }, [id]);

  const foundUser = users.find((user) => user.details.id === id);

  const formatCurrency = (amount: number | string) => {
    return new Intl.NumberFormat("en-NG", {
      style: "currency",
      currency: "NGN",
      minimumFractionDigits: 0,
    }).format(Number(amount));
  };

  return (
    <div className=" p-6 pt-4">
      <div>
        <Link
          className="flex tracking-widest gap-3 text-[var(--gray)] text-2xl font-sm text-[16px] mb-6"
          href={"/dashboard"}
        >
          <Image
            src={"/icons/arrow1.svg"}
            alt={"Go back"}
            width={26.72}
            height={9.38}
          />
          Back to Users
        </Link>
      </div>
      <div className="flex justify-between">
        <div className="text-[var(--royalblue)] text-2xl font-semibold mb-6">
          User Details
        </div>
        <div className="gap-4">
          <Button
            className="font-bold tracking-widest mr-4"
            text={"BLACKLIST USER"}
            variant={"red"}
            size="md"
          />
          <Button
            className="font-bold tracking-widest"
            text={"ACTIVATE USER"}
            variant={"neutral"}
            size="md"
          />
        </div>
      </div>

      <div className="bg-white p-8 pb-0 shadow-lg">
        <div className="flex gap-4">
          <div className="bg-[var(--royalblue)]/30 backdrop-blur-md w-[80px] h-[80px] rounded-full flex items-center justify-center">
            <Image
              src={"/icons/userprofile.svg"}
              alt={"Profile"}
              width={27.92}
              height={29.3}
            />
          </div>
          <div>
            <div className="mt-4">
              {foundUser ? (
                <div className="flex gap-4">
                  <div className="flex-col flex space-y-1">
                    <span className="text-[var(--royalblue)] text-xl font-semibold tracking-wider">
                      {foundUser.details.username}
                    </span>
                    <span className="text-[var(--gray)]">
                      {foundUser.details.id}
                    </span>
                  </div>
                  <div className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-gray-500 to-white opacity-25 dark:via-neutral-400 lg:block"></div>

                  <div className="flex-col flex space-y-1">
                    <span className="text-[var(--royalblue)] text-xl font-medium">
                      {`${formatCurrency(foundUser.details.salary)}.00`}
                    </span>
                    <span className="text-[var(--royalblue)] font-medium text-sm">
                      {`${foundUser.details.bvn}/${foundUser.details.bank}`}
                    </span>
                  </div>
                </div>
              ) : (
                <div>User Not Found</div>
              )}
            </div>
          </div>
        </div>
        <div className="mt-10">
          <Tabs
            tabs={[
              { label: "General Details" },
              { label: "Documents" },
              { label: "Bank Details" },
              { label: "Loans" },
              { label: "Savings" },
              { label: "App and System" },
            ]}
          />
        </div>
      </div>

      <div className="bg-white p-8 space-y-6 shadow-lg mt-6">
        <div>
          {/* Personal Information  */}
          <span className="text-[var(--royalblue)] text-lg font-medium">
            Personal Information
          </span>
          {foundUser && (
            <div className="grid grid-cols-5 gap-6 flex-col mt-6">
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">FULL NAME</span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.username}{" "}
                  </span>
                </div>
              </div>
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    PHONE NUMBER
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.phonenumber}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.email}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">BVN</span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.bvn}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">GENDER</span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.gender}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    MARITAL STATUS
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.maritialstatus}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">CHILDREN</span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.children}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    TYPE OF RESIDENCE
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {foundUser?.details.typeofresidence}{" "}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        <hr />

        <div>
          {/* Education and employment  */}
          <span className="text-[var(--royalblue)] text-lg font-medium">
            Education and Employment
          </span>
          {foundUser?.details.education.map((edu, index) => (
            <div className="grid grid-cols-4 gap-6 flex-col mt-6">
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    LEVEL OF EDUCATION
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.levelofeducation}
                  </span>
                </div>
              </div>
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    EMPLOYMENY STATUS
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.employmentstatus}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    SECTOR OF EMPLOYMENT
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.sector}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    DURATION OF EMPLOYMENT
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.duration}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    OFFICIAL EMAIL
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.officialemail}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    MONTHLY INCOME
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.monthlyincome}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    LOAN REPAYMENT
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {edu.loanrepayment}{" "}
                  </span>
                </div>
              </div>{" "}
            </div>
          ))}
        </div>

        <hr />

        <div>
          {/* SOCIALS  */}
          <span className="text-[var(--royalblue)] text-lg font-medium">
            Socials
          </span>
          {foundUser?.details.socials.map((social, index) => (
            <div className="grid grid-cols-4 gap-6 flex-col mt-6">
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">TWITTER</span>
                  <span className="text-[16px] font-medium  ">
                    {social.twitter}{" "}
                  </span>
                </div>
              </div>
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">FACEBOOK</span>
                  <span className="text-[16px] font-medium  ">
                    {social.facebook}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">INSTAGRAM</span>
                  <span className="text-[16px] font-medium  ">
                    {social.instagram}{" "}
                  </span>
                </div>
              </div>{" "}
            </div>
          ))}
              </div>
              
              <hr />

        <div>
          {/* Gurantor */}
          <span className="text-[var(--royalblue)] text-lg font-medium">
           Gurantor
          </span>
          {foundUser?.details.guarantor.map((gura, index) => (
            <div className="grid grid-cols-4 gap-6 flex-col mt-6">
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">FULL NAME</span>
                  <span className="text-[16px] font-medium  ">
                    {gura.fullname}{" "}
                  </span>
                </div>
              </div>
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    PHONE NUMBER
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {gura.phone}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">
                    EMAIL ADDRESS
                  </span>
                  <span className="text-[16px] font-medium  ">
                    {gura.email}{" "}
                  </span>
                </div>
              </div>{" "}
              <div className="text-[var(--gray)] space-y-2">
                <div className="flex-col flex">
                  <span className="text-[12px] font-[400px] ">RELATIONSHIP</span>
                  <span className="text-[16px] font-medium  ">
                    {gura.relationship}{" "}
                  </span>
                </div>
              </div>{" "}
            
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
