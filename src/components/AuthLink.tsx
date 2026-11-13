import { UserRound } from "lucide-react";
import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

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
}
