"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import type { PaginationMetaResponse } from "@/lib/types/common.types";

export default function AuctionsPagination({ meta }: { meta: PaginationMetaResponse }) {
	const pathName = usePathname();
	return (
		<div className="mt-10">
			{meta.page > 1 && <Link href={`${pathName}?page=${meta.page - 1}`}>Back</Link>}{" "}
			<span>
				{meta.page} / {meta.totalPages}
			</span>{" "}
			{meta.page < meta.totalPages && (
				<Link href={`${pathName}?page=${meta.page + 1}`}>Forward</Link>
			)}
		</div>
	);
}
