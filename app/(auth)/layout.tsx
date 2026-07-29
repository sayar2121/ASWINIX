import Link from 'next/link';
import Image from 'next/image';

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-bg overflow-x-hidden flex flex-col relative">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Simple Header */}
      <header className="w-full p-6 relative z-10">
        <Link href="/" className="flex items-center justify-center md:justify-start gap-3 w-full md:w-fit">
          <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={120} height={120} className="rounded-full w-24 h-24 md:w-[120px] md:h-[120px] transition-all" />
          <span className="font-heading font-bold text-xl tracking-wide leading-none text-white">ASWINIX</span>
        </Link>
      </header>
      
      {/* Main Content Area */}
      <main className="flex-1 flex flex-col items-center justify-center p-4 relative z-10">
        {children}
      </main>
    </div>
  );
}
