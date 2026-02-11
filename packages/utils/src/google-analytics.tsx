"use client";

import Script from "next/script"

export type GoogleAnalyticsProps = {
  gaId: string
}

export function GoogleAnalytics({ gaId }: GoogleAnalyticsProps) {
  if (!gaId) {
    return null
  }

  // Validate GA ID format to prevent XSS
  const GA_ID_PATTERN = /^G-[A-Z0-9]+$|^UA-[0-9]+-[0-9]+$/
  if (!GA_ID_PATTERN.test(gaId)) {
    console.warn(`Invalid Google Analytics ID format: ${gaId}`)
    return null
  }

  // Use JSON.stringify to safely escape the gaId value
  const safeGaId = JSON.stringify(gaId)

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', ${safeGaId});
          `,
        }}
      />
    </>
  )
}
