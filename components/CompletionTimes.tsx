'use client';

import { TrainingPlan } from '@/lib/paceCalculator';

interface CompletionTimesProps {
  completionTimes: TrainingPlan['completionTimes'];
  raceType: 'half-marathon' | 'full-marathon';
}

export default function CompletionTimes({ completionTimes, raceType }: CompletionTimesProps) {
  const races = [
    {
      key: '10K',
      label: '10K',
      distance: '10 kilometers',
      time: completionTimes['10K'],
      isTarget: false,
    },
    {
      key: 'halfMarathon',
      label: 'Half Marathon',
      distance: '21.1 kilometers',
      time: completionTimes.halfMarathon,
      isTarget: raceType === 'half-marathon',
    },
    {
      key: 'fullMarathon',
      label: 'Full Marathon',
      distance: '42.2 kilometers',
      time: completionTimes.fullMarathon,
      isTarget: raceType === 'full-marathon',
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
        <span className="bg-blue-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
          🏁
        </span>
        Predicted Completion Times
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        Based on your current fitness level, here are your predicted race finish times
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
        {races.map((race) => (
          <div
            key={race.key}
            className={`rounded-lg p-4 sm:p-6 text-center transition-all duration-200 ${
              race.isTarget
                ? 'bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-xl sm:transform sm:scale-105'
                : 'bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600'
            }`}
          >
            {race.isTarget && (
              <div className="mb-2">
                <span className="inline-block bg-yellow-400 text-gray-800 text-xs font-bold px-3 py-1 rounded-full">
                  YOUR GOAL
                </span>
              </div>
            )}
            <h4
              className={`text-base sm:text-lg font-semibold mb-1 ${
                race.isTarget ? 'text-white' : 'text-gray-800 dark:text-gray-200'
              }`}
            >
              {race.label}
            </h4>
            <p
              className={`text-xs mb-2 sm:mb-3 ${
                race.isTarget ? 'text-blue-100' : 'text-gray-500 dark:text-gray-400'
              }`}
            >
              {race.distance}
            </p>
            <p
              className={`text-2xl sm:text-3xl font-bold ${
                race.isTarget ? 'text-white' : 'text-blue-600 dark:text-blue-400'
              }`}
            >
              {race.time}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Note:</strong> These times are predictions based on your time trial. 
          Actual race performance depends on training consistency, race day conditions, 
          nutrition, and pacing strategy.
        </p>
      </div>
    </div>
  );
}

