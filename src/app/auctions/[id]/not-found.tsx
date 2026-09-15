"use client";

import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h2>This is not the drink you are looking for.</h2>
      <Link href="/auctions">Auctions List -&gt;</Link>
    </main>
  );
}
