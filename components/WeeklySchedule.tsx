'use client';

import { WorkoutDay } from '@/lib/scheduleGenerator';

interface WeeklyScheduleProps {
  schedule: WorkoutDay[];
  raceType: 'half-marathon' | 'full-marathon';
}

export default function WeeklySchedule({ schedule, raceType }: WeeklyScheduleProps) {
  const getWorkoutColor = (workoutType: string): string => {
    if (workoutType.includes('Rest') || workoutType.includes('Cross')) {
      return 'bg-gray-100 border-gray-300';
    }
    if (workoutType.includes('Interval')) {
      return 'bg-red-50 border-red-300';
    }
    if (workoutType.includes('Tempo')) {
      return 'bg-orange-50 border-orange-300';
    }
    if (workoutType.includes('Long')) {
      return 'bg-green-50 border-green-300';
    }
    if (workoutType.includes('Strength')) {
      return 'bg-purple-50 border-purple-300';
    }
    return 'bg-blue-50 border-blue-300';
  };

  const getWorkoutIcon = (workoutType: string): string => {
    if (workoutType.includes('Rest')) return '😴';
    if (workoutType.includes('Interval')) return '🔥';
    if (workoutType.includes('Tempo')) return '⚡';
    if (workoutType.includes('Long')) return '🎯';
    if (workoutType.includes('Strength')) return '💪';
    if (workoutType.includes('Recovery')) return '🧘';
    if (workoutType.includes('Cross')) return '🚴';
    if (workoutType.includes('Easy')) return '🏃';
    return '🏃';
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 sm:p-6 transition-colors duration-300">
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 flex items-center">
        <span className="bg-purple-500 text-white rounded-full w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center mr-2 sm:mr-3 text-xs sm:text-sm">
          📅
        </span>
        Sample Weekly Training Schedule
      </h3>
      <p className="text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 text-sm sm:text-base">
        A typical training week for{' '}
        <strong>
          {raceType === 'half-marathon' ? 'Half Marathon' : 'Full Marathon'}
        </strong>{' '}
        preparation
      </p>

      <div className="space-y-2 sm:space-y-3">
        {schedule.map((day, index) => (
          <div
            key={index}
            className={`border-2 rounded-lg p-3 sm:p-4 transition-all duration-200 hover:shadow-md ${getWorkoutColor(
              day.workoutType
            )}`}
          >
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="flex-shrink-0">
                <div className="text-2xl sm:text-3xl">{getWorkoutIcon(day.workoutType)}</div>
              </div>
              <div className="flex-grow">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-1 gap-1 sm:gap-0">
                  <h4 className="font-bold text-gray-800 dark:text-gray-100 text-base sm:text-lg">{day.day}</h4>
                  {day.pace && (
                    <span className="bg-white dark:bg-gray-700 px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-bold text-gray-700 dark:text-gray-200 shadow-sm w-fit">
                      Pace: {day.pace}/km
                    </span>
                  )}
                </div>
                <p className="font-semibold text-gray-700 dark:text-gray-200 mb-1 text-sm sm:text-base">{day.workoutType}</p>
                <p className="text-gray-600 dark:text-gray-400 text-xs sm:text-sm">{day.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 sm:mt-6 p-3 sm:p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-2 border-purple-200 dark:border-purple-700">
        <h4 className="font-bold text-gray-800 dark:text-gray-100 mb-2 text-sm sm:text-base">Training Tips:</h4>
        <ul className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 space-y-1">
          <li>• Always warm up for 10-15 minutes before hard workouts</li>
          <li>• Cool down with 10 minutes of easy jogging after intense sessions</li>
          <li>• Listen to your body - take extra rest if needed</li>
          <li>• Stay hydrated and fuel properly before long runs</li>
          <li>• Gradually increase mileage - don&apos;t increase more than 10% per week</li>
        </ul>
      </div>
    </div>
  );
}

