import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "e.d.i.PHI – Beauty & Health in Medicine",
  description:
    "Library, webinars, podcasts, clinician & patient resources, and a publications catalog.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* suppressHydrationWarning avoids errors from browser extensions like Grammarly */}
      <body suppressHydrationWarning className="bg-canvas text-ink antialiased">
        {children}
      </body>
    </html>
  );
}
