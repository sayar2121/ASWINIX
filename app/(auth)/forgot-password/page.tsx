import Link from 'next/link';
import { Mail, ArrowLeft, ArrowRight } from 'lucide-react';

export default function ForgotPasswordPage() {
  return (
    <div className="w-full max-w-md bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-soft">
      <Link href="/login" className="inline-flex items-center gap-2 text-xs font-bold text-textSecondary hover:text-primary transition-colors mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Login
      </Link>

      <div className="mb-8">
        <h1 className="text-2xl font-heading font-bold uppercase tracking-wide mb-2">Reset Password</h1>
        <p className="text-sm text-textSecondary">Enter your email address and we'll send you a link to reset your password.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Email Address</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all shadow-premium flex items-center justify-center gap-2 group">
          SEND RESET LINK
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>
    </div>
  );
}
