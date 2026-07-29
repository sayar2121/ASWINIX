import Hero from '@/components/sections/Hero';
import StatsBanner from '@/components/sections/StatsBanner';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import LiveRaces from '@/components/sections/LiveRaces';
import AITopPredictions from '@/components/sections/AITopPredictions';
import HorseOfTheDay from '@/components/sections/HorseOfTheDay';
import DailyBulletins from '@/components/sections/DailyBulletins';
import AppPromoBanner from '@/components/sections/AppPromoBanner';
import PremiumBanner from '@/components/sections/PremiumBanner';

export default function MarketingPage() {
  return (
    <>
      <Hero />
      <StatsBanner />
      <FeaturesGrid />
      
      <section className="container mx-auto px-4 py-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          <div className="lg:col-span-3">
            <LiveRaces />
          </div>
          <div className="lg:col-span-6">
            <AITopPredictions />
          </div>
          <div className="lg:col-span-3">
            <HorseOfTheDay />
          </div>
        </div>
      </section>

      <DailyBulletins />
      <AppPromoBanner />
      <PremiumBanner />
    </>
  );
}
