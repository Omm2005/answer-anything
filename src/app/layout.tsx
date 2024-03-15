import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import metaImage from '@/../public/Answers-anythng.jpg'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Answer Anything",
  description: "Ask the supercomputer anything and it will give you the answer. This is inspired by the book &quot;Elon Musk&quot; by Walter Isaacson.",
  openGraph: {
    title: "Answer Anything",
    description: "Ask the supercomputer anything and it will give you the answer. This is inspired by the book &quot;Elon Musk&quot; by Walter Isaacson.",
    type: "website",
    url: metaImage.src,
    images: [`${metaImage.src}`],
  },
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
