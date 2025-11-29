'use client';

import { TrainingPlan } from '@/lib/paceCalculator';

interface IntervalPacesProps {
  intervals: TrainingPlan['intervals'];
}

export default function IntervalPaces({ intervals }: IntervalPacesProps) {
  const intervalDistances = [
    { key: '400M', label: '400 Meters', distanceKm: 0.4 },
    { key: '600M', label: '600 Meters', distanceKm: 0.6 },
    { key: '800M', label: '800 Meters', distanceKm: 0.8 },
    { key: '1000M', label: '1000 Meters', distanceKm: 1.0 },
    { key: '1200M', label: '1200 Meters', distanceKm: 1.2 },
    { key: '1600M', label: '1600 Meters', distanceKm: 1.6 },
    { key: '2000M', label: '2000 Meters', distanceKm: 2.0 },
  ];

  // Calculate pace per kilometer from interval time
  const calculatePacePerKm = (timeString: string, distanceKm: number): string => {
    if (!timeString) return 'N/A';
    
    // Parse time string (format: "0:MM:SS")
    const parts = timeString.split(':');
    let totalSeconds = 0;
    
    if (parts.length === 3) {
      totalSeconds = parseInt(parts[0]) * 3600 + parseInt(parts[1]) * 60 + parseInt(parts[2]);
    } else if (parts.length === 2) {
      totalSeconds = parseInt(parts[0]) * 60 + parseInt(parts[1]);
    }
    
    // Calculate pace per km (seconds per km)
    const paceSecondsPerKm = totalSeconds / distanceKm;
    const minutes = Math.floor(paceSecondsPerKm / 60);
    const seconds = Math.round(paceSecondsPerKm % 60);
    
    return `${minutes}:${String(seconds).padStart(2, '0')}/km`;
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
        <span className="bg-red-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
          🏃
        </span>
        Interval Training Paces
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
        Use these paces for speed work and interval training on the track
      </p>
      <div className="overflow-x-auto -mx-4 sm:mx-0">
        <table className="w-full min-w-[500px]">
          <thead>
            <tr className="bg-gray-100 dark:bg-gray-700">
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Distance</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Target Pace</th>
              <th className="text-center py-2 sm:py-3 px-2 sm:px-4 font-semibold text-gray-700 dark:text-gray-200 text-xs sm:text-sm">Target Time</th>
            </tr>
          </thead>
          <tbody>
            {intervalDistances.map((interval, index) => {
              const pace = intervals[interval.key as keyof typeof intervals];
              const targetPace = calculatePacePerKm(pace, interval.distanceKm);
              return (
                <tr
                  key={interval.key}
                  className={index % 2 === 0 ? 'bg-white dark:bg-gray-800' : 'bg-gray-50 dark:bg-gray-750'}
                >
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-medium text-gray-800 dark:text-gray-200 text-xs sm:text-sm">{interval.label}</td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-orange-600 dark:text-orange-400 text-base sm:text-lg">
                    {targetPace}
                  </td>
                  <td className="py-2 sm:py-3 px-2 sm:px-4 text-center font-bold text-red-600 dark:text-red-400 text-base sm:text-lg">
                    {pace || 'N/A'}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

