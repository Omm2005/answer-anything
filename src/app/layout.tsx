import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";

const inter = Inter({ subsets: ["latin"] });

const title = "Answer Anything";
const description = "Ask the supercomputer anything and it will give you the answer. This is inspired by the book &quot;Elon Musk&quot; by Walter Isaacson.";
const image = "https://utfs.io/f/92846263-0f19-44f9-95ca-5e971e6393de-7fx5g1.jpg"

export const metadata: Metadata = {
  title,
  description,
  icons: ["https://utfs.io/f/0deb1b21-ff75-462f-879e-a4c4f5b3d68b-hru0oc.ico"],
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
  metadataBase: new URL("https://utfs.io"),
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
            enableSystem
            defaultTheme="system"
            disableTransitionOnChange
          >
        {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
