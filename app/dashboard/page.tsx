"use client";

import { useEffect, useState } from "react";
import Card from "@/components/Cards";
import React from "react";
import UserTable from "./user/UserTable";

interface CardProps {
  title: string;
  icon: string;
  count: number;
}

const Dashboard = () => {
  const [cards, setCards] = useState<CardProps[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/cards")
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className=" p-6 pt-4">
      <h2 className="text-[var(--royalblue)] text-2xl font-semibold mb-6">Users</h2>
      <div className="grid grid-cols-4 gap-6 space-y-3">
        {cards.map((card, index) => (
          <div key={index} className="">
            <Card title={card.title} icon={card.icon} count={card.count} />
          </div>
        ))}
      </div>
      <div>
        <UserTable/>
      </div>
    </div>
  );
};

export default Dashboard;
