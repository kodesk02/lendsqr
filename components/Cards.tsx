import Image from "next/image";

interface CardProps {
  title: string;
  icon: string;
  count: number;
}

export default function Card({ title, icon, count }: CardProps) {
  return (
    <div className="bg-white p-6 shadow-md rounded-md">
      <div className="flex flex-col space-y-3">
        <Image src={icon} alt={`card of ${title}`} height={40} width={40} />
        <span className="text-xs text-[var(--gray)] ">{title.toUpperCase()}</span>
        <h2 className="text-[var(--royalblue)] text-2xl font-semibold">{count.toLocaleString()}</h2>
      </div>
    </div>
  );
}
