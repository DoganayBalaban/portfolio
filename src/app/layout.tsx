import "./globals.css";

export const metadata = {
  title: "Doğanay Balaban - Fullstack Developer",
  description:
    "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan, ölçeklenebilir ve performanslı uygulamalar geliştiren fullstack developer. React, Node.js, TypeScript uzmanı.",
  keywords:
    "fullstack developer, react, nodejs, typescript, web development, javascript, frontend, backend",
  authors: [{ name: "Doğanay Balaban" }],
  creator: "Doğanay Balaban",
  openGraph: {
    title: "Doğanay Balaban - Fullstack Developer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan fullstack developer",
    url: "https://doganaybalaban.com",
    siteName: "Doğanay Balaban Portfolio",
    locale: "tr_TR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doğanay Balaban - Fullstack Developer",
    description:
      "Modern web teknolojileri ile kullanıcı deneyimini ön planda tutan fullstack developer",
    creator: "@doganaybalaban",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className="dark scroll-smooth">
      <body className="antialiased dark">
        <main className="relative">{children}</main>
      </body>
    </html>
  );
}
