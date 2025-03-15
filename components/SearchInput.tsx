import Image from "next/image";

interface SearchProps {
  value: string;
  placeholder: string;
  // icon?: React.ReactNode;
  onChange: (value: string) => void;
  onSubmit: (value: string) => void;
}

export default function SearchInput({
  placeholder,
  // icon,
  value,
  onChange,
  onSubmit,
}: SearchProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(value);
  };
  return (
    <form className="flex relative items-center border border-slate-300 text-black rounded-lg">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        className="flex-1 px-4 py-2 w-[400px] focus:outline-none"
        onChange={(e) => onChange(e.target.value)}
      />
      <button
        onSubmit={handleSubmit}
        className="bg-[var(--primary)] absolute flex items-center justify-center right-0 p-2 pl-4 rounded-r-lg h-full"
      >
        <Image
          src={"/icons/search.svg"}
          alt={"Search"}
          width={20}
          height={20}
          className="mr-4"
        />
      </button>
    </form>
  );
}
