import Image from "next/image";

interface AvatarProps {
  img: string;
  name: string;
}

export default function Avatar({ img, name }: AvatarProps) {
  return (
    <div className="flex gap-4">
      <Image
        src={img}
        alt={`rounded ${name}`}
        width={48}
        height={48}
        className="rounded-full"
      />
      <div className="mt-4 flex gap-2 block">
        <span className="text-[var(--royalblue)] ">{name}</span>
        <img
          className="mb-1.5"
          src="/icons/arrow.svg"
          alt="Dropdown"
          width={10}
          height={10}
        />
      </div>
    </div>
  );
}
