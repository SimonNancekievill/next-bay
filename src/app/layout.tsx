import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/ModeToggle";
import { AuthLink } from "@/components/AuthLink";
import localFont from "next/font/local";

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
      className={cn(
        "h-full",
        "antialiased",
        areal.variable,
        arealMono.variable,
        "font-mono",
      )}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="mb-5 p-3 flex flex-row justify-between">
            <h1 className="text-3xl font-areal">
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
