import "./globals.css";
import Header from "@/components/common/Header";

export const metadata = {
  title: "Wärmemacher",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Header />
        <main className="flex-grow">{children}</main>
      </body>
    </html>
  );
}
