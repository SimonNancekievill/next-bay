import { UserRound } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserLogin } from "./UserLogin";
import { isAuthenticated } from "@/app/action";
import { UserLogout } from "./UserLogout";
import Link from "next/link";

export async function AuthLink() {
	return (
		<Link href="/login">
			<span className={`${buttonVariants({ variant: "outline", size: "icon" })}`}>
				<UserRound className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
				<UserRound className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
				<span className="sr-only">Toggle Auth</span>
			</span>
		</Link>
	);

	/*
	const isLoggedIn: boolean = await isAuthenticated();


	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<span className={`${buttonVariants({ variant: "outline", size: "icon" })}`}>
					<UserRound className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:scale-0 dark:-rotate-90" />
					<UserRound className="absolute h-[1.2rem] w-[1.2rem] scale-0 rotate-90 transition-all dark:scale-100 dark:rotate-0" />
					<span className="sr-only">Toggle Auth</span>
				</span>
			</DropdownMenuTrigger>
			<DropdownMenuContent className="w-full max-w-sm" align="end">
				<DropdownMenuItem className="w-full max-w-sm">
					{isLoggedIn ? <UserLogout /> : <UserLogin />}
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
	*/
}
