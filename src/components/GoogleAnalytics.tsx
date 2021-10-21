import Script from 'next/script'
import { GA_ID } from 'utils/gtag'

const GoogleAnalytics = () => (
  <>
    {GA_ID && (
      <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} />
        <Script>
          {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());    
              gtag('config', '${GA_ID}', {
                page_path: window.location.pathname,
              });
          `}
        </Script>
      </>
    )}
  </>
)

export default GoogleAnalytics