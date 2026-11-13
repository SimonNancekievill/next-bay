import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import Link from "next/link";

import { AuthLink } from "@/components/AuthLink";
import { ModeToggle } from "@/components/ModeToggle";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";

const areal = localFont({
	src: "../../public/font/ABCArealVariable.woff2",
	variable: "--font-areal",
});

const arealMono = localFont({
	src: "../../public/font/ABCArealMonoVariable.woff2",
	variable: "--font-areal-mono",
});

export const metadata: Metadata = {
	title: "nextBay",
	description: "your underground auction page",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
	return (
		<html
			lang="en"
			className={cn("h-full", "antialiased", areal.variable, arealMono.variable, "font-mono")}
			suppressHydrationWarning
		>
			<body className="flex min-h-full flex-col">
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange
				>
					<header className="mb-5 flex flex-row justify-between p-3">
						<h1 className="font-areal text-3xl">
							<Link href="/">nextBay</Link>
						</h1>
						<div>
							<ModeToggle />
							<AuthLink />
						</div>
					</header>
					<main className="p-3">{children}</main>
				</ThemeProvider>
			</body>
		</html>
	);
}
