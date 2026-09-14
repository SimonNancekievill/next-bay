import { PaginationMetaResponse } from "./common.types";
import { User } from "./user.types";

export type AuctionResponse = {
  id: string;
  title: string;
  description: string;
  seller: User;
  startingPrice: number;
  createdAt: Date;
  endDate: Date;
};

export type PaginatedAuctionsResponse = {
  data: AuctionResponse[];
  meta: PaginationMetaResponse;
};
