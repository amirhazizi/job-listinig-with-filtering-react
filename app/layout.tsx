import "./globals.css"
import { League_Spartan } from "next/font/google"

// const leagueSpartan = League_Spartan({
//   weight: ["500", "700"],
//   subsets: ["latin"],
// })

export const metadata = {
  title: "Frontend Mentor | Job Listings",
  description: "Frontend Mentor | Job Listings",
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
