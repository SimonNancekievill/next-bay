import {
  AuctionResponse,
  PaginatedAuctionsResponse,
} from "./types/auction.types";
import { PaginationMetaResponse } from "./types/common.types";

export async function getAuctions({
  page,
}: Partial<PaginationMetaResponse>): Promise<PaginatedAuctionsResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions?page=${page}`,
  );
  // if (!response.ok) {
  //   // throw new Error("Failed to fetch auctions.");
  //   notFound()
  // }
  const auctionsData = await response.json();
  return { data: auctionsData.data, meta: auctionsData.meta };
}

export async function getAuctionById(id: string): Promise<AuctionResponse> {
  const response = await fetch(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions/${id}`,
  );
  // if (!response.ok) {
  //   throw new Error("Failed to fetch auctions.");
  // }
  const auctionData = await response.json();
  return auctionData;
}
