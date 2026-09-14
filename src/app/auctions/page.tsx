import AuctionsPagination from "@/components/AuctionsPagination";
import { getAuctions } from "@/lib/auctions.service";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";

export default async function AuctionsListPage({
  searchParams,
}: {
  searchParams: Partial<SearchParams>;
}) {
  const params = await searchParams;
  const page = Number(params.page) || 1;

  const auctionsData = await getAuctions({ page });

  return (
    <>
      {auctionsData && (
        <>
          <ul>
            {auctionsData.data.map((auction) => (
              <li key={auction.id}>
                <Link href={`/auctions/${auction.id}`}>
                  {auction.title}({auction.id})
                </Link>
              </li>
            ))}
          </ul>
          <AuctionsPagination meta={auctionsData.meta} />
        </>
      )}
    </>
  );
}
