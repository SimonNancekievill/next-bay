import { registerAction } from "@/app/action";
import { Button, buttonVariants } from "@/components/ui/button";
import {
	Card,
	CardAction,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export function UserRegistration() {
	return (
		<Card className="w-full max-w-sm">
			<CardHeader>
				<CardTitle>Sign up to NextBay</CardTitle>
				<CardDescription>
					Enter a unique username and password below to create an account
				</CardDescription>
				<CardAction>
					<Link href="/register" className={buttonVariants({ variant: "link" })}>
						Sign Up
					</Link>
				</CardAction>
			</CardHeader>
			<CardContent>
				<form action={registerAction}>
					<div className="flex flex-col gap-6">
						<div className="grid gap-2">
							<Label htmlFor="username">Username</Label>
							<Input
								id="username"
								name="username"
								type="text"
								placeholder="johndoe"
								required
							/>
						</div>
						<div className="grid gap-2">
							<Label htmlFor="password">Password</Label>
							<Input
								id="password"
								name="password"
								type="password"
								placeholder="*****"
								required
							/>
						</div>
					</div>
					<div className="flex-col gap-2">
						<Button type="submit" className="w-full">
							Login
						</Button>
					</div>
				</form>
			</CardContent>
		</Card>
	);
}
