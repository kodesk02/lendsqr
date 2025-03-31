import React from "react";
import Image from "next/image";

const sideMenu = [
  {
    topic: "Switch Organization",
    title: "Dashboard",
    icon: "/icons/briefcase 1.svg",
    subIcon: "/icons/home 1.svg",
    subTopic: [
      {
        id: 1,
        title: "CUSTOMERS",
        subMenu: [
          {
            title: "Users",
            icon: "/icons/user-friends 1.svg",
          },
          {
            title: "Guarantors",
            icon: "/icons/users 1.svg",
          },
          {
            title: "Loans",
            icon: "/icons/sack 1.svg",
          },
          {
            title: "Decision Models",
            icon: "/icons/handshake-regular 1.svg",
          },
          {
            title: "Savings",
            icon: "/icons/piggy-bank 1.svg",
          },
          {
            title: "Loan Requests",
            icon: "/icons/Group 104.svg",
          },
          {
            title: "Whitelist",
            icon: "/icons/user-check 1.svg",
          },
          {
            title: "Karma",
            icon: "/icons/user-times 1.svg",
          },
        ],
      },
      {
        id: 2,
        title: "BUSINESSES",
        subMenu: [
          {
            title: "Organization",
            icon: "/icons/briefcase 1.svg",
          },
          {
            title: "Loan Products",
            icon: "/icons/Group 104.svg",
          },
          {
            title: "Savings Products",
            icon: "/icons/np_bank_148501_000000 1.svg",
          },
          {
            title: "Fees and Charges",
            icon: "/icons/coins-solid 1.svg",
          },
          {
            title: "Transactions",
            icon: "/icons/icon.svg",
          },
          {
            title: "Services",
            icon: "/icons/galaxy 1.svg",
          },
          {
            title: "Service Account",
            icon: "/icons/user-cog 1.svg",
          },
          {
            title: "Settlements",
            icon: "/icons/scroll 1.svg",
          },
          {
            title: "Reports",
            icon: "/icons/chart-bar 2.svg",
          },
        ],
      },
      {
        id: 3,
        title: "SETTINGS",
        subMenu: [
          {
            title: "Preferences",
            icon: "/icons/sliders-h 1.svg",
          },
          {
            title: "Fees and Pricing",
            icon: "/icons/badge-percent 1.svg",
          },
          {
            title: "Audit Logs",
            icon: "/icons/clipboard-list 1.svg",
          },
        ],
      },
    ],
  },
];

const Sidebar = () => {
  return (
    <aside className="w-64 shadow-lg text-[var(--royalblue)] p-4 space-y-4">
      {sideMenu.map((section, idx) => (
        <div key={idx}>
          <div className="flex gap-4 p-4">
            <Image
              src={section.icon}
              alt={`broken ${section.title}`}
              width={20}
              height={20}
            />
            <span>{section.topic}</span>
          </div>
          <div className="flex gap-4 p-4">
            <Image
              src={section.subIcon}
              alt={`broken ${section.title}`}
              width={20}
              height={20}
            />
            <span>{section.title}</span>
          </div>

          {section.subTopic.map((top, index) => (
            <div key={index}>
              <span className="text-xs text-[var(--gray)] p-4 space-y-4">
                {top.title}
              </span>
              {top.subMenu.map((list, idx) => (
                <ul className="space-y-2 hover:border-l-4 hover:text-[var(--royalblue)] hover:border-[var(--primary)] hover:bg-[var(--secondary)] " key={idx}>
                  <div className="flex gap-4 p-4">
                    <Image
                      src={list.icon}
                      alt={`icon ${list.title}`}
                      width={20}
                      height={20}
                    />
                    <h3 className="text-[var(--gray)]">{list.title}</h3>
                  </div>
                </ul>
              ))}
            </div>
          ))}
        </div>
      ))}
    </aside>
  );
};

export default Sidebar;
