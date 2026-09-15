"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <Link href="/auctions">&#x2B60; Auctions List </Link>
      <h2>This is not the auction you are looking for.</h2>
    </main>
  );
}
