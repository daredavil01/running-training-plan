'use client';

import { TrainingPlan } from '@/lib/paceCalculator';
import IntervalPaces from './IntervalPaces';
import TempoAndLongRuns from './TempoAndLongRuns';
import CompletionTimes from './CompletionTimes';

interface TrainingResultsProps {
  plan: TrainingPlan;
  raceType: 'half-marathon' | 'full-marathon';
}

export default function TrainingResults({ plan, raceType }: TrainingResultsProps) {
  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg shadow-lg p-4 sm:p-6 text-white">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-2">Your Personalized Training Plan</h2>
        <p className="text-center text-base sm:text-lg">
          Based on your 5K equivalent time of <strong>{plan.fiveKTime.toFixed(1)} minutes</strong>
        </p>
      </div>

      <IntervalPaces intervals={plan.intervals} />
      <TempoAndLongRuns tempo={plan.tempo} longRun={plan.longRun} />
      <CompletionTimes completionTimes={plan.completionTimes} raceType={raceType} />
    </div>
  );
}

