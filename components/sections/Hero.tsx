import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full py-20 overflow-hidden">
      {/* Background glowing effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[120px] pointer-events-none -z-10" />
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-secondary/20 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-8 relative z-10">
          <div className="space-y-2">
            <h1 className="text-5xl lg:text-7xl font-heading font-extrabold tracking-tight leading-tight uppercase">
              Predict <br /> Smarter. <br />
              <span className="text-transparent bg-clip-text bg-gradient-primary">
                Race Smarter.
              </span>
            </h1>
          </div>
          
          <p className="text-lg text-textSecondary max-w-xl leading-relaxed">
            AI-powered racing intelligence that analyzes millions of data points to give you the winning edge. Advanced predictions, expert insights, real-time updates.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <Link 
              href="/races" 
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-primary text-white font-semibold hover:brightness-110 transition-all shadow-soft hover:shadow-premium"
            >
              EXPLORE RACES
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              href="/predictions" 
              className="group flex items-center gap-2 px-8 py-4 rounded-full bg-surface border border-border text-white font-semibold hover:bg-card hover:border-primary/50 transition-all"
            >
              SEE AI PREDICTIONS
              <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Social Proof */}
          <div className="flex items-center gap-4 pt-4 border-t border-border/50">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full bg-card border-2 border-bg overflow-hidden flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-textSecondary" />
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-1">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg key={star} className="w-4 h-4 text-warning fill-warning" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <span className="font-bold text-sm ml-2">4.8/5</span>
              </div>
              <span className="text-sm text-textSecondary">50,000+ Racing Enthusiasts Worldwide</span>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Image */}
        <div className="relative z-10 w-full aspect-square md:aspect-video lg:aspect-square flex justify-center items-center">
          <div className="relative w-full h-full">
            {/* The Image */}
            <div className="w-full h-full relative overflow-hidden rounded-2xl animate-float-slow">
               <Image 
                 src="/images/home_image.png" 
                 alt="ASWINIX Platform" 
                 fill 
                 className="object-contain lg:object-cover scale-105" 
                 priority
               />
               
               {/* Gradients to blend image into background */}
               <div className="absolute inset-0 bg-gradient-to-t from-bg via-transparent to-bg/10 z-10 pointer-events-none opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-r from-bg via-transparent to-bg/10 z-10 pointer-events-none opacity-80" />
               <div className="absolute inset-0 bg-gradient-to-l from-bg via-transparent to-transparent z-10 pointer-events-none" />
               <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(5,8,22,1)] z-10 pointer-events-none" />
               
               {/* Floating Badges (3D Continuous Float) */}
               <div className="absolute top-8 right-8 z-20 animate-float drop-shadow-[0_15px_15px_rgba(37,99,235,0.25)]">
                 <div className="px-4 py-1.5 bg-bg/90 backdrop-blur-md border-t border-l border-primary/50 border-r border-b border-primary/20 text-primary rounded-full text-xs font-bold tracking-wider shadow-[0_0_20px_rgba(37,99,235,0.3)] flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    LIVE PREDICTION
                 </div>
               </div>
               
               <div className="absolute bottom-8 left-8 z-20 space-y-3 animate-float-delayed drop-shadow-[0_20px_20px_rgba(0,0,0,0.5)]">
                  <h3 className="font-heading font-bold text-3xl text-white drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">Hyderabad Race 6</h3>
                  <div className="flex gap-4 items-center bg-bg/90 backdrop-blur-md border-t border-l border-border border-r border-b border-border/30 rounded-xl p-4 w-fit shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
                     <div className="flex flex-col">
                        <span className="text-xs text-textSecondary uppercase font-bold tracking-wider drop-shadow-sm">AI Confidence</span>
                        <span className="text-2xl font-bold text-success drop-shadow-[0_0_10px_rgba(34,197,94,0.3)]">82%</span>
                     </div>
                     <div className="w-px h-10 bg-border drop-shadow-sm"></div>
                     <div className="flex flex-col">
                        <span className="text-xs text-textSecondary uppercase font-bold tracking-wider drop-shadow-sm">Recommended</span>
                        <span className="text-base font-bold text-white drop-shadow-sm">Strong Edge</span>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Simple fallback user icon
function UserIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}
