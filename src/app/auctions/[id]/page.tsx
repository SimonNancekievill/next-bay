import Link from "next/link";
import { notFound } from "next/navigation";

import LocaleDateString from "@/components/LocaleDateString";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { getAuctionById } from "@/lib/auctions.service";
import { getOffersByAuctionId } from "@/lib/offers.service";

export default async function AuctionDetailPage({ params }: PageProps<"/auctions/[id]">) {
	const { id } = await params;
	const auctionData = await getAuctionById(id);

	if (auctionData.statusCode === 404) {
		notFound();
	}

	const offersData = await getOffersByAuctionId(id);

	return (
		<>
			<Link href="/auctions">&#x2B60; Auctions List</Link>
			{auctionData && (
				<Card>
					<CardHeader>
						<CardTitle>{auctionData.title && <h2>{auctionData.title}</h2>}</CardTitle>
					</CardHeader>
					<CardContent>
						{" "}
						<CardDescription>
							{auctionData.description && <p>{auctionData.description}</p>}
						</CardDescription>
						{auctionData.endDate && (
							<p>
								Auction end: <LocaleDateString date={auctionData.endDate} />
							</p>
						)}
						{auctionData.currentPrice && (
							<p>Current price: {auctionData.currentPrice} $</p>
						)}
						<h2 className="mt-5 text-xl">Bid History</h2>
						{offersData ? (
							<Table>
								<TableHeader>
									<TableRow>
										<TableHead>Price</TableHead>
										<TableHead>Bidder</TableHead>
										<TableHead>Time</TableHead>
									</TableRow>
								</TableHeader>
								<TableBody>
									{offersData.map((offer) => (
										<TableRow key={offer.id}>
											<TableCell>{offer.offerPrice} $</TableCell>
											<TableCell>{offer.bidder.username}</TableCell>
											<TableCell>
												<LocaleDateString date={offer.createdAt} />
											</TableCell>
										</TableRow>
									))}
								</TableBody>
							</Table>
						) : (
							"No offers yet."
						)}
					</CardContent>
				</Card>
			)}
		</>
	);
}
