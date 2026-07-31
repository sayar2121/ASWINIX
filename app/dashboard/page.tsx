import React from 'react';
import { RecommendationCard } from '@/components/features/RecommendationCard';
import { RaceCard } from '@/components/features/RaceCard';
import { HorseCard } from '@/components/features/HorseCard';
import { BulletinCard } from '@/components/features/BulletinCard';
import { WeatherCard } from '@/components/features/WeatherCard';
import { ConfidenceMeter } from '@/components/features/ConfidenceMeter';
import { PlaceholderChart } from '@/components/features/PlaceholderChart';
import { Alert } from '@/components/ui/Alert';

export default function Dashboard() {
  return (
    <div className="container mx-auto px-4 lg:px-12 py-8 space-y-12">
      {/* Notifications */}
      <div className="space-y-4">
        <Alert variant="info" title="System Update">
          ASWINIX AI Engine v2.4 has been deployed. Prediction models are now 12% more accurate for wet tracks.
        </Alert>
        <Alert variant="warning" title="Weather Alert">
          Heavy rain expected at Flemington this afternoon. Track condition downgraded to Heavy (8).
        </Alert>
      </div>

      {/* Row 1: The Three Core Questions */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Q1: What is happening today? */}
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-bold uppercase tracking-wide">Today's Races</h2>
          <div className="flex flex-col gap-4 h-full">
            <RaceCard 
              time="2:15 PM" 
              trackName="Flemington" 
              distance="1400m" 
              raceNumber={4} 
              status="Live" 
            />
            <RaceCard 
              time="2:55 PM" 
              trackName="Randwick" 
              distance="1200m" 
              raceNumber={6} 
              status="Upcoming" 
            />
          </div>
        </div>

        {/* Q2: What does the AI recommend? */}
        <div className="flex flex-col gap-4 lg:col-span-2">
          <h2 className="text-xl font-heading font-bold uppercase tracking-wide">AI Top Recommendation</h2>
          <RecommendationCard 
            horseName="Thunder Strike"
            raceName="Flemington - Race 4 (1400m)"
            winProbability={78}
            reason="Thunder Strike has an exceptional record on Heavy tracks (3 wins from 4 starts). The AI model gives a significant edge over the favorite due to the recent track downgrade."
          />
        </div>
      </div>

      {/* Row 2: Deep Dive Data */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-heading font-bold uppercase tracking-wide">Horse of the Day</h2>
          <HorseCard 
            name="Golden Ridge"
            age={4}
            weight="58.5kg"
            jockey="J. McDonald"
            trainer="C. Waller"
            recentForm="1-1-2-1"
            rating={94}
          />
        </div>

        <div className="flex flex-col gap-4 lg:col-span-2">
           <h2 className="text-xl font-heading font-bold uppercase tracking-wide">Race Analytics Overview</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <PlaceholderChart title="Win Probability Distribution" type="bar" height={200} />
             <div className="flex flex-col justify-center gap-6 p-6 bg-card rounded-xl border border-border">
               <h3 className="font-heading font-bold mb-2">Confidence Metrics</h3>
               <ConfidenceMeter score={92} label="Model Confidence" />
               <ConfidenceMeter score={45} label="Risk Assessment" />
               <ConfidenceMeter score={78} label="Value Rating" />
             </div>
           </div>
        </div>
      </div>

      {/* Row 3: What to explore next? */}
      <div className="flex flex-col gap-4 pt-4 border-t border-border/50">
        <h2 className="text-xl font-heading font-bold uppercase tracking-wide">Explore Next</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <BulletinCard 
              category="Market Insight"
              date="Today, 10:30 AM"
              readTime="4 min read"
              title="Track Bias Shifts at Rosehill: What the AI is seeing"
              excerpt="Our models have detected a significant inside bias developing at Rosehill over the last three races. Here is how you should adjust your betting strategy for the remaining card..."
            />
          </div>
          <div>
            <WeatherCard 
              location="Flemington"
              condition="Heavy Rain"
              temperature={14}
              icon="rainy"
              trackCondition="Heavy (8)"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
