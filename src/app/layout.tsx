import { ReactNode } from 'react';
import { Providers } from '../store/provider';
import ThemeRegistry from '../components/themeRegistry';

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <ThemeRegistry>{children}</ThemeRegistry>
        </Providers>
      </body>
    </html>
  );
}