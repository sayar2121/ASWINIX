"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'RACES', path: '/races' },
    { name: 'AI PREDICTIONS', path: '/predictions' },
    { name: 'HORSES', path: '/horses' },
    { name: 'JOCKEYS', path: '/jockeys' },
    { name: 'TRAINERS', path: '/trainers' },
    { name: 'BULLETINS', path: '/bulletins' },
    { name: 'NEWS', path: '/news' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'ABOUT US', path: '/about' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={120} height={120} className="rounded-full w-16 h-16 xl:w-[120px] xl:h-[120px] transition-all" />
          <div className="flex flex-col hidden sm:flex">
            <span className="font-heading font-bold text-xl tracking-wide leading-none">ASWINIX</span>
            <span className="text-[10px] text-textSecondary uppercase tracking-widest mt-1">Race. Bet. Win.</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden xl:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.path;
            return (
              <Link 
                key={link.name}
                href={link.path} 
                className={`text-xs font-bold uppercase tracking-wider py-2 transition-colors ${
                  isActive 
                    ? 'text-primary border-b-2 border-primary' 
                    : 'text-textSecondary hover:text-textPrimary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </div>

        {/* Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/login" className="px-6 py-2 rounded-full border border-border text-sm font-bold hover:bg-surface transition-colors">
            LOG IN
          </Link>
          <Link href="/register" className="px-6 py-2 rounded-full bg-gradient-primary text-white text-sm font-bold hover:brightness-110 transition-all shadow-soft">
            SIGN UP
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="xl:hidden p-2 text-textSecondary hover:text-textPrimary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="xl:hidden border-t border-border bg-bg absolute w-full left-0 top-full shadow-premium pb-4">
          <div className="flex flex-col px-4 py-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`py-4 border-b border-border/50 text-sm font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-primary' : 'text-textSecondary hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            
            <div className="flex flex-col gap-4 mt-6 md:hidden">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-3 rounded-xl border border-border text-sm font-bold hover:bg-surface transition-colors">
                LOG IN
              </Link>
              <Link href="/register" onClick={() => setIsMobileMenuOpen(false)} className="w-full text-center px-6 py-3 rounded-xl bg-gradient-primary text-white text-sm font-bold shadow-soft">
                SIGN UP
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
