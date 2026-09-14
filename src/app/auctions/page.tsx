import { getAuctions } from "@/lib/auctions.service";
import Link from "next/link";

export default async function AuctionsListPage() {
  const auctionsData = await getAuctions();
  return (
    <>
      <ul>
        {auctionsData &&
          auctionsData.data.map((auction) => (
            <li key={auction.id}>
              <Link href={`/auctions/${auction.id}`}>
                {auction.title}({auction.id})
              </Link>
            </li>
          ))}
      </ul>
    </>
  );
}
