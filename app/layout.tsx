import "./globals.css"
import type React from "react" // Import React

export const metadata = {
  title: "Listerr - Reconnect with your audience",
  description: "Reconnect with your audience through meaningful engagement",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Baloo+2:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-baloo bg-white">{children}</body>
    </html>
  )
}
