"use client"

import Script from "next/script"

export default function GoogleAnalytics() {
  const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_ID || "G-WNQ5FXMZQZ"

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });

          // Track form submissions
          gtag('event', 'contact_form_submit', {
            event_category: 'engagement',
            event_label: 'portfolio_contact'
          });

          // Track page views for SPA navigation
          window.addEventListener('popstate', () => {
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_title: document.title,
              page_location: window.location.href,
            });
          });
        `}
      </Script>
    </>
  )
}