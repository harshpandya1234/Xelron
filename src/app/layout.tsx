import type { Metadata } from "next";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Project 1",
  description: "We believe in a future where computers are lifelike. Where they can see, hear, and collaborate with us – as we do with each other. With this vision, we're designing a new kind of computer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
<div className="flex flex-col md:flex-row min-h-screen">
          <Sidebar />
  <div className="flex-1 ml-64">
            <main className="min-h-screen">
              {children}
            </main>
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
