import "./globals.css"
export const metadata = {
  title: "Frontend Mentor | Job Listings",
  description: "Frontend Mentor | Job Listings",
  manifest: "/manifest.json",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  )
}
