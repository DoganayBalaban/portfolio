import "./globals.css";
import StarsBackground from "../components/StarsBackground"; // yolunu ayarla

export const metadata = {
  title: "Doğanay Balaban",
  description: "Kişisel portfolyo sayfam",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <StarsBackground />
        <main className="relative z-10 flex min-w-screen flex-col items-center justify-between">
          {children}
        </main>
      </body>
    </html>
  );
}
