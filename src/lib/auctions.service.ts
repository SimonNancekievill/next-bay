import {
  AuctionResponse,
  PaginatedAuctionsResponse,
} from "./types/auction.types";

export async function getAuctions(): Promise<PaginatedAuctionsResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + "/auctions",
  );
  if (!response.ok) {
    throw new Error("Failed to fetch auctions.");
  }
  const auctionsData = await response.json();
  return { data: auctionsData.data, meta: auctionsData.meta };
}

export async function getAuctionById(id: string): Promise<AuctionResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions/${id}`,
  );
  if (!response.ok) {
    throw new Error("Failed to fetch auctions.");
  }
  const auctionData = await response.json();
  return auctionData;
}
