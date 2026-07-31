import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';

export default function Footer() {
  return (
    <footer className="w-full bg-surface border-t border-border pt-16 pb-8 relative z-10">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/images/ASWINIX_LOGO.jpeg" alt="ASWINIX Logo" width={64} height={64} className="rounded-full w-16 h-16" />
              <div className="flex flex-col">
                <span className="font-heading font-bold text-2xl tracking-wide leading-none text-white">ASWINIX</span>
                <span className="text-[10px] text-textSecondary uppercase tracking-widest mt-1">Predict Smarter. Race Smarter.</span>
              </div>
            </Link>            <p className="text-sm text-textSecondary leading-relaxed pr-4">
              AI-powered horse racing intelligence platform built for smart punters and racing enthusiasts.
            </p>
            
            <div className="flex items-center gap-4 pt-2">
              {/* Replace lucide icons with simple text or other SVGs if needed, but since spec uses Material Symbols, we'll try to find similar or keep simple */}
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-primary">
                <span className="font-bold text-sm">f</span>
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-primary">
                <span className="font-bold text-sm">X</span>
              </Link>
              <Link href="#" className="text-textSecondary hover:text-primary transition-colors flex items-center justify-center w-8 h-8 rounded-full border border-border hover:border-primary">
                <span className="font-bold text-sm">in</span>
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
                <li><Link href="/terms" className="text-sm text-textSecondary hover:text-primary transition-colors">Terms & Conditions</Link></li>
                <li><Link href="/privacy" className="text-sm text-textSecondary hover:text-primary transition-colors">Privacy Policy</Link></li>
                <li><Link href="/disclaimer" className="text-sm text-textSecondary hover:text-primary transition-colors">Disclaimer</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">Newsletter</h4>
              <p className="text-sm text-textSecondary mb-4">Subscribe to our daily AI bulletins and never miss an edge.</p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="h-10"
                />
                <Button variant="primary" size="sm" className="h-10 px-4">
                  <span className="material-symbols-rounded">arrow_forward</span>
                </Button>
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
            <Link href="/terms" className="hover:text-primary transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
