import React from 'react';

interface GoogleAnalyticsProps {
  measurementId: string;
}

export const GoogleAnalytics: React.FC<GoogleAnalyticsProps> = ({ measurementId }) => {
  React.useEffect(() => {
    if (!measurementId) {
      console.warn('Google Analytics measurement ID is missing');
      return;
    }

    // Check if gtag is already loaded
    if (typeof window !== 'undefined' && (window as any).gtag) {
      return;
    }

    // Create script tag for gtag
    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    // Initialize gtag
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}');
    `;
    document.head.appendChild(script2);

    return () => {
      // Cleanup if component unmounts
      const scripts = document.querySelectorAll(`script[src*="gtag/js?id=${measurementId}"]`);
      scripts.forEach(script => script.remove());
      
      const inlineScripts = document.querySelectorAll('script');
      inlineScripts.forEach(script => {
        if (script.innerHTML.includes('gtag')) {
          script.remove();
        }
      });
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;