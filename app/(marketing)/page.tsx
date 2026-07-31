import Hero from '@/components/sections/Hero';
import StatsBanner from '@/components/sections/StatsBanner';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import LiveRaces from '@/components/sections/LiveRaces';
import AITopPredictions from '@/components/sections/AITopPredictions';
import HorseOfTheDay from '@/components/sections/HorseOfTheDay';
import DailyBulletins from '@/components/sections/DailyBulletins';
import AppPromoBanner from '@/components/sections/AppPromoBanner';
import PremiumBanner from '@/components/sections/PremiumBanner';
import { AnimateIn } from '@/components/ui/AnimateIn';

export default function MarketingPage() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      
      <AnimateIn direction="up">
        <StatsBanner />
      </AnimateIn>
      
      <div id="features">
        <AnimateIn direction="up">
          <FeaturesGrid />
        </AnimateIn>
      </div>
      
      <section className="container mx-auto px-4 py-8 relative z-10" id="races">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <AnimateIn direction="right" delay={0.1}>
              <LiveRaces />
            </AnimateIn>
          </div>
          <div className="lg:col-span-6" id="predictions">
            <AnimateIn direction="up" delay={0.2}>
              <AITopPredictions />
            </AnimateIn>
          </div>
          <div className="lg:col-span-3" id="horses">
            <AnimateIn direction="left" delay={0.3}>
              <HorseOfTheDay />
            </AnimateIn>
          </div>
        </div>
      </section>

      <div id="bulletins">
        <AnimateIn direction="up">
          <DailyBulletins />
        </AnimateIn>
      </div>
      
      <AnimateIn direction="up">
        <AppPromoBanner />
      </AnimateIn>
      
      <AnimateIn direction="up">
        <PremiumBanner />
      </AnimateIn>
    </>
  );
}
