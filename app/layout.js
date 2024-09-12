import localFont from "next/font/local";
import "./globals.css";
import Header from "./_components/Header";
import NextAuthSessionProvider from "./provider";
import { Toaster } from "sonner";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Home Service App",
  description: "A Home Service App is a platform that connects users with professional service providers for various home-related tasks such as cleaning, plumbing, electrical work, handyman services, and more. Through the app, users can schedule appointments, receive quotes, track the progress of their service, and make payments—all in one convenient place. Service providers can also manage their schedules, accept bookings, and communicate with customers efficiently.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextAuthSessionProvider>
          <div className="mx-6 md:mx-16">
            <Header />
            <Toaster/>
            {children}
          </div>
        </NextAuthSessionProvider>
      </body>
    </html>
  );
}
