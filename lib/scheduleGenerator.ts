import { TrainingPlan } from './paceCalculator';

export interface WorkoutDay {
  day: string;
  workoutType: string;
  description: string;
  pace?: string;
}

/**
 * Generate a weekly training schedule for Half Marathon
 */
export function generateHalfMarathonSchedule(plan: TrainingPlan): WorkoutDay[] {
  return [
    {
      day: 'Monday',
      workoutType: 'Rest',
      description: 'Complete rest day - recovery is crucial',
      pace: undefined,
    },
    {
      day: 'Tuesday',
      workoutType: 'Tempo Run',
      description: '6-10 km at tempo pace (comfortably hard)',
      pace: plan.tempo.mid,
    },
    {
      day: 'Wednesday',
      workoutType: 'Strength Training',
      description: 'Focus on core, leg strength, and stability exercises',
      pace: undefined,
    },
    {
      day: 'Thursday',
      workoutType: 'Interval Run',
      description: '6-8 x 800M intervals with 400M recovery jog',
      pace: plan.intervals['800M'],
    },
    {
      day: 'Friday',
      workoutType: 'Strength Training',
      description: 'Upper body strength, core work, and flexibility',
      pace: undefined,
    },
    {
      day: 'Saturday',
      workoutType: 'Rest',
      description: 'Complete rest or light stretching/yoga',
      pace: undefined,
    },
    {
      day: 'Sunday',
      workoutType: 'Long Run',
      description: '16-21 km at your half marathon goal pace',
      pace: plan.longRun.halfMarathonPace,
    },
  ];
}

/**
 * Generate a weekly training schedule for Full Marathon
 */
export function generateFullMarathonSchedule(plan: TrainingPlan): WorkoutDay[] {
  return [
    {
      day: 'Monday',
      workoutType: 'Rest',
      description: 'Complete rest day - recovery is crucial',
      pace: undefined,
    },
    {
      day: 'Tuesday',
      workoutType: 'Tempo Run',
      description: '10-13 km at tempo pace (comfortably hard)',
      pace: plan.tempo.long,
    },
    {
      day: 'Wednesday',
      workoutType: 'Strength Training',
      description: 'Focus on core, leg strength, and stability exercises',
      pace: undefined,
    },
    {
      day: 'Thursday',
      workoutType: 'Interval Run',
      description: '5-6 x 1600M intervals with 800M recovery jog',
      pace: plan.intervals['1600M'],
    },
    {
      day: 'Friday',
      workoutType: 'Strength Training',
      description: 'Upper body strength, core work, and flexibility',
      pace: undefined,
    },
    {
      day: 'Saturday',
      workoutType: 'Easy Run',
      description: '10-13 km easy run at conversational pace',
      pace: undefined,
    },
    {
      day: 'Sunday',
      workoutType: 'Long Run',
      description: '26-32 km at your marathon goal pace',
      pace: plan.longRun.fullMarathonPace,
    },
  ];
}

/**
 * Generate weekly schedule based on race type
 */
export function generateWeeklySchedule(
  plan: TrainingPlan,
  raceType: 'half-marathon' | 'full-marathon'
): WorkoutDay[] {
  if (raceType === 'half-marathon') {
    return generateHalfMarathonSchedule(plan);
  } else {
    return generateFullMarathonSchedule(plan);
  }
}

