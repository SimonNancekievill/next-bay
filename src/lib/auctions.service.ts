import { fetchAPI } from "./fetchAPI";
import {
  AuctionResponse,
  NewAuction,
  PaginatedAuctionsResponse,
} from "./types/auction.types";
import { PaginationMetaResponse } from "./types/common.types";

export async function getAuctions({
  page,
}: Partial<PaginationMetaResponse>): Promise<PaginatedAuctionsResponse> {
  const response = await fetchAPI(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions?page=${page}`,
  );

  const auctionsData = await response.json();
  return { data: auctionsData.data, meta: auctionsData.meta };
}

export async function getAuctionById(id: string): Promise<AuctionResponse> {
  const response = await fetchAPI(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + `/auctions/${id}`,
  );
  const auctionData = await response.json();
  return auctionData;
}

export async function createAuction({
  title,
  description,
  startingPrice,
}: NewAuction): Promise<AuctionResponse> {
  const response = await fetchAPI(
    process.env.NEXT_PUBLIC_DARKBAY_API_URL + "/auctions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description, startingPrice }),
    },
  );
  const auctionData = await response.json();

  return auctionData;
}
