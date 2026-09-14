import { getAuctionById } from "@/lib/auctions.service";

export default async function AuctionDetailPage({
  params,
}: PageProps<"/auctions/[id]">) {
  const { id } = await params;
  const auctionData = await getAuctionById(id);

  return <>{auctionData && auctionData.title}</>;
}
