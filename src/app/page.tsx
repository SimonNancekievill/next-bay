"use client";

import { getAuctionById, getAuctions } from "@/lib/auctions.service";
import {
  AuctionResponse,
  PaginatedAuctionsResponse,
} from "@/lib/types/auction.types";
import { useState, useEffect } from "react";

export default function Home() {
  const [auctions, setAuctions] = useState<PaginatedAuctionsResponse>();
  const [testAuction, setTestAuction] = useState<AuctionResponse>();

  useEffect(() => {
    (async () => {
      try {
        const initialAuctions = await getAuctions();
        setAuctions(initialAuctions);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const initialTestAuction = await getAuctionById(
          "bcab90e4-9a65-4b3b-a742-96ad7945d70c",
        );
        setTestAuction(initialTestAuction);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  return (
    <div>
      <ul>
        {auctions &&
          auctions.data.map((auction) => (
            <li key={auction.id}>
              {auction.title}({auction.id})
            </li>
          ))}
      </ul>

      {testAuction && testAuction.title}
    </div>
  );
}
