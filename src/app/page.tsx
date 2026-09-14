"use client";

import { getAuctionById } from "@/lib/auctions.service";
import { AuctionResponse } from "@/lib/types/auction.types";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const [testAuction, setTestAuction] = useState<AuctionResponse>();

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
    <>
      <Link href="/auctions">Auctions List -&gt;</Link>
      {testAuction && testAuction.title}
    </>
  );
}
