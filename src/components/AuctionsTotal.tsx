import { PaginationMetaResponse } from "@/lib/types/common.types";

export default function AuctionsTotal({
  meta,
}: {
  meta: PaginationMetaResponse;
}) {
  const { page, limit, total } = meta;

  return (
    <p className="mb-5">
      Showing auctions {(page - 1) * limit + 1}–{Math.min(page * limit, total)}{" "}
      of {total}
    </p>
  );
}
