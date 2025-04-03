import React, { useMemo, useState } from "react";
import Image from "next/image";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number, itemsPerPage: number) => void;
  className: string;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  onPageChange,
  className,
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [perPage, setPerPage] = useState(itemsPerPage);

  const totalPages = Math.ceil(totalItems / perPage);

  const handlePageClick = (pageNumber: number) => {
    if (pageNumber < 1 || pageNumber > totalPages) return;
    setCurrentPage(pageNumber);
    onPageChange(pageNumber, perPage);
  };

  const handleItemsPerPageChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const newPerPage = Number(event.target.value);
    setPerPage(newPerPage);
    setCurrentPage(1);
    onPageChange(1, newPerPage);
  };

  const pageNumbers = useMemo(() => {
    if (totalPages <= 7)
      return Array.from({ length: totalPages }, (_, i) => i + 1);

    const pages: (number | string)[] = [1];

    const showLeftDots = currentPage > 4;
    const showRightDots = currentPage < totalPages - 3;

    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    if (showLeftDots) pages.push("...");

    for (let i = start; i <= end; i++) pages.push(i);

    if (showRightDots) pages.push("...");

    pages.push(totalPages);

    return pages;
  }, [totalPages, currentPage]);

  return (
    <div
      className={`flex items-center text-black justify-between py-4 ${className}`}
    >
      <div className="flex gap-4 text-slate-500 gap-3 block">
        <span className="mt-1.5">Showing </span>
        <div className="items-center justify-center">
          <select
            value={perPage}
            onChange={handleItemsPerPageChange}
            className="px-4 py-2 rounded focus:outline-none bg-slate-200 text-center"
          >
            {[...Array(100)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>

        <span className="mt-1.5"> out of 100</span>
      </div>

      <div className="flex items-center gap-2">
        <button
          onClick={() => handlePageClick(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-2 focus:outline-none bg-slate-200 rounded disabled:opacity-50"
        >
          <Image
            src={"/icons/left.svg"}
            alt={"left"}
            width={6.57}
            height={11.21}
          />
        </button>

        {pageNumbers.map((page, index) => (
          <button
                key={index}
                onClick={() => typeof page === "number" && handlePageClick(page)}
            className="px-2 py-2 text-slate-500"
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => handlePageClick(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-2 focus:outline-none bg-slate-200 rounded disabled:opacity-50"
        >
          <Image
            src={"/icons/right.svg"}
            alt={"right"}
            width={6.57}
            height={11.21}
          />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
