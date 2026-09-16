import { PaginationMetaResponse } from "./common.types";
import { UserResponse } from "./user.types";

export type AuctionResponse = {
  id: string;
  title: string;
  description: string;
  seller: UserResponse;
  startingPrice: number;
  currentPrice: number;
  createdAt: Date;
  endDate: Date;
  statusCode?: number;
  message?: string;
};

export type NewAuction = Pick<
  AuctionResponse,
  "title" | "description" | "startingPrice"
>;

export type PaginatedAuctionsResponse = {
  data: AuctionResponse[];
  meta: PaginationMetaResponse;
};
