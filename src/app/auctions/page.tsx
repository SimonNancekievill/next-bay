import AuctionsPagination from "@/components/AuctionsPagination";
import AuctionsTotal from "@/components/AuctionsTotal";
import { getAuctions } from "@/lib/auctions.service";
import { SearchParams } from "next/dist/server/request/search-params";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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
          <AuctionsTotal meta={auctionsData.meta} />
          <ul>
            {auctionsData.data.map((auction) => (
              <li key={auction.id}>
                <Card className="my-5">
                  <CardHeader>
                    <Link href={`/auctions/${auction.id}`}>
                      <CardTitle>
                        <h3>{auction.title}</h3>
                      </CardTitle>
                    </Link>
                  </CardHeader>
                  <CardContent>{auction.currentPrice} $</CardContent>
                  <CardFooter>{auction.id}</CardFooter>
                </Card>
              </li>
            ))}
          </ul>
          <AuctionsPagination meta={auctionsData.meta} />
        </>
      )}
    </>
  );
}
