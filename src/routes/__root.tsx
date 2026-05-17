import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'
import '../styles.css'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { title: 'Harrygrace International Logistics Venture | Lagos to the World' },
      { name: 'description', content: 'Harrygrace International Logistics Venture — fast, reliable international shipping and logistics from Lagos, Nigeria to destinations worldwide. Air freight, sea freight, door-to-door delivery, and customs clearance.' },
      { name: 'keywords', content: 'international logistics Lagos, shipping Nigeria, air freight, sea freight, customs clearance, cargo delivery, Harrygrace logistics' },
      { property: 'og:title', content: 'Harrygrace International Logistics Venture' },
      { property: 'og:description', content: 'Fast & Reliable International Logistics From Lagos To The World' },
      { property: 'og:type', content: 'website' },
    ],
    links: [
      { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossOrigin: 'anonymous' },
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Syne:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&display=swap',
      },
      { rel: 'icon', href: '/favicon.ico' },
    ],
  }),
  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  )
}
