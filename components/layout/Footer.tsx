import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={120} height={120} className="rounded-full w-20 h-20 md:w-[120px] md:h-[120px] transition-all" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-xl tracking-wide leading-none text-white">ASWINIX</span>
                <span className="text-[10px] text-textSecondary uppercase tracking-widest mt-1">Race. Bet. Win.</span>
              </div>
            </Link>
            <p className="text-sm text-textSecondary leading-relaxed pr-4">
              AI-powered horse racing intelligence platform built for smart punters and racing enthusiasts.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z"/></svg>
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors">
                <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.295-.6.295-.002 0-.003 0-.005 0l.213-3.054 5.56-5.022c.24-.213-.054-.334-.373-.121l-6.869 4.326-2.96-.924c-.64-.203-.658-.64.135-.954l11.566-4.458c.538-.196 1.006.128.832.94z"/></svg>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 gap-8 md:col-span-2">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="/races" className="text-sm text-textSecondary hover:text-primary transition-colors">Races</Link></li>
                <li><Link href="/predictions" className="text-sm text-textSecondary hover:text-primary transition-colors">AI Predictions</Link></li>
                <li><Link href="/horses" className="text-sm text-textSecondary hover:text-primary transition-colors">Horses</Link></li>
                <li><Link href="/jockeys" className="text-sm text-textSecondary hover:text-primary transition-colors">Jockeys</Link></li>
                <li><Link href="/trainers" className="text-sm text-textSecondary hover:text-primary transition-colors">Trainers</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4 invisible">Quick Links 2</h4>
              <ul className="space-y-3">
                <li><Link href="/bulletins" className="text-sm text-textSecondary hover:text-primary transition-colors">Bulletins</Link></li>
                <li><Link href="/news" className="text-sm text-textSecondary hover:text-primary transition-colors">News</Link></li>
                <li><Link href="/pricing" className="text-sm text-textSecondary hover:text-primary transition-colors">Pricing</Link></li>
                <li><Link href="/about" className="text-sm text-textSecondary hover:text-primary transition-colors">About Us</Link></li>
                <li><Link href="/contact" className="text-sm text-textSecondary hover:text-primary transition-colors">Contact Us</Link></li>
              </ul>
            </div>
          </div>

          {/* Support & Newsletter */}
          <div className="md:col-span-1 space-y-8">
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Support</h4>
              <ul className="space-y-3">
                <li><Link href="/help" className="text-sm text-textSecondary hover:text-primary transition-colors">Help Center</Link></li>
                <li><Link href="/how-it-works" className="text-sm text-textSecondary hover:text-primary transition-colors">How It Works</Link></li>
                <li><Link href="/terms" className="text-sm text-textSecondary hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-sm text-textSecondary hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/responsible-gaming" className="text-sm text-textSecondary hover:text-primary transition-colors">Responsible Gaming</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Newsletter</h4>
              <p className="text-sm text-textSecondary mb-4">Subscribe to our daily AI bulletins and never miss an edge.</p>
              <div className="flex bg-bg rounded-lg p-1 border border-border">
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-transparent text-sm w-full outline-none px-3 text-textPrimary placeholder:text-textSecondary/50" 
                />
                <button className="bg-primary hover:bg-primary/90 transition-colors p-2 rounded-md text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m22 2-7 20-4-9-9-4Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M22 2 11 13" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-border/50 text-xs text-textSecondary">
          <p>© 2026 Aswinix. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <Link href="/disclaimer" className="hover:text-primary transition-colors">Disclaimer</Link>
            <span>•</span>
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy</Link>
            <span>•</span>
            <Link href="/responsible-gaming" className="hover:text-primary transition-colors">Responsible Gaming</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
