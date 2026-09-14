import { getAuctionById } from "@/lib/auctions.service";
import { getOffersByAuctionId } from "@/lib/offers.service";
import { Fragment } from "react/jsx-runtime";

export default async function AuctionDetailPage({
  params,
}: PageProps<"/auctions/[id]">) {
  const { id } = await params;
  const auctionData = await getAuctionById(id);

  const offersData = await getOffersByAuctionId(id);

  return (
    <>
      {auctionData && auctionData.title}
      <h2 className="text-xl mt-3">Offers</h2>
      {offersData ? (
        <ol>
          {offersData.map((offer) => (
            <li key={offer.id}>{offer.offerPrice}</li>
          ))}
        </ol>
      ) : (
        "No offers yet."
      )}
    </>
  );
}
