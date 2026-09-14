"use client";

import { getAuctions } from "@/lib/auctions.service";
import { PaginatedAuctionsResponse } from "@/lib/types/auction.types";
import { useEffect, useState } from "react";

export default function AuctionsPage() {
  const [auctions, setAuctions] = useState<PaginatedAuctionsResponse>();

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

  return (
    <>
      <ul>
        {auctions &&
          auctions.data.map((auction) => (
            <li key={auction.id}>
              {auction.title}({auction.id})
            </li>
          ))}
      </ul>
    </>
  );
}
