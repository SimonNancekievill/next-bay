import { UserResponse } from "./user.types";

export type OfferResponse = {
  id: string;
  bidder: UserResponse;
  offerPrice: number;
  auctionId: string;
  createdAt: Date;
};
