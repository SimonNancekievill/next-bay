import { OfferResponse } from "./types/offer.types";

export async function getOffersByAuctionId(
  auctionId: string,
): Promise<OfferResponse[]> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions/${auctionId}/offers`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch offers.");
  }
  const offersData = await response.json();
  return offersData;
}
