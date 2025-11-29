'use client';

import { TrainingPlan } from '@/lib/paceCalculator';

interface TempoAndLongRunsProps {
  tempo: TrainingPlan['tempo'];
  longRun: TrainingPlan['longRun'];
}

export default function TempoAndLongRuns({ tempo, longRun }: TempoAndLongRunsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
      {/* Tempo Runs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
          <span className="bg-orange-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
            ⚡
          </span>
          Tempo Run Paces
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
          Comfortably hard pace - you should be able to speak in short phrases
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-orange-400 pl-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Short Tempo</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">20-30 minutes</p>
              </div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{tempo.short}</p>
            </div>
          </div>
          <div className="border-l-4 border-orange-500 pl-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Mid Tempo</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">30-45 minutes</p>
              </div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{tempo.mid}</p>
            </div>
          </div>
          <div className="border-l-4 border-orange-600 pl-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Long Tempo</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">45-60 minutes</p>
              </div>
              <p className="text-2xl font-bold text-orange-600 dark:text-orange-400">{tempo.long}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Long Runs */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
        <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
          <span className="bg-green-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
            🎯
          </span>
          Long Run Paces
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-xs sm:text-sm">
          Goal race pace for your long training runs
        </p>
        <div className="space-y-4">
          <div className="border-l-4 border-green-500 pl-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Half Marathon Pace</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Per kilometer</p>
              </div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{longRun.halfMarathonPace}</p>
            </div>
          </div>
          <div className="border-l-4 border-green-600 pl-4 py-2">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-semibold text-gray-800 dark:text-gray-200">Full Marathon Pace</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">Per kilometer</p>
              </div>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">{longRun.fullMarathonPace}</p>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
          <p className="text-xs text-gray-600 dark:text-gray-300">
            💡 <strong>Tip:</strong> Start your long runs slightly slower than target pace and 
            gradually build to goal pace in the final third.
          </p>
        </div>
      </div>
    </div>
  );
}

