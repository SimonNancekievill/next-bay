import LocaleDateString from "@/components/LocaleDateString";
import { getAuctionById } from "@/lib/auctions.service";
import { getOffersByAuctionId } from "@/lib/offers.service";
import Link from "next/link";
import { notFound } from "next/navigation";

export default async function AuctionDetailPage({
  params,
}: PageProps<"/auctions/[id]">) {
  const { id } = await params;
  const auctionData = await getAuctionById(id);
  console.log("auctionData:", auctionData);
  if (auctionData.statusCode === 404) {
    notFound();
  }

  const offersData = await getOffersByAuctionId(id);

  return (
    <>
      <Link href="/auctions">&#x2B60; Auctions List</Link>
      {auctionData && (
        <>
          {auctionData.title && <h2>{auctionData.title}</h2>}
          {auctionData.description && <p>{auctionData.description}</p>}
          {auctionData.endDate && (
            <p>
              Auction end: <LocaleDateString date={auctionData.endDate} />
            </p>
          )}
          {auctionData.currentPrice && (
            <p>Current price: {auctionData.currentPrice}</p>
          )}
          <h2 className="text-xl mt-3">Bid History</h2>
          {offersData ? (
            <table>
              <thead>
                <tr>
                  <th>Price</th>
                  <th>Bidder</th>
                  <th>Time</th>
                </tr>
              </thead>
              <tbody>
                {offersData.map((offer) => (
                  <tr key={offer.id}>
                    <td>{offer.offerPrice}</td>
                    <td>{offer.bidder.username}</td>
                    <td>
                      <LocaleDateString date={offer.createdAt} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          ) : (
            "No offers yet."
          )}
        </>
      )}
    </>
  );
}
