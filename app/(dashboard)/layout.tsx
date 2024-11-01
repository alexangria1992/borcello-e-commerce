import type { Metadata } from 'next';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import LeftSideBar from '@/components/layout/LeftSideBar';
import TopBar from '@/components/layout/TopBar';

export const metadata: Metadata = {
  title: 'Borcella Admin Dashboard',
  description: 'Admin Dashboard to manage Borcellas data',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body>
          <div className='flex max-lg:flex-col border-2 border-pink-400'>
            <LeftSideBar />
            <TopBar />
            <div>{children}</div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
