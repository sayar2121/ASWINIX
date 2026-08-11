"use client";

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/Button';
import { GlobalSearch } from '@/components/features/GlobalSearch';
import { NotificationsPanel } from '@/components/features/NotificationsPanel';

export default function Navbar() {
  const pathname = usePathname();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'RACES', path: '/races' },
    { name: 'AI PREDICTIONS', path: '/predictions' },
    { name: 'HORSES', path: '/horses' },
    { name: 'JOCKEYS', path: '/jockeys' },
    { name: 'TRAINERS', path: '/trainers' },
    { name: 'OWNERS', path: '/owners' },
    { name: 'CLUBS', path: '/clubs' },
    { name: 'STUD FARMS', path: '/stud-farms' },
    { name: 'RACE ENTRIES', path: '/race-entries' },
    { name: 'BULLETINS', path: '/bulletins' },
    { name: 'NEWS', path: '/news' },
    { name: 'PRICING', path: '/pricing' },
    { name: 'ABOUT US', path: '/about' },
  ];

  return (
    <>
      {/* Desktop Header */}
      <header className="sticky top-0 z-50 w-full h-[80px] bg-[#0A0D14] border-b border-border hidden lg:flex items-center justify-between px-6 xl:px-10">
        {/* Logo (Left) */}
        <div className="flex items-center justify-start min-w-[200px]">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={56} height={56} className="rounded-full w-14 h-14" />
            <div className="flex flex-col">
              <span className="font-heading font-bold text-[22px] tracking-wide text-white leading-none">ASWINIX</span>
              <span className="text-[9px] text-textSecondary uppercase tracking-[0.2em] mt-1">Race. Bet. Win.</span>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation (Center) */}
        <nav className="flex-1 flex items-center justify-center h-full gap-6 xl:gap-8">
          {navLinks.map((link) => {
            const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
            return (
              <Link 
                key={link.name}
                href={link.path} 
                className={`relative flex items-center text-[11px] font-medium font-body uppercase tracking-wider h-full transition-all ${
                  isActive 
                    ? 'text-primary' 
                    : 'text-textSecondary hover:text-white'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-[2px] bg-primary"></span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Actions (Right) */}
        <div className="flex items-center justify-end min-w-[200px] gap-4">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-textSecondary hover:text-white hover:bg-surface transition-colors"
          >
            <span className="material-symbols-rounded text-[22px]">search</span>
          </button>
          <button 
            onClick={() => setIsNotifOpen(true)}
            className="w-10 h-10 rounded-full flex items-center justify-center text-textSecondary hover:text-white hover:bg-surface transition-colors relative"
          >
            <span className="material-symbols-rounded text-[22px]">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-primary rounded-full"></span>
          </button>
          <Link href="/dashboard/profile">
            <div className="w-9 h-9 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden hover:border-primary transition-colors ml-2">
              <span className="material-symbols-rounded text-textSecondary text-[20px]">person</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Mobile Top Header (Just Logo and Actions) */}
      <header className="sticky top-0 z-50 w-full h-[60px] border-b border-border glass flex md:hidden items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={40} height={40} className="rounded-full w-8 h-8" />
          <span className="font-heading font-bold text-xl tracking-wider text-white">ASWINIX</span>
        </Link>
        <div className="flex items-center gap-2">
          <button 
            onClick={() => setIsSearchOpen(true)}
            className="w-10 h-10 flex items-center justify-center text-textSecondary"
          >
            <span className="material-symbols-rounded">search</span>
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="w-10 h-10 flex items-center justify-center text-textSecondary"
          >
            <span className="material-symbols-rounded text-2xl">{isMobileMenuOpen ? 'close' : 'menu'}</span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-40 bg-bg/95 backdrop-blur-md md:hidden flex flex-col p-6 overflow-y-auto animate-fade-in pb-[100px]">
          <nav className="flex flex-col gap-6">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path !== '/' && pathname.startsWith(link.path));
              return (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-heading font-bold uppercase tracking-wider transition-colors ${
                    isActive ? 'text-primary' : 'text-textSecondary hover:text-white'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}

      {/* Mobile Bottom Navigation Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 h-[70px] bg-[#0A0D14]/95 backdrop-blur-md border-t border-border flex md:hidden items-center justify-around px-2 pb-2">
        <Link href="/" className={`flex flex-col items-center gap-1 ${pathname === '/' ? 'text-primary' : 'text-textSecondary'}`}>
          <span className="material-symbols-rounded text-[24px]">home</span>
          <span className="text-[10px] font-medium tracking-wide">Home</span>
        </Link>
        <Link href="/races" className={`flex flex-col items-center gap-1 ${pathname.startsWith('/races') ? 'text-primary' : 'text-textSecondary'}`}>
          <span className="material-symbols-rounded text-[24px]">sports_score</span>
          <span className="text-[10px] font-medium tracking-wide">Races</span>
        </Link>
        <Link href="/predictions" className={`flex flex-col items-center gap-1 ${pathname.startsWith('/predictions') ? 'text-primary' : 'text-textSecondary'}`}>
          <span className="material-symbols-rounded text-[24px]">analytics</span>
          <span className="text-[10px] font-medium tracking-wide">AI</span>
        </Link>
        <Link href="/bulletins" className={`flex flex-col items-center gap-1 ${pathname.startsWith('/bulletins') ? 'text-primary' : 'text-textSecondary'}`}>
          <span className="material-symbols-rounded text-[24px]">feed</span>
          <span className="text-[10px] font-medium tracking-wide">Bulletins</span>
        </Link>
        <Link href="/dashboard/profile" className={`flex flex-col items-center gap-1 ${pathname.startsWith('/dashboard/profile') ? 'text-primary' : 'text-textSecondary'}`}>
          <span className="material-symbols-rounded text-[24px]">person</span>
          <span className="text-[10px] font-medium tracking-wide">Profile</span>
        </Link>
      </div>

      {/* Modals & Panels */}
      <GlobalSearch isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
      <NotificationsPanel isOpen={isNotifOpen} onClose={() => setIsNotifOpen(false)} />
    </>
  );
}
