import "./globals.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Theme from "./components/MaterialUITheme";
import { Analytics } from "@vercel/analytics/react";

/*import { Inter as FontSans } from "next/font/google";
import { ThemeProvider } from "./components/shadcnThemeProvider";
import { cn } from "../lib/utils";

export const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});*/

export const metadata = {
  title: {
    template: "%s | Portfolio",
    default: "Portfolio",
  },
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Theme>
          <Navbar />
          {children}
          <Footer />
        </Theme>
        <Analytics />
      </body>
    </html>
  );
}
