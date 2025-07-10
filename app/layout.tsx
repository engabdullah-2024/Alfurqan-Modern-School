import 'leaflet/dist/leaflet.css';  // <-- Import Leaflet CSS globally
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: "Alfurqan Modern School",
  description:
    "Founded in 2009 with 3 campuses, offering modern education from Grade 1 to 12.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
