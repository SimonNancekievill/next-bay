"use client";

import { PaginationMetaResponse } from "@/lib/types/common.types";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AuctionsPagination({
  meta,
}: {
  meta: PaginationMetaResponse;
}) {
  const pathName = usePathname();
  console.log(pathName);
  return (
    <div className="mt-10">
      {meta.page > 1 && (
        <Link href={`${pathName}?page=${meta.page - 1}`}>Back</Link>
      )}{" "}
      <span>
        {meta.page} / {meta.totalPages}
      </span>{" "}
      {meta.page < meta.totalPages && (
        <Link href={`${pathName}?page=${meta.page + 1}`}>Forward</Link>
      )}
    </div>
  );
}
