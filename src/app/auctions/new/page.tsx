import { createAuctionAction, isAuthenticated } from "@/app/action";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { unauthorized } from "next/navigation";

export default async function NewAuctionPage() {
  const isLoggedIn: boolean = await isAuthenticated();
  if (!isLoggedIn) {
    unauthorized();
  }

  return (
    <>
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle>New Auction</CardTitle>
          <CardDescription>
            Fill in the information for your new auction.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={createAuctionAction}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="title">Title</Label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="tomato"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="description">Description</Label>
                <Input
                  id="description"
                  name="description"
                  type="text"
                  placeholder="pomodoro"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="startingPrice">Starting price ($)</Label>
                <Input
                  id="startingPrice"
                  name="startingPrice"
                  type="number"
                  step="1"
                  min="1"
                  placeholder="5000"
                  required
                />
              </div>
            </div>
            <div className="flex-col gap-2">
              <Button type="submit" className="w-full">
                Create
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
