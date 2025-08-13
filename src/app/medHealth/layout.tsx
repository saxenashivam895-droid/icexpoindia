import type React from "react"
import type { Metadata } from "next"
import { Inter, Philosopher } from "next/font/google"
import "../landingpage.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

const philosopher = Philosopher({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-philosopher",
})

export const metadata: Metadata = {
  title: "Medhealth Pharma Expo 2026 | South Asia's Largest Pharma Exhibition",
  description:
    "Join industry leaders at MedHealth Pharma Expo 2026, a premier 3-day event from 12-14 May at Penang Waterfront Convention Centre. Explore Challenges, Innovations, Opportunities, and Advanced Technologies transforming the Pharma and Healthcare industries.",
  keywords: "pharma expo, medical exhibition, healthcare conference, pharmaceutical trade show, Malaysia, Penang",
  openGraph: {
    title: "Medhealth Pharma Expo 2026",
    description: "South Asia's Largest Pharma Exhibition - 12-14 May 2026",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=National+Park:wght@200..800&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Special+Gothic+Condensed+One&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.carousel.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/assets/owl.theme.default.min.css"
        />
      </head>
      <body className={`${inter.variable} ${philosopher.variable}`}>
        {children}
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
          crossOrigin="anonymous"
        ></script>
        <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/OwlCarousel2/2.3.4/owl.carousel.min.js"></script>
      </body>
    </html>
  )
}
