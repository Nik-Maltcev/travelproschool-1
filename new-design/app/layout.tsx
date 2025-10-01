import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin", "cyrillic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TravelProSchool — Современная платформа обучения турагентов",
  description:
    "Обновленная платформа TravelProSchool с интерактивными форматами обучения, экспертной поддержкой и инструментами для карьерного роста в туризме.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <body className={jakarta.className}>{children}</body>
    </html>
  );
}
