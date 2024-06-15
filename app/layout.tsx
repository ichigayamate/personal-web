import "./globals.css"

export const metadata = {
  title: 'Ichigayamate Personal Website',
  description: 'Ichigayamate Personal Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
