'use client';

import { useState } from 'react';

interface InputFormProps {
  onSubmit: (timeInMinutes: number, isTimeFor10K: boolean, raceType: 'half-marathon' | 'full-marathon') => void;
}

export default function InputForm({ onSubmit }: InputFormProps) {
  const [timeTrialType, setTimeTrialType] = useState<'5K' | '10K'>('5K');
  const [minutes, setMinutes] = useState<string>('30');
  const [seconds, setSeconds] = useState<string>('0');
  const [raceType, setRaceType] = useState<'half-marathon' | 'full-marathon'>('half-marathon');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const mins = parseInt(minutes) || 0;
    const secs = parseInt(seconds) || 0;
    const totalMinutes = mins + secs / 60;

    if (totalMinutes > 0) {
      onSubmit(totalMinutes, timeTrialType === '10K', raceType);
    }
  };

  // Update default values when time trial type changes
  const handleTimeTrialTypeChange = (newType: '5K' | '10K') => {
    setTimeTrialType(newType);
    if (newType === '5K') {
      setMinutes('30');
      setSeconds('0');
    } else {
      setMinutes('55');
      setSeconds('0');
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-2xl mx-auto transition-colors duration-300">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-gray-100 mb-4 sm:mb-6 text-center">
        Enter Your Time Trial Results
      </h2>
      
      <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
        {/* Time Trial Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Time Trial Distance
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="5K"
                checked={timeTrialType === '5K'}
                onChange={(e) => handleTimeTrialTypeChange(e.target.value as '5K' | '10K')}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200">5K (5 kilometers)</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="10K"
                checked={timeTrialType === '10K'}
                onChange={(e) => handleTimeTrialTypeChange(e.target.value as '5K' | '10K')}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200">10K (10 kilometers)</span>
            </label>
          </div>
        </div>

        {/* Time Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Your {timeTrialType} Time
          </label>
          <div className="flex gap-4 items-center">
            <div className="flex-1">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Minutes</label>
              <input
                type="number"
                min="0"
                max="120"
                value={minutes}
                onChange={(e) => setMinutes(e.target.value)}
                placeholder="20"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
                required
              />
            </div>
            <span className="text-xl sm:text-2xl text-gray-400 dark:text-gray-500 mt-6">:</span>
            <div className="flex-1">
              <label className="block text-xs text-gray-500 dark:text-gray-400 mb-1">Seconds</label>
              <input
                type="number"
                min="0"
                max="59"
                value={seconds}
                onChange={(e) => setSeconds(e.target.value)}
                placeholder="00"
                className="w-full px-3 sm:px-4 py-2 sm:py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base sm:text-lg text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-700"
              />
            </div>
          </div>
        </div>

        {/* Race Goal Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Target Race Distance
          </label>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="half-marathon"
                checked={raceType === 'half-marathon'}
                onChange={(e) => setRaceType(e.target.value as 'half-marathon' | 'full-marathon')}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200">Half Marathon (21.1 km)</span>
            </label>
            <label className="flex items-center cursor-pointer">
              <input
                type="radio"
                value="full-marathon"
                checked={raceType === 'full-marathon'}
                onChange={(e) => setRaceType(e.target.value as 'half-marathon' | 'full-marathon')}
                className="mr-2 w-4 h-4 text-blue-600"
              />
              <span className="text-base sm:text-lg text-gray-800 dark:text-gray-200">Full Marathon (42.2 km)</span>
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-3 sm:py-4 px-6 rounded-lg transition duration-200 transform hover:scale-105 text-base sm:text-lg shadow-lg"
        >
          Get My Training Plan!
        </button>
      </form>
    </div>
  );
}

