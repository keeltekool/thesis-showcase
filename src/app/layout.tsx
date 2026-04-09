import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Business Analytics in FP&A: Challenges & Opportunities | Egert Väinaste — TalTech Thesis",
  description: "A qualitative study of 13 Estonian finance leaders on business analytics adoption in FP&A — and how the predictions held up two years later.",
  openGraph: {
    title: "Business Analytics in FP&A | Egert Väinaste — TalTech",
    description: "Master's thesis exploring business analytics challenges and opportunities in financial planning & analysis. 13 expert interviews, 7 CFOs, 6 BA consultants.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,200..800;1,6..72,200..800&family=Inter:wght@100..900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-full flex flex-col selection:bg-secondary/30 selection:text-secondary">
        {children}
      </body>
    </html>
  );
}
