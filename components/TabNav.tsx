import React, { useState } from "react";

interface Tab {
  label: string;
  content?: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultIndex?: number;
  className?: string;
}

const Tabs: React.FC<TabsProps> = ({ tabs, defaultIndex = 0, className }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className={`w-full ${className || ""}`}>
      {/* Tab Labels */}
      <div className="flex space-x-8 border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`py-2 px-3 font-medium transition-all duration-200 ${
              index === activeIndex
                ? "border-b-2 border-[var(--primary)] text-[var(--primary)]"
                : "text-gray-700 hover:text-[var(--primary)]"
            }`}
            onClick={() => setActiveIndex(index)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="">{tabs[activeIndex]?.content}</div>
    </div>
  );
};

export default Tabs;