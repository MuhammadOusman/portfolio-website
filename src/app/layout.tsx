import type { Metadata } from "next";
import { Space_Grotesk, JetBrains_Mono, Syne } from "next/font/google";
import "./globals.css";
import CustomCursor from "@/components/ui/CustomCursor";
import NoiseOverlay from "@/components/ui/NoiseOverlay";
import HalftoneFilters from "@/components/ui/HalftoneFilters";
import SmoothScrollProvider from "@/providers/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-body",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  title: "Muhammad Ousman Sohail | Portfolio",
  description: "Full-Stack Developer, Flutter Enthusiast, MERN Expert.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  if (typeof window !== "undefined") {
    console.log(
      "%cSTOP!",
      "color: #002DFF; font-size: 50px; font-weight: bold; -webkit-text-stroke: 1px black;"
    );
    console.log(
      "%cThis is a browser feature intended for developers. If someone told you to copy and paste something here to enable a feature or 'hack' someone's account, it is a scam.",
      "font-size: 16px;"
    );
  }

  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${syne.variable} ${spaceGrotesk.variable} ${jetBrainsMono.variable} font-body bg-newsprint text-jet antialiased selection:bg-cobalt selection:text-white overflow-x-hidden`}
      >
        <SmoothScrollProvider>
          <NoiseOverlay />
          <CustomCursor />
          <HalftoneFilters />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
