import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

const title = "Answer Anything";
const description = "Ask the supercomputer anything and it will give you the answer. This is inspired by the book &quot;Elon Musk&quot; by Walter Isaacson.";
const image = "https://omm.needs.rest/answer_it.jpg"

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://omm.needs.rest/favicon-for-website.ico"],
  openGraph: {
    title,
    description,
    images: [image],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [image],
    creator: "@maiommhoon",
  },
  metadataBase: new URL("https://omm.needs.rest"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
