# Google Analytics Configuration

This monorepo includes Google Analytics tracking across all applications following Next.js best practices and proper separation of concerns.

## Overview

Google Analytics is implemented using:
- **Google Analytics (gtag.js)** - The Global Site Tag library for Google Analytics
- **Next.js Script component** - For optimal loading performance with `afterInteractive` strategy
- **Environment variables** - For secure configuration management
- **Reusable component** - Shared across all apps via `@repo/utils` package

## Configuration

### 1. Environment Variables

Each app requires the `NEXT_PUBLIC_GA_ID` environment variable to be set.

**For development:**
Copy the `.env.local.example` file to `.env.local` in each app directory:

```bash
# In apps/client-a, apps/client-b, or apps/akiapolaau
cp .env.local.example .env.local
```

**For production:**
Set the environment variable in your deployment platform (e.g., Vercel):

```
NEXT_PUBLIC_GA_ID=G-X7KFRJYWBL
```

### 2. Tracking ID

The current Google Analytics tracking ID is: **G-X7KFRJYWBL**

To use a different tracking ID:
1. Update the value in `.env.local` for local development
2. Update the environment variable in your deployment platform for production

## Implementation Details

### Component Architecture

The implementation follows the principle of separation of concerns:

1. **Data Layer** (`@repo/utils/google-analytics.tsx`)
   - Manages the `window.dataLayer` array
   - Initializes gtag function
   - Configures tracking with the provided GA ID

2. **Structure** (App layouts)
   - Conditionally renders the GoogleAnalytics component
   - Only loads when `NEXT_PUBLIC_GA_ID` is defined
   - Placed in the root layout for site-wide tracking

### Script Loading Strategy

The implementation uses Next.js's `Script` component with `strategy="afterInteractive"`:
- Scripts load after the page becomes interactive
- Doesn't block initial page render
- Optimal for analytics and tracking scripts

### Data Layer

The Google Analytics data layer is initialized in the component:
```javascript
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'YOUR-GA-ID');
```

## Usage in Apps

The GoogleAnalytics component is automatically included in:
- **client-a** - `/apps/client-a/src/app/layout.tsx`
- **client-b** - `/apps/client-b/src/app/layout.tsx`
- **akiapolaau** - `/apps/akiapolaau/src/app/layout.tsx`

Example usage:
```tsx
import { GoogleAnalytics } from '@repo/utils';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        {process.env.NEXT_PUBLIC_GA_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID} />
        )}
        {children}
      </body>
    </html>
  );
}
```

## Privacy Considerations

- The `NEXT_PUBLIC_` prefix makes this variable accessible in the browser
- Only basic pageview tracking is enabled by default
- Consider adding cookie consent management for GDPR compliance
- Review Google's data processing terms and privacy policy

## Verification

To verify Google Analytics is working:

1. **Development:**
   ```bash
   bun run dev
   ```
   Open browser DevTools → Network tab → Filter by "gtag"
   You should see requests to `googletagmanager.com`

2. **Production:**
   Use [Google Tag Assistant](https://tagassistant.google.com/) browser extension
   Or check Google Analytics Real-Time reports

## Advanced Configuration

To add custom events or enhanced tracking:

```tsx
// In your component
const handleClick = () => {
  if (window.gtag) {
    window.gtag('event', 'button_click', {
      event_category: 'engagement',
      event_label: 'cta_button'
    });
  }
};
```

## Troubleshooting

**Analytics not loading:**
- Verify `NEXT_PUBLIC_GA_ID` is set in `.env.local`
- Check browser console for errors
- Ensure ad blockers are disabled for testing

**Wrong tracking ID:**
- Update the environment variable
- Restart the development server
- Clear browser cache

## References

- [Next.js Script Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/scripts)
- [Google Analytics for Web](https://developers.google.com/analytics/devguides/collection/gtagjs)
- [Google Analytics gtag.js Reference](https://developers.google.com/tag-platform/gtagjs)
