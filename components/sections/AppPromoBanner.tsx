import { Brain, Search, Activity, LineChart, Smartphone, Apple, Play } from 'lucide-react';
import Image from 'next/image';

export default function AppPromoBanner() {
  const features = [
    { icon: <Brain className="w-6 h-6 text-primary" />, label: 'AI Predictions' },
    { icon: <Search className="w-6 h-6 text-primary" />, label: 'Expert Insights' },
    { icon: <Activity className="w-6 h-6 text-primary" />, label: 'Real-Time Data' },
    { icon: <LineChart className="w-6 h-6 text-primary" />, label: 'Advanced Analytics' },
    { icon: <Smartphone className="w-6 h-6 text-primary" />, label: 'Anywhere, Anytime' },
  ];

  return (
    <section className="container mx-auto px-4 py-8 mb-8 relative z-10">
      <div className="w-full bg-[#050816] border border-border rounded-2xl overflow-hidden shadow-soft relative flex flex-col md:flex-row items-stretch">
        
        {/* Subtle Background Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-secondary/10 pointer-events-none" />

        {/* Phones Image Area (Left) - using CSS phones with demo image */}
        <div className="md:w-1/4 relative hidden md:block min-h-[200px] overflow-hidden border-r border-border/50">
           <div className="absolute -bottom-10 -left-4 w-[120%] h-[150%] bg-primary/20 rotate-12 blur-[80px] pointer-events-none" />
           
           {/* Phone 1 */}
           <div className="absolute bottom-[-20px] left-2 w-36 h-[220px] bg-[#0B1225] border-[3px] border-border/80 rounded-[1.5rem] shadow-xl transform -rotate-12 flex items-center justify-center overflow-hidden">
             <div className="w-full h-full relative opacity-60">
                <Image src="/images/home_image.png" alt="App Screen" fill className="object-cover" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full" />
             </div>
           </div>
           
           {/* Phone 2 */}
           <div className="absolute bottom-[-10px] left-20 w-40 h-[240px] bg-[#0B1225] border-[3px] border-border/80 rounded-[1.5rem] shadow-2xl transform rotate-6 flex items-center justify-center overflow-hidden">
             <div className="w-full h-full relative opacity-80">
                <Image src="/images/home_image.png" alt="App Screen" fill className="object-cover" />
                <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-3 bg-black rounded-full" />
             </div>
           </div>
        </div>

        {/* Center Content */}
        <div className="flex-1 flex flex-col justify-center py-8 px-6 md:px-10 border-b md:border-b-0 md:border-r border-border/50 relative z-10">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-8">The Ultimate AI Edge in Horse Racing</h2>
          
          <div className="flex flex-wrap md:flex-nowrap items-start justify-between gap-4">
            {features.map((feature, idx) => (
              <div key={idx} className="flex flex-col items-center gap-3 text-center">
                <div className="w-12 h-12 rounded-xl bg-transparent border border-primary/30 flex items-center justify-center shadow-[inset_0_0_15px_rgba(37,99,235,0.15)] group hover:border-primary transition-colors cursor-default">
                  {feature.icon}
                </div>
                <span className="text-[9px] md:text-[10px] font-semibold text-white/90 tracking-wider w-16">{feature.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content */}
        <div className="md:w-[320px] p-8 flex flex-col justify-center relative z-10">
          <h3 className="text-lg font-heading font-bold text-[#A855F7] mb-1 uppercase tracking-wider">Get the Aswinix App</h3>
          <p className="text-xs text-white/80 mb-6">AI intelligence at your fingertips.</p>
          
          <div className="flex gap-3">
            {/* Google Play Button */}
            <button className="flex-1 flex items-center justify-center gap-2 bg-black border border-border/60 hover:border-primary/50 text-white rounded-lg py-2 px-2 transition-colors">
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                <path fill="#4CAF50" d="M41.8,11.2L283.4,260.6L41.8,500.8C38,496,36,489.6,36,482V30C36,22.4,38,16,41.8,11.2z"/>
                <path fill="#FFEB3B" d="M371,348.6L283.4,260.6L41.8,11.2C50.4,2.2,63.6-1.5,75.4,3.1L371,163.4C371,163.4,371,348.6,371,348.6z"/>
                <path fill="#F44336" d="M371,163.4L283.4,251.4L41.8,500.8C50.4,509.8,63.6,513.5,75.4,508.9L371,348.6C371,348.6,371,163.4,371,163.4z"/>
                <path fill="#2196F3" d="M464,233.1L371,163.4L283.4,251.4L371,348.6L464,278.9C475.5,272.3,482.7,259.7,482.7,246C482.7,232.3,475.5,219.7,464,233.1z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[7px] uppercase leading-none opacity-80">GET IT ON</span>
                <span className="text-[11px] font-bold leading-tight">Google Play</span>
              </div>
            </button>
            
            {/* App Store Button */}
            <button className="flex-1 flex items-center justify-center gap-2 bg-black border border-border/60 hover:border-primary/50 text-white rounded-lg py-2 px-2 transition-colors">
              <svg className="w-5 h-5 fill-white shrink-0" viewBox="0 0 384 512" xmlns="http://www.w3.org/2000/svg">
                <path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"/>
              </svg>
              <div className="flex flex-col items-start">
                <span className="text-[7px] uppercase leading-none opacity-80">Download on the</span>
                <span className="text-[11px] font-bold leading-tight">App Store</span>
              </div>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
