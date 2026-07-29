import Link from 'next/link';
import { Mail, Lock, User, ArrowRight } from 'lucide-react';

export default function RegisterPage() {
  return (
    <div className="w-full max-w-md bg-card/80 backdrop-blur-md border border-border rounded-2xl p-8 shadow-soft">
      <div className="text-center mb-8">
        <h1 className="text-2xl font-heading font-bold uppercase tracking-wide mb-2">Create Account</h1>
        <p className="text-sm text-textSecondary">Join ASWINIX for unparalleled racing insights.</p>
      </div>

      <form className="space-y-5">
        <div className="space-y-2">
          <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Full Name</label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="text" 
              placeholder="John Doe" 
              className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Email</label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="email" 
              placeholder="you@example.com" 
              className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-bold text-textSecondary uppercase tracking-wider pl-1">Password</label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-textSecondary" />
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-surface border border-border rounded-xl pl-10 pr-4 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
            />
          </div>
        </div>

        <button type="submit" className="w-full py-4 mt-2 rounded-xl bg-gradient-primary text-white font-bold text-sm hover:brightness-110 transition-all shadow-premium flex items-center justify-center gap-2 group">
          CREATE ACCOUNT
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </button>
      </form>

      <div className="mt-8 relative">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border/50"></div>
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-card px-2 text-textSecondary uppercase tracking-wider font-bold">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface border border-border text-sm font-bold hover:bg-card hover:border-primary/50 transition-colors">
          <svg className="w-4 h-4" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          Google
        </button>
        <button className="flex items-center justify-center gap-2 py-3 rounded-xl bg-surface border border-border text-sm font-bold hover:bg-card hover:border-primary/50 transition-colors">
          <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
            <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.43.987 3.96.948 1.61-.027 2.623-1.488 3.62-2.924 1.155-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.505 1.09zM15.502 3.833c.843-1.012 1.4-2.427 1.245-3.833-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.56-1.699z" />
          </svg>
          Apple
        </button>
      </div>

      <p className="text-center text-sm text-textSecondary mt-8">
        Already have an account?{' '}
        <Link href="/login" className="font-bold text-white hover:text-primary transition-colors">
          Sign in
        </Link>
      </p>
    </div>
  );
}
